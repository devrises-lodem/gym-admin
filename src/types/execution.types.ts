// ═══════════════════════════════════════════════════════════════
//  EXECUTION ENGINE — Discriminated Union Types
//  Separados de workout.types para no acoplar builder ↔ runner
// ═══════════════════════════════════════════════════════════════

// ─── ExecutionStep ────────────────────────────────────────────
//  Unidad mínima que el runner ejecuta en secuencia

export type ExecutionStepType = 'exercise' | 'rest' | 'mini-rest' | 'round-rest'

export type ExecutionStep =
  | ExerciseStep
  | RestStep
  | MiniRestStep
  | RoundRestStep

export interface ExerciseStep {
  type:        'exercise'
  stepId:      string        // uuid único para tracking
  exerciseId:  string
  setIndex:    number        // posición dentro del ejercicio
  reps:        number        // objetivo (reps_max o calculado)
  repsMin:     number
  weight?:     number        // kg absolutos si aplica
  rpe?:        number
  duration?:   number        // segundos, para sets cronometrados
  tempo?:      string        // "3-1-2-0"
  label?:      string        // "Drop 1", "MiniSet 2", etc.
  isLastInSet: boolean       // última sub-unidad del set
  metadata:    StepMetadata
}

export interface RestStep {
  type:     'rest'
  stepId:   string
  duration: number           // segundos
  label?:   string           // "Descanso entre sets", etc.
}

export interface MiniRestStep {
  type:     'mini-rest'
  stepId:   string
  duration: number           // segundos cortos (rest-pause / myo-rep)
}

export interface RoundRestStep {
  type:     'round-rest'
  stepId:   string
  duration: number           // descanso entre rondas de circuito
  round:    number
  totalRounds: number
}

export interface StepMetadata {
  blockId:     string
  blockType:   BlockVariant
  setPattern:  SetPattern
  slotLabel?:  string        // "A", "B", "C" para supersets
}

// ─── Block discriminated union ─────────────────────────────────

export type BlockVariant = 'normal' | 'superset' | 'circuit'

export interface NormalBlock {
  kind:        'normal'
  id:          string
  exercises:   ExecutionExercise[]
}

export interface SupersetBlock {
  kind:        'superset'
  id:          string
  label?:      string
  exercises:   ExecutionExercise[]   // ejecutar uno tras otro sin descanso
}

export interface CircuitBlock {
  kind:        'circuit'
  id:          string
  label?:      string
  rounds:      number                // veces que se repite el bloque
  restBetweenRoundsSeconds: number
  exercises:   ExecutionExercise[]
}

export type Block = NormalBlock | SupersetBlock | CircuitBlock

// ─── Set discriminated union ───────────────────────────────────

export type SetPattern = 'normal' | 'dropset' | 'rest_pause' | 'myo_rep'

export interface NormalSetDef {
  pattern:        'normal'
  id:             string
  repsMin:        number
  repsMax:        number
  restSeconds:    number
  weight?:        number
  rpe?:           number
  tempo?:         string
}

export interface DropSetDef {
  pattern:        'dropset'
  id:             string
  drops: Array<{
    reps:         number
    weightFactor: number    // 1.0 = peso inicial, 0.8 = -20%, etc.
    rpe?:         number
  }>
  restAfterSeconds: number  // descanso TRAS completar todos los drops
}

export interface RestPauseSetDef {
  pattern:           'rest_pause'
  id:                string
  totalReps:         number   // objetivo total de reps
  miniRestSeconds:   number   // descanso entre mini-sets (10-15s típico)
  weight?:           number
  rpe?:              number
  maxMiniSets:       number   // límite de iteraciones (3-5)
  restAfterSeconds:  number
}

export interface MyoRepSetDef {
  pattern:              'myo_rep'
  id:                   string
  activationReps:       number   // set de activación (15-20 reps)
  miniSetReps:          number   // reps por mini-set (3-5)
  miniRestSeconds:      number   // descanso entre mini-sets (5-10s)
  minRepsToStop:        number   // si no alcanza esto, cortar
  maxMiniSets:          number
  weight?:              number
  restAfterSeconds:     number
}

export type SetDef = NormalSetDef | DropSetDef | RestPauseSetDef | MyoRepSetDef

// ─── Exercise para el motor ────────────────────────────────────

export interface ExecutionExercise {
  id:          string
  exerciseId:  string
  slot?:       string       // "A", "B", "C"
  sets:        SetDef[]
}

// ─── Resultado de sesión (tracking) ───────────────────────────

export interface ExecutionResult {
  steps:           ExecutionStep[]
  totalDuration:   number   // segundos estimados
  totalSets:       number
  totalExercises:  number
}
