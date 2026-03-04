// ═══════════════════════════════════════════════════════════════
//  composables/useExecutionEngine.ts
//  Vue composable reactivo para sesiones de entrenamiento en vivo
//  Envuelve executionEngine.ts con estado observable
// ═══════════════════════════════════════════════════════════════

import { ref, computed } from 'vue'
import {
  executeBlock,
  executeSession,
  adaptExerciseBlock,
} from '@/lib/executionEngine'
import type {
  Block,
  ExecutionStep,
  ExerciseStep,
  ExecutionResult,
} from '@/types/execution.types'
import type { ExerciseBlock, TrainingSession } from '@/types/workout.types'

export type SessionState = 'idle' | 'running' | 'paused' | 'finished'

export function useExecutionEngine() {
  // ── Estado ────────────────────────────────────────────────
  const state          = ref<SessionState>('idle')
  const steps          = ref<ExecutionStep[]>([])
  const currentIndex   = ref(0)
  const sessionResult  = ref<ExecutionResult | null>(null)

  // ── Computed ──────────────────────────────────────────────

  const currentStep = computed<ExecutionStep | null>(
    () => steps.value[currentIndex.value] ?? null,
  )

  const nextStep = computed<ExecutionStep | null>(
    () => steps.value[currentIndex.value + 1] ?? null,
  )

  const progress = computed(() => {
    if (!steps.value.length) return 0
    return Math.round((currentIndex.value / steps.value.length) * 100)
  })

  const isRunning  = computed(() => state.value === 'running')
  const isPaused   = computed(() => state.value === 'paused')
  const isFinished = computed(() => state.value === 'finished')

  const exerciseSteps = computed(() =>
    steps.value.filter((s): s is ExerciseStep => s.type === 'exercise'),
  )

  const completedExerciseSteps = computed(() =>
    exerciseSteps.value.slice(0, currentIndex.value),
  )

  // ── Iniciar sesión desde una TrainingSession del builder ──

  function startSession(session: TrainingSession): void {
    const blocks: Block[] = session.blocks.map(adaptExerciseBlock)
    const result = executeSession(blocks)
    sessionResult.value = result
    steps.value          = result.steps
    currentIndex.value   = 0
    state.value          = 'running'
  }

  // ── Iniciar desde un ExerciseBlock individual ─────────────

  function startBlock(block: ExerciseBlock): void {
    const adapted = adaptExerciseBlock(block)
    const generated = executeBlock(adapted)
    steps.value        = generated
    currentIndex.value = 0
    state.value        = 'running'
    sessionResult.value = null
  }

  // ── Iniciar desde bloques ya adaptados (uso avanzado) ─────

  function startAdapted(blocks: Block[]): void {
    const result = executeSession(blocks)
    sessionResult.value  = result
    steps.value          = result.steps
    currentIndex.value   = 0
    state.value          = 'running'
  }

  // ── Navegación ────────────────────────────────────────────

  function advance(): void {
    if (state.value !== 'running') return
    if (currentIndex.value < steps.value.length - 1) {
      currentIndex.value++
    } else {
      state.value = 'finished'
    }
  }

  function goBack(): void {
    if (currentIndex.value > 0) currentIndex.value--
  }

  function goToStep(index: number): void {
    if (index >= 0 && index < steps.value.length) {
      currentIndex.value = index
    }
  }

  function pause(): void {
    if (state.value === 'running') state.value = 'paused'
  }

  function resume(): void {
    if (state.value === 'paused') state.value = 'running'
  }

  function reset(): void {
    state.value         = 'idle'
    steps.value         = []
    currentIndex.value  = 0
    sessionResult.value = null
  }

  // ── Inspección estática (sin iniciar sesión) ──────────────

  /** Previsualiza los pasos de un bloque sin cambiar el estado de la sesión */
  function previewBlock(block: ExerciseBlock): ExecutionStep[] {
    return executeBlock(adaptExerciseBlock(block))
  }

  /** Previsualiza la sesión completa sin cambiar el estado */
  function previewSession(session: TrainingSession): ExecutionResult {
    return executeSession(session.blocks.map(adaptExerciseBlock))
  }

  // ── API pública ───────────────────────────────────────────

  return {
    // Estado reactivo
    state, steps, currentIndex, sessionResult,
    // Computed
    currentStep, nextStep, progress,
    isRunning, isPaused, isFinished,
    exerciseSteps, completedExerciseSteps,
    // Acciones
    startSession, startBlock, startAdapted,
    advance, goBack, goToStep,
    pause, resume, reset,
    // Utilidades
    previewBlock, previewSession,
  }
}

