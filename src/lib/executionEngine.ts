// ═══════════════════════════════════════════════════════════════
//  EXECUTION ENGINE
//  executeBlock(block) → ExecutionStep[]
//  Puro: sin side-effects, sin Vue, testeable con vitest
// ═══════════════════════════════════════════════════════════════

import type {
  Block, NormalBlock, SupersetBlock, CircuitBlock,
  SetDef, NormalSetDef, DropSetDef, RestPauseSetDef, MyoRepSetDef,
  ExecutionExercise,
  ExecutionStep, ExerciseStep, RestStep, MiniRestStep, RoundRestStep,
  StepMetadata, BlockVariant, SetPattern, ExecutionResult,
} from '@/types/execution.types'
import type { ExerciseBlock, BlockExercise, SetConfig } from '@/types/workout.types'

// ─── Helpers ──────────────────────────────────────────────────

let _stepCounter = 0
function sid(): string {
  return `step-${++_stepCounter}-${Math.random().toString(36).slice(2, 7)}`
}

function restStep(duration: number, label?: string): RestStep {
  return { type: 'rest', stepId: sid(), duration, label }
}

function miniRestStep(duration: number): MiniRestStep {
  return { type: 'mini-rest', stepId: sid(), duration }
}

function roundRestStep(duration: number, round: number, total: number): RoundRestStep {
  return { type: 'round-rest', stepId: sid(), duration, round, totalRounds: total }
}

function exerciseStep(
  exerciseId: string,
  setIndex: number,
  reps: number,
  repsMin: number,
  meta: StepMetadata,
  opts: Partial<ExerciseStep> = {},
): ExerciseStep {
  return {
    type: 'exercise',
    stepId: sid(),
    exerciseId,
    setIndex,
    reps,
    repsMin,
    isLastInSet: opts.isLastInSet ?? true,
    metadata: meta,
    ...opts,
  }
}

// ─── Set handlers (discriminated by pattern) ──────────────────

type SetHandler<T extends SetDef> = (
  def: T,
  exerciseId: string,
  setIndex: number,
  meta: StepMetadata,
) => ExecutionStep[]

const handleNormalSet: SetHandler<NormalSetDef> = (def, exerciseId, setIndex, meta) => [
  exerciseStep(exerciseId, setIndex, def.repsMax, def.repsMin, meta, {
    weight: def.weight,
    rpe:    def.rpe,
    tempo:  def.tempo,
  }),
  restStep(def.restSeconds, 'Descanso'),
]

const handleDropSet: SetHandler<DropSetDef> = (def, exerciseId, setIndex, meta) => {
  const steps: ExecutionStep[] = def.drops.flatMap((drop, i) => {
    const isLast = i === def.drops.length - 1
    return [
      exerciseStep(exerciseId, setIndex, drop.reps, drop.reps, meta, {
        weight:      drop.weightFactor,  // consumidor multiplica vs. peso base
        rpe:         drop.rpe,
        label:       `Drop ${i + 1}`,
        isLastInSet: isLast,
      }),
      // Sin descanso entre drops, solo al final
      ...(isLast ? [] : []),
    ]
  })
  steps.push(restStep(def.restAfterSeconds, 'Descanso post-dropset'))
  return steps
}

const handleRestPauseSet: SetHandler<RestPauseSetDef> = (def, exerciseId, setIndex, meta) => {
  const steps: ExecutionStep[] = []
  let repsRemaining = def.totalReps
  let miniSet = 0

  while (repsRemaining > 0 && miniSet < def.maxMiniSets) {
    const repsThisSet = Math.min(repsRemaining, def.totalReps)
    const isLast = miniSet === def.maxMiniSets - 1 || repsRemaining <= 0
    steps.push(
      exerciseStep(exerciseId, setIndex, repsThisSet, 1, meta, {
        weight:      def.weight,
        rpe:         def.rpe,
        label:       miniSet === 0 ? 'Set inicial' : `Mini-set ${miniSet}`,
        isLastInSet: isLast,
      }),
    )
    repsRemaining -= repsThisSet
    miniSet++
    if (repsRemaining > 0) steps.push(miniRestStep(def.miniRestSeconds))
  }

  steps.push(restStep(def.restAfterSeconds, 'Descanso post rest-pause'))
  return steps
}

const handleMyoRepSet: SetHandler<MyoRepSetDef> = (def, exerciseId, setIndex, meta) => {
  const steps: ExecutionStep[] = []

  // Activation set
  steps.push(
    exerciseStep(exerciseId, setIndex, def.activationReps, def.minRepsToStop, meta, {
      weight:      def.weight,
      label:       'Activación',
      isLastInSet: false,
    }),
  )
  steps.push(miniRestStep(def.miniRestSeconds))

  // Mini-sets hasta maxMiniSets
  for (let i = 0; i < def.maxMiniSets; i++) {
    const isLast = i === def.maxMiniSets - 1
    steps.push(
      exerciseStep(exerciseId, setIndex, def.miniSetReps, def.minRepsToStop, meta, {
        weight:      def.weight,
        label:       `Myo ${i + 1} — Parar si < ${def.minRepsToStop} reps`,
        isLastInSet: isLast,
      }),
    )
    if (!isLast) steps.push(miniRestStep(def.miniRestSeconds))
  }

  steps.push(restStep(def.restAfterSeconds, 'Descanso post myo-rep'))
  return steps
}

