// ═══════════════════════════════════════════════════════════════
//  WORKOUT ENGINE — Core TypeScript Interfaces
//  Fully decoupled: Template → AssignedRoutine → WorkoutLog
// ═══════════════════════════════════════════════════════════════

export type Difficulty = 'Principiante' | 'Intermedio' | 'Avanzado'

/** All block container types — fully extensible without code changes */
export type BlockType =
  | 'normal'
  | 'superset'
  | 'circuit'
  | 'dropset'
  | 'rest_pause'
  | 'myo_rep'

/** Semantic tag for each set row */
export type SetType =
  | 'warmup'
  | 'working'
  | 'drop'        // dropset continuation
  | 'amrap'
  | 'failure'
  | 'technique'   // technique / backoff

/** How intensity is expressed per set */
export type IntensityMetric =
  | 'rpe'          // 1–10 RPE
  | 'percent_1rm'  // % of 1RM
  | 'rir'          // Reps In Reserve
  | 'absolute'     // fixed kg / lb
  | 'bodyweight'   // BW multiplier

export type ProgressionModel =
  | 'none'
  | 'linear'
  | 'double_progression'
  | 'wave_loading'
  | 'undulating'
  | 'rpe_autoregulation'

// ─── Set ─────────────────────────────────────────────────────

export interface SetConfig {
  id: string
  set_type: SetType
  order: number
  reps_min?: number
  reps_max?: number
  duration_seconds?: number   // timed sets
  intensity_metric: IntensityMetric
  intensity_value?: number    // RPE 7.5 | %1RM 75 | kg 100
  tempo?: string              // "3-1-2-0"
  rest_seconds?: number
  note?: string
}

// ─── Progression ─────────────────────────────────────────────

export interface ProgressionConfig {
  model: ProgressionModel
  increment_kg?: number
  increment_sessions?: number
  reps_target_before_advance?: number
  wave_length?: number
  rpe_target?: number
  rpe_tolerance?: number
  sets_increment_per_week?: number
}

// ─── Exercise inside a Block ──────────────────────────────────

export interface BlockExercise {
  id: string
  exercise_id: string
  order: number
  display_name?: string
  sets: SetConfig[]
  progression: ProgressionConfig
  coaching_note?: string
  slot?: string               // "A", "B", "C" for superset slots
}

// ─── Block ────────────────────────────────────────────────────

export interface ExerciseBlock {
  id: string
  block_type: BlockType
  order: number
  label?: string
  exercises: BlockExercise[]
  rounds?: number
  rest_between_rounds_seconds?: number
  note?: string
}

// ─── Training Session / Day ───────────────────────────────────

export interface TrainingSession {
  id: string
  name: string
  order: number
  blocks: ExerciseBlock[]
  estimated_duration_minutes?: number
  session_note?: string
}

// ─── Week ─────────────────────────────────────────────────────

export interface WeekTemplate {
  id: string
  week_number: number
  label?: string
  sessions: TrainingSession[]
  volume_modifier?: number    // 1.0 = baseline, 0.8 = deload
  intensity_modifier?: number
  note?: string
}

// ─── Routine Template (master record) ────────────────────────

export interface RoutineTemplate {
  id: string
  name: string
  description?: string
  category: string
  difficulty: Difficulty
  days_per_week: number
  duration_weeks: number
  weeks: WeekTemplate[]
  default_progression: ProgressionConfig
  tags: string[]
  is_public: boolean
  version: number
  created_by: string
  created_at: string
  updated_at: string
}

// ─── Assigned Routine (user snapshot, mutable) ───────────────

export interface AssignedRoutine {
  id: string
  user_id: string
  template_id?: string
  template_version?: number
  name: string
  started_at: string
  expected_end_at?: string
  status: 'active' | 'completed' | 'paused' | 'archived'
  current_week: number
  current_session_index: number
}

// ─── Workout Log (tracking) ───────────────────────────────────

export interface SetLog {
  id: string
  set_config_id: string
  order: number
  reps_performed?: number
  weight_kg?: number
  duration_seconds?: number
  rpe_actual?: number
  completed: boolean
  skipped: boolean
  note?: string
  logged_at: string
}

export interface ExerciseLog {
  id: string
  block_exercise_id: string
  exercise_id: string
  sets: SetLog[]
  note?: string
}

export interface WorkoutLog {
  id: string
  user_id: string
  assigned_routine_id?: string
  session_id: string
  week_number: number
  started_at: string
  ended_at?: string
  duration_minutes?: number
  blocks: { id: string; block_id: string; exercises: ExerciseLog[] }[]
  mood?: 1 | 2 | 3 | 4 | 5
  energy?: 1 | 2 | 3 | 4 | 5
  overall_note?: string
}

// ─── Exercise Catalog ─────────────────────────────────────────

export interface Exercise {
  id: string
  name: string
  name_es?: string
  muscles_primary: string[]
  muscles_secondary: string[]
  equipment: string[]
  movement_pattern?: string
  is_bilateral: boolean
  video_url?: string
  image_url?: string
  tags: string[]
}

// ─── Builder UI ───────────────────────────────────────────────

export interface TemplateMeta {
  name: string
  category: string
  difficulty: Difficulty
  description: string
  daysPerWeek: number
  duration_weeks: number
  tags: string[]
  is_public: boolean
}

export type SaveStatus = 'saved' | 'saving' | 'unsaved' | 'error'