// ─── Ejemplos de uso (documentación ejecutable) ───────────────
//
// 1. SUPERSET — Press banca + Remo
// ─────────────────────────────────
// import { adaptExerciseBlock, executeBlock } from '@/lib/executionEngine'
//
// const supersetBlock: ExerciseBlock = {
//   id: 'b1', block_type: 'superset', order: 0,
//   exercises: [
//     { id: 'e1', exercise_id: 'press-banca', order: 0, slot: 'A', progression: { model: 'none' },
//       sets: [
//         { id: 's1', set_type: 'working', order: 0, reps_min: 8, reps_max: 10,
//           intensity_metric: 'rpe', intensity_value: 8, rest_seconds: 90 }
//       ]},
//     { id: 'e2', exercise_id: 'remo-barra', order: 1, slot: 'B', progression: { model: 'none' },
//       sets: [
//         { id: 's2', set_type: 'working', order: 0, reps_min: 8, reps_max: 10,
//           intensity_metric: 'rpe', intensity_value: 8, rest_seconds: 90 }
//       ]}
//   ]
// }
// const steps = executeBlock(adaptExerciseBlock(supersetBlock))
// // → [exercise(press, A), exercise(remo, B), rest(90s)]
//
//
// 2. DROPSET — Curl de bíceps
// ────────────────────────────
// const dropBlock: ExerciseBlock = {
//   id: 'b2', block_type: 'dropset', order: 0,
//   exercises: [{
//     id: 'e3', exercise_id: 'curl-biceps', order: 0, progression: { model: 'none' },
//     sets: [
//       { id: 's3', set_type: 'drop', order: 0, reps_min: 8, reps_max: 10,
//         intensity_metric: 'absolute', intensity_value: 20, rest_seconds: 120 }
//     ]
//   }]
// }
// // → [exercise(drop1, 1.0), exercise(drop2, 0.8), exercise(drop3, 0.65), rest(120s)]
//
//
// 3. CIRCUITO — 3 rondas de 3 ejercicios
// ────────────────────────────────────────
// const circuitBlock: ExerciseBlock = {
//   id: 'b3', block_type: 'circuit', order: 0, rounds: 3,
//   rest_between_rounds_seconds: 60,
//   exercises: [
//     { id: 'e4', exercise_id: 'sentadilla', order: 0, progression: { model: 'none' },
//       sets: [{ id: 's4', set_type: 'working', order: 0, reps_min: 12, reps_max: 15,
//               intensity_metric: 'bodyweight', rest_seconds: 0 }] },
//     { id: 'e5', exercise_id: 'fondos', order: 1, progression: { model: 'none' },
//       sets: [{ id: 's5', set_type: 'working', order: 0, reps_min: 10, reps_max: 12,
//               intensity_metric: 'bodyweight', rest_seconds: 0 }] },
//     { id: 'e6', exercise_id: 'plancha', order: 2, progression: { model: 'none' },
//       sets: [{ id: 's6', set_type: 'working', order: 0, duration_seconds: 30,
//               intensity_metric: 'bodyweight', rest_seconds: 0 }] },
//   ]
// }
// // Ronda 1: exercise(sentadilla), exercise(fondos), exercise(plancha), round-rest(60s, 1/3)
// // Ronda 2: exercise(sentadilla), exercise(fondos), exercise(plancha), round-rest(60s, 2/3)
// // Ronda 3: exercise(sentadilla), exercise(fondos), exercise(plancha)   ← sin descanso final
