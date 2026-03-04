// ═══════════════════════════════════════════════════════════════
//  composables/useTemplateBuilder.ts
//  The entire workout-engine state machine — no hardcoded logic
// ═══════════════════════════════════════════════════════════════
import { ref, computed } from 'vue'
import { routineTemplateRepo } from '@/lib/supabase'

function uuid(): string {
  return crypto.randomUUID?.() ?? `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
import type {
  TemplateMeta, WeekTemplate, TrainingSession,
  ExerciseBlock, BlockExercise, SetConfig,
  BlockType, SetType, IntensityMetric,
  ProgressionConfig, Difficulty, SaveStatus,
} from '@/types/workout.types'

// ─── Default factories (no hardcoded divisions anywhere) ───────

export function makeSet(order = 0): SetConfig {
  return {
    id: uuid(),
    set_type: 'working' as SetType,
    order,
    reps_min: 8,
    reps_max: 12,
    intensity_metric: 'rpe' as IntensityMetric,
    intensity_value: 7,
    rest_seconds: 90,
  }
}

export function makeBlockExercise(exerciseId: string, order = 0): BlockExercise {
  return {
    id: uuid(),
    exercise_id: exerciseId,
    order,
    sets: [makeSet(0), makeSet(1), makeSet(2)],
    progression: { model: 'none' } as ProgressionConfig,
    coaching_note: '',
  }
}

export function makeBlock(type: BlockType = 'normal', exerciseId?: string): ExerciseBlock {
  const block: ExerciseBlock = {
    id: uuid(),
    block_type: type,
    order: 0,
    label: '',
    exercises: [],
  }
  if (exerciseId) {
    block.exercises.push(makeBlockExercise(exerciseId, 0))
  }
  return block
}

export function makeSession(order = 0): TrainingSession {
  return {
    id: uuid(),
    name: `Día ${order + 1}`,
    order,
    blocks: [],
  }
}

export function makeWeek(weekNumber = 1): WeekTemplate {
  return {
    id: uuid(),
    week_number: weekNumber,
    sessions: [makeSession(0)],
    volume_modifier: 1.0,
  }
}

// ─── Debounce utility ─────────────────────────────────────────

function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let timer: ReturnType<typeof setTimeout>
  return ((...args: unknown[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }) as T
}

// ─── Main composable ──────────────────────────────────────────

export function useTemplateBuilder(initialId?: string) {
  // ── State ──────────────────────────────────────────────────
  const templateId = ref<string | null>(initialId ?? null)
  const saveStatus = ref<SaveStatus>('saved')
  const isDirty    = ref(false)
  const isSaving   = ref(false)

  const templateMeta = ref<TemplateMeta>({
    name: '',
    category: '',
    difficulty: 'Intermedio' as Difficulty,
    description: '',
    daysPerWeek: 3,
    duration_weeks: 4,
    tags: [],
    is_public: false,
  })

  const weeks           = ref<WeekTemplate[]>([makeWeek(1)])
  const activeWeekIndex = ref(0)
  const draggedExId     = ref<string | null>(null)

  // ── Computed ───────────────────────────────────────────────

  const activeWeek = computed(() => weeks.value[activeWeekIndex.value])

  const sessions = computed<TrainingSession[]>(() => activeWeek.value?.sessions ?? [])

  const insights = computed(() => {
    // Semana activa
    const allBlocks    = sessions.value.flatMap(s => s.blocks)
    const allExercises = allBlocks.flatMap(b => b.exercises)
    const allSets      = allExercises.flatMap(e => e.sets)
    const supersetCt   = allBlocks.filter(b => b.block_type === 'superset').length
    const circuitCt    = allBlocks.filter(b => b.block_type === 'circuit').length
    const dropsetCt    = allBlocks.filter(b => b.block_type === 'dropset').length

    // Totales globales (todas las semanas)
    const allWeekSessions  = weeks.value.flatMap(w => w.sessions)
    const allWeekBlocks    = allWeekSessions.flatMap(s => s.blocks)
    const allWeekExercises = allWeekBlocks.flatMap(b => b.exercises)
    const allWeekSets      = allWeekExercises.flatMap(e => e.sets)

    return {
      // Semana activa
      sessionCount:      sessions.value.length,
      blockCount:        allBlocks.length,
      exerciseCount:     allExercises.length,
      setCount:          allSets.length,
      supersetCount:     supersetCt,
      circuitCount:      circuitCt,
      dropsetCount:      dropsetCt,
      estimatedMinutes:  Math.round(allSets.length * 2 + allExercises.length * 1.5),
      // Totales globales
      totalWeeks:        weeks.value.length,
      totalSessions:     allWeekSessions.length,
      totalExercises:    allWeekExercises.length,
      totalSets:         allWeekSets.length,
      totalMinutes:      Math.round(allWeekSets.length * 2 + allWeekExercises.length * 1.5),
    }
  })

  const isValid = computed(() =>
    templateMeta.value.name.trim().length >= 3 &&
    templateMeta.value.category !== '' &&
    sessions.value.length > 0 &&
    sessions.value.some(s => s.blocks.length > 0),
  )

  // ── Dirty tracking ─────────────────────────────────────────

  function markDirty() {
    isDirty.value = true
    saveStatus.value = 'unsaved'
    scheduleSave()
  }

  const scheduleSave = debounce(async () => {
    await _save()
  }, 1800)

  async function _save(): Promise<boolean> {
    if (isSaving.value) return false
    isSaving.value = true
    saveStatus.value = 'saving'
    const { id, error } = await routineTemplateRepo.save({
      meta: templateMeta.value,
      weeks: weeks.value,
      id: templateId.value ?? undefined,
    })
    isSaving.value = false
    if (error) { saveStatus.value = 'error'; return false }
    templateId.value = id
    isDirty.value    = false
    saveStatus.value = 'saved'
    return true
  }

  async function saveNow(): Promise<boolean> {
    return _save()
  }

  // ── Week management ────────────────────────────────────────

  function addWeek() {
    const n = weeks.value.length + 1
    weeks.value.push(makeWeek(n))
    activeWeekIndex.value = weeks.value.length - 1
    markDirty()
  }

  function removeWeek(weekId: string) {
    if (weeks.value.length <= 1) return
    const idx = weeks.value.findIndex(w => w.id === weekId)
    if (idx < 0) return
    weeks.value.splice(idx, 1)
    weeks.value.forEach((w, i) => (w.week_number = i + 1))
    activeWeekIndex.value = Math.min(activeWeekIndex.value, weeks.value.length - 1)
    markDirty()
  }

  function duplicateWeek(weekId: string) {
    const src = weeks.value.find(w => w.id === weekId)
    if (!src) return
    const copy: WeekTemplate = JSON.parse(JSON.stringify(src))
    copy.id = uuid()
    copy.week_number = weeks.value.length + 1
    copy.label = copy.label ? `${copy.label} (copia)` : `Semana ${copy.week_number}`
    copy.sessions.forEach(s => {
      s.id = uuid()
      s.blocks.forEach(b => {
        b.id = uuid()
        b.exercises.forEach(e => {
          e.id = uuid()
          e.sets.forEach(st => (st.id = uuid()))
        })
      })
    })
    weeks.value.push(copy)
    activeWeekIndex.value = weeks.value.length - 1
    markDirty()
  }

  // ── Session management ─────────────────────────────────────

  function addSession() {
    const week = activeWeek.value
    if (!week) return
    week.sessions.push(makeSession(week.sessions.length))
    markDirty()
  }

  function removeSession(sessionId: string) {
    const week = activeWeek.value
    if (!week) return
    week.sessions = week.sessions.filter(s => s.id !== sessionId)
    markDirty()
  }

  function renameSession(sessionId: string, name: string) {
    const s = _findSession(sessionId)
    if (s) { s.name = name; markDirty() }
  }

  // ── Block management ───────────────────────────────────────

  function addBlock(sessionId: string, exerciseId: string, type: BlockType = 'normal') {
    const session = _findSession(sessionId)
    if (!session) return
    const block = makeBlock(type, exerciseId)
    block.order = session.blocks.length
    session.blocks.push(block)
    markDirty()
  }

  function removeBlock(sessionId: string, blockId: string) {
    const session = _findSession(sessionId)
    if (!session) return
    session.blocks = session.blocks.filter(b => b.id !== blockId)
    _reorderBlocks(session)
    markDirty()
  }

  function moveBlock(sessionId: string, blockId: string, direction: 'up' | 'down') {
    const session = _findSession(sessionId)
    if (!session) return
    const idx = session.blocks.findIndex(b => b.id === blockId)
    if (idx < 0) return
    const to = direction === 'up' ? idx - 1 : idx + 1
    if (to < 0 || to >= session.blocks.length) return
    const [item] = session.blocks.splice(idx, 1)
    session.blocks.splice(to, 0, item)
    _reorderBlocks(session)
    markDirty()
  }

  function updateBlock(sessionId: string, blockId: string, field: string, value: unknown) {
    const block = _findBlock(sessionId, blockId)
    if (!block) return
    ;(block as Record<string, unknown>)[field] = value
    markDirty()
  }

  function toggleGroup(sessionId: string, blockId: string, type: BlockType) {
    const block = _findBlock(sessionId, blockId)
    if (!block) return
    block.block_type = type
    if (type === 'superset' || type === 'circuit') {
      block.exercises.forEach((e, i) => (e.slot = String.fromCharCode(65 + i)))
    } else {
      block.exercises.forEach(e => (e.slot = undefined))
    }
    markDirty()
  }

  // ── Exercise management ────────────────────────────────────

  function addExerciseToBlock(sessionId: string, blockId: string, exerciseId: string) {
    const block = _findBlock(sessionId, blockId)
    if (!block) return
    const ex = makeBlockExercise(exerciseId, block.exercises.length)
    if (block.block_type === 'superset' || block.block_type === 'circuit') {
      ex.slot = String.fromCharCode(65 + block.exercises.length)
    }
    block.exercises.push(ex)
    markDirty()
  }

  function removeExerciseFromBlock(sessionId: string, blockId: string, exerciseId: string) {
    const block = _findBlock(sessionId, blockId)
    if (!block) return
    block.exercises = block.exercises.filter(e => e.id !== exerciseId)
    if (block.exercises.length === 0) removeBlock(sessionId, blockId)
    else markDirty()
  }

  // ── Set management ─────────────────────────────────────────

  function addSet(sessionId: string, blockId: string, exerciseId: string) {
    const ex = _findExercise(sessionId, blockId, exerciseId)
    if (!ex) return
    ex.sets.push(makeSet(ex.sets.length))
    markDirty()
  }

  function removeSet(sessionId: string, blockId: string, exerciseId: string, setId: string) {
    const ex = _findExercise(sessionId, blockId, exerciseId)
    if (!ex || ex.sets.length <= 1) return
    ex.sets = ex.sets.filter(s => s.id !== setId)
    ex.sets.forEach((s, i) => (s.order = i))
    markDirty()
  }

  function updateSet(
    sessionId: string,
    blockId: string,
    exerciseId: string,
    setId: string,
    patch: Partial<SetConfig>,
  ) {
    const ex = _findExercise(sessionId, blockId, exerciseId)
    if (!ex) return
    const set = ex.sets.find(s => s.id === setId)
    if (!set) return
    Object.assign(set, patch)
    markDirty()
  }

  function duplicateLastSet(sessionId: string, blockId: string, exerciseId: string) {
    const ex = _findExercise(sessionId, blockId, exerciseId)
    if (!ex || !ex.sets.length) return
    const last = ex.sets[ex.sets.length - 1]
    ex.sets.push({ ...last, id: uuid(), order: ex.sets.length })
    markDirty()
  }

  // ── Drag & drop ────────────────────────────────────────────

  function onLibDragStart(exerciseId: string | number) {
    draggedExId.value = String(exerciseId)
  }

  function onDropToSession(sessionId: string) {
    if (!draggedExId.value) return
    addBlock(sessionId, draggedExId.value)
    draggedExId.value = null
  }

  function onDropToBlock(sessionId: string, blockId: string) {
    if (!draggedExId.value) return
    addExerciseToBlock(sessionId, blockId, draggedExId.value)
    draggedExId.value = null
  }

  // ── Publish ────────────────────────────────────────────────

  async function publishTemplate(): Promise<boolean> {
    if (!isValid.value) return false
    const saved = await saveNow()
    if (!saved || !templateId.value) return false
    const { error } = await routineTemplateRepo.publish(templateId.value)
    if (error) return false
    templateMeta.value.is_public = true
    return true
  }

  // ── Load ───────────────────────────────────────────────────

  async function loadTemplate(id: string): Promise<boolean> {
    const { data, error } = await routineTemplateRepo.fetchById(id)
    if (error || !data) return false
    templateMeta.value = {
      name:           data.name,
      category:       data.category,
      difficulty:     data.difficulty,
      description:    data.description ?? '',
      daysPerWeek:    data.days_per_week,
      duration_weeks: data.duration_weeks,
      tags:           data.tags,
      is_public:      data.is_public,
    }
    weeks.value         = data.weeks.length ? data.weeks : [makeWeek(1)]
    templateId.value    = data.id
    saveStatus.value    = 'saved'
    isDirty.value       = false
    return true
  }

  // ── Reset ──────────────────────────────────────────────────

  function resetBuilder() {
    templateMeta.value  = {
      name: '', category: '', difficulty: 'Intermedio',
      description: '', daysPerWeek: 3, duration_weeks: 4,
      tags: [], is_public: false,
    }
    weeks.value         = [makeWeek(1)]
    templateId.value    = null
    activeWeekIndex.value = 0
    saveStatus.value    = 'saved'
    isDirty.value       = false
  }

  // ── Private helpers ────────────────────────────────────────

  function _findSession(id: string) {
    for (const week of weeks.value)
      for (const s of week.sessions)
        if (s.id === id) return s
  }

  function _findBlock(sessionId: string, blockId: string) {
    return _findSession(sessionId)?.blocks.find(b => b.id === blockId)
  }

  function _findExercise(sessionId: string, blockId: string, exerciseId: string) {
    return _findBlock(sessionId, blockId)?.exercises.find(e => e.id === exerciseId)
  }

  function _reorderBlocks(session: TrainingSession) {
    session.blocks.forEach((b, i) => (b.order = i))
  }

  // ── Public API ─────────────────────────────────────────────

  return {
    // State
    templateMeta, weeks, activeWeekIndex, activeWeek,
    sessions, insights, isValid, saveStatus, isDirty,
    templateId, draggedExId,

    // Week
    addWeek, removeWeek, duplicateWeek,

    // Session
    addSession, removeSession, renameSession,

    // Block
    addBlock, removeBlock, moveBlock, updateBlock, toggleGroup,

    // Exercise
    addExerciseToBlock, removeExerciseFromBlock,

    // Set
    addSet, removeSet, updateSet, duplicateLastSet,

    // Drag
    onLibDragStart, onDropToSession, onDropToBlock,

    // Persist
    saveNow, publishTemplate, loadTemplate, resetBuilder,
  }
}