// ─── Dispatch de set (sin if anidados) ────────────────────────

const SET_HANDLERS: {
  [K in SetPattern]: SetHandler<Extract<SetDef, { pattern: K }>>
} = {
  normal:     handleNormalSet    as SetHandler<Extract<SetDef, { pattern: 'normal' }>>,
  dropset:    handleDropSet      as SetHandler<Extract<SetDef, { pattern: 'dropset' }>>,
  rest_pause: handleRestPauseSet as SetHandler<Extract<SetDef, { pattern: 'rest_pause' }>>,
  myo_rep:    handleMyoRepSet    as SetHandler<Extract<SetDef, { pattern: 'myo_rep' }>>,
}

function executeSet(
  def: SetDef,
  exerciseId: string,
  setIndex: number,
  meta: StepMetadata,
): ExecutionStep[] {
  const handler = SET_HANDLERS[def.pattern] as SetHandler<typeof def>
  return handler(def, exerciseId, setIndex, meta)
}

// ─── Ejecutor de ejercicio completo ───────────────────────────

function executeExercise(
  ex: ExecutionExercise,
  blockId: string,
  blockType: BlockVariant,
): ExecutionStep[] {
  return ex.sets.flatMap((setDef, i) =>
    executeSet(setDef, ex.exerciseId, i, {
      blockId,
      blockType,
      setPattern: setDef.pattern,
      slotLabel:  ex.slot,
    }),
  )
}

// ─── Block handlers (discriminated by kind) ───────────────────

function executeNormalBlock(block: NormalBlock): ExecutionStep[] {
  // Cada ejercicio se ejecuta completo antes de pasar al siguiente
  return block.exercises.flatMap(ex => executeExercise(ex, block.id, 'normal'))
}

function executeSupersetBlock(block: SupersetBlock): ExecutionStep[] {
  const steps: ExecutionStep[] = []
  const setsCount = Math.max(...block.exercises.map(ex => ex.sets.length))

  for (let setIdx = 0; setIdx < setsCount; setIdx++) {
    // Una vuelta: ejercicio A → ejercicio B → ... sin descanso entre ellos
    block.exercises.forEach(ex => {
      const setDef = ex.sets[setIdx]
      if (!setDef) return
      const meta: StepMetadata = {
        blockId:    block.id,
        blockType:  'superset',
        setPattern: setDef.pattern,
        slotLabel:  ex.slot,
      }
      // En superset los sets normales no llevan descanso propio entre ejercicios
      const rawSteps = executeSet(setDef, ex.exerciseId, setIdx, meta)
      // Extraer pasos de ejercicio y filtrar descansos intermedios
      steps.push(...rawSteps.filter(s => s.type !== 'rest'))
    })
    // Descanso solo al terminar el grupo completo
    const lastExercise = block.exercises.at(-1)
    const lastSet = lastExercise?.sets[setIdx]
    if (lastSet && 'restSeconds' in lastSet) {
      steps.push(restStep(lastSet.restSeconds as number, 'Descanso post-superserie'))
    } else {
      steps.push(restStep(90, 'Descanso post-superserie'))
    }
  }
  return steps
}

function executeCircuitBlock(block: CircuitBlock): ExecutionStep[] {
  const steps: ExecutionStep[] = []

  for (let round = 1; round <= block.rounds; round++) {
    // Ejecutar todos los ejercicios del bloque sin descanso entre ellos
    block.exercises.forEach(ex => {
      ex.sets.forEach((setDef, setIdx) => {
        const meta: StepMetadata = {
          blockId:    block.id,
          blockType:  'circuit',
          setPattern: setDef.pattern,
          slotLabel:  ex.slot,
        }
        steps.push(
          ...executeSet(setDef, ex.exerciseId, setIdx, meta).filter(
            s => s.type !== 'rest',
          ),
        )
      })
    })
    // Descanso entre rondas (no al final de la última)
    if (round < block.rounds) {
      steps.push(roundRestStep(block.restBetweenRoundsSeconds, round, block.rounds))
    }
  }
  return steps
}

// ─── Dispatch de bloque (sin if anidados) ─────────────────────

type BlockHandler<T extends Block> = (block: T) => ExecutionStep[]

const BLOCK_HANDLERS: {
  [K in BlockVariant]: BlockHandler<Extract<Block, { kind: K }>>
} = {
  normal:    executeNormalBlock    as BlockHandler<Extract<Block, { kind: 'normal' }>>,
  superset:  executeSupersetBlock  as BlockHandler<Extract<Block, { kind: 'superset' }>>,
  circuit:   executeCircuitBlock   as BlockHandler<Extract<Block, { kind: 'circuit' }>>,
}

// ─── API pública ──────────────────────────────────────────────

/** Genera los pasos de ejecución de un bloque en orden correcto */
export function executeBlock(block: Block): ExecutionStep[] {
  const handler = BLOCK_HANDLERS[block.kind] as BlockHandler<typeof block>
  return handler(block)
}

/** Genera los pasos de todos los bloques de una sesión */
export function executeSession(blocks: Block[]): ExecutionResult {
  const steps = blocks.flatMap(executeBlock)
  return {
    steps,
    totalDuration:  estimateDuration(steps),
    totalSets:      steps.filter(s => s.type === 'exercise').length,
    totalExercises: new Set(
      steps.filter((s): s is ExerciseStep => s.type === 'exercise').map(s => s.exerciseId),
    ).size,
  }
}

function estimateDuration(steps: ExecutionStep[]): number {
  return steps.reduce((acc, step) => {
    if (step.type === 'exercise') {
      const avg = (step.reps + step.repsMin) / 2
      const tempo = parseTempoSeconds(step.tempo)
      return acc + avg * tempo
    }
    if ('duration' in step) return acc + (step.duration ?? 0)
    return acc
  }, 0)
}

function parseTempoSeconds(tempo?: string): number {
  if (!tempo) return 3  // default 3 seg por rep
  return tempo.split('-').reduce((sum, t) => sum + (parseInt(t) || 0), 0)
}

// ─── Adapter: ExerciseBlock (builder) → Block (engine) ─────────
//  Convierte el formato del builder al formato del motor
//  sin tocar workout.types ni los componentes Vue

const SET_TYPE_TO_PATTERN = {
  warmup:    'normal',
  working:   'normal',
  drop:      'dropset',
  amrap:     'normal',
  failure:   'normal',
  technique: 'normal',
} as const satisfies Record<string, SetPattern>

function adaptSetConfig(cfg: SetConfig): SetDef {
  const pattern: SetPattern = SET_TYPE_TO_PATTERN[cfg.set_type] ?? 'normal'
  const base = {
    id:          cfg.id,
    restSeconds: cfg.rest_seconds ?? 90,
    weight:      cfg.intensity_metric === 'absolute' ? cfg.intensity_value : undefined,
    rpe:         cfg.intensity_metric === 'rpe'      ? cfg.intensity_value : undefined,
    tempo:       cfg.tempo,
    repsMin:     cfg.reps_min ?? 1,
    repsMax:     cfg.reps_max ?? 10,
  }

  if (pattern === 'dropset') {
    return {
      pattern:          'dropset',
      id:               cfg.id,
      drops: [
        { reps: base.repsMax,                  weightFactor: 1.0 },
        { reps: base.repsMax,                  weightFactor: 0.8 },
        { reps: Math.ceil(base.repsMax * 0.9), weightFactor: 0.65 },
      ],
      restAfterSeconds: base.restSeconds,
    } satisfies DropSetDef
  }

  return {
    pattern:     'normal',
    id:          cfg.id,
    repsMin:     base.repsMin,
    repsMax:     base.repsMax,
    restSeconds: base.restSeconds,
    weight:      base.weight,
    rpe:         base.rpe,
    tempo:       base.tempo,
  } satisfies NormalSetDef
}

function adaptExercise(ex: BlockExercise): ExecutionExercise {
  return {
    id:         ex.id,
    exerciseId: ex.exercise_id,
    slot:       ex.slot,
    sets:       ex.sets.map(adaptSetConfig),
  }
}

const BLOCK_TYPE_TO_KIND: Record<string, BlockVariant | null> = {
  normal:     'normal',
  superset:   'superset',
  circuit:    'circuit',
  dropset:    'normal',   // dropset en block-type es equivalente a normal
  rest_pause: 'normal',
  myo_rep:    'normal',
}

export function adaptExerciseBlock(block: ExerciseBlock): Block {
  const kind: BlockVariant = BLOCK_TYPE_TO_KIND[block.block_type] ?? 'normal'
  const exercises = block.exercises.map(adaptExercise)

  if (kind === 'superset') {
    return { kind: 'superset', id: block.id, label: block.label, exercises } satisfies SupersetBlock
  }
  if (kind === 'circuit') {
    return {
      kind: 'circuit',
      id:   block.id,
      label: block.label,
      rounds: block.rounds ?? 3,
      restBetweenRoundsSeconds: block.rest_between_rounds_seconds ?? 60,
      exercises,
    } satisfies CircuitBlock
  }
  return { kind: 'normal', id: block.id, exercises } satisfies NormalBlock
}
