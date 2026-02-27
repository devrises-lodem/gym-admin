import { ref, computed } from 'vue'
import { EXERCISES } from '@/data/exercises'

export interface TemplateBlock {
  id: string
  exId: number
  sets: number
  reps: string
  rpe: number
  rest: number
  group: 'superset' | 'circuit' | null
}

export interface TemplateSession {
  id: string
  name: string
  color: string
  blocks: TemplateBlock[]
}

export interface TemplateMeta {
  name: string
  category: string
  difficulty: string
  description: string
  daysPerWeek: number
}

export interface InsightsData {
  totalSets: number
  totalExercises: number
  totalSessions: number
  durationMin: number
  avgRPE: number | null
  intensity: number
  muscleList: { name: string; sets: number }[]
}

let _blockId = 1000
let _sessionId = 100

const SESSION_COLORS = ['#3742fa', '#f59e0b', '#9b59b6', '#22c55e', '#ef4444']

export function useTemplateBuilder() {
  const templateMeta = ref<TemplateMeta>({
    name: '',
    category: '',
    difficulty: 'Intermedio',
    description: '',
    daysPerWeek: 3,
  })

  const sessions = ref<TemplateSession[]>([])
  const draggingExId = ref<number | null>(null)

  // ─── Sessions ──────────────────────────────────────────
  function addSession() {
    sessions.value.push({
      id: 's' + _sessionId++,
      name: `Sesión ${sessions.value.length + 1}`,
      color: SESSION_COLORS[sessions.value.length % SESSION_COLORS.length],
      blocks: [],
    })
  }

  function removeSession(sid: string) {
    sessions.value = sessions.value.filter((s) => s.id !== sid)
  }

  function renameSession(sid: string, name: string) {
    const s = sessions.value.find((s) => s.id === sid)
    if (s) s.name = name
  }

  // ─── Blocks ────────────────────────────────────────────
  function addBlock(sid: string, exId: number) {
    const s = sessions.value.find((s) => s.id === sid)
    if (!s) return
    s.blocks.push({
      id: 'b' + _blockId++,
      exId,
      sets: 3,
      reps: '8–12',
      rpe: 7,
      rest: 90,
      group: null,
    })
  }

  function removeBlock(sid: string, bid: string) {
    const s = sessions.value.find((s) => s.id === sid)
    if (!s) return
    s.blocks = s.blocks.filter((b) => b.id !== bid)
  }

  function updateBlock(sid: string, bid: string, field: keyof TemplateBlock, value: string) {
    const s = sessions.value.find((s) => s.id === sid)
    const b = s?.blocks.find((b) => b.id === bid)
    if (!b) return
    if (field === 'sets' || field === 'rest') {
      ;(b as Record<string, unknown>)[field] = parseInt(value) || 0
    } else if (field === 'rpe') {
      ;(b as Record<string, unknown>)[field] = parseFloat(value) || 0
    } else {
      ;(b as Record<string, unknown>)[field] = value
    }
  }

  function toggleGroup(sid: string, bid: string, type: 'superset' | 'circuit') {
    const s = sessions.value.find((s) => s.id === sid)
    const b = s?.blocks.find((b) => b.id === bid)
    if (b) b.group = b.group === type ? null : type
  }

  function moveBlock(sid: string, bid: string, dir: number) {
    const s = sessions.value.find((s) => s.id === sid)
    if (!s) return
    const idx = s.blocks.findIndex((b) => b.id === bid)
    const target = idx + dir
    if (target < 0 || target >= s.blocks.length) return
    ;[s.blocks[idx], s.blocks[target]] = [s.blocks[target], s.blocks[idx]]
  }

  // ─── Drag ──────────────────────────────────────────────
  function onLibDragStart(exId: number) {
    draggingExId.value = exId
  }

  function onDropToSession(sid: string) {
    if (draggingExId.value !== null) {
      addBlock(sid, draggingExId.value)
      draggingExId.value = null
    }
  }

  // ─── Insights ──────────────────────────────────────────
  const insights = computed<InsightsData>(() => {
    let totalSets = 0
    let totalExercises = 0
    let rpeSum = 0
    let rpeCount = 0
    let totalTimeSec = 0
    const muscleVol: Record<string, number> = {}

    sessions.value.forEach((s) => {
      s.blocks.forEach((b) => {
        const ex = EXERCISES.find((e) => e.id === b.exId)
        if (!ex) return
        totalExercises++
        totalSets += b.sets || 0
        totalTimeSec += (b.sets || 0) * ((b.rest || 60) + 45)
        if (b.rpe) {
          rpeSum += b.rpe * (b.sets || 1)
          rpeCount += b.sets || 1
        }
        muscleVol[ex.group] = (muscleVol[ex.group] || 0) + (b.sets || 0)
      })
    })

    const avgRPE = rpeCount ? Math.round((rpeSum / rpeCount) * 10) / 10 : null
    const muscleList = Object.entries(muscleVol)
      .map(([name, sets]) => ({ name, sets }))
      .sort((a, b) => b.sets - a.sets)

    return {
      totalSets,
      totalExercises,
      totalSessions: sessions.value.length,
      durationMin: Math.max(Math.round(totalTimeSec / 60), 0),
      avgRPE,
      intensity: avgRPE ? Math.round((avgRPE / 10) * 100) : 0,
      muscleList,
    }
  })

  // ─── Validation ────────────────────────────────────────
  const isValid = computed(
    () =>
      templateMeta.value.name.trim().length > 2 &&
      templateMeta.value.category !== '' &&
      sessions.value.length > 0 &&
      sessions.value.every((s) => s.blocks.length > 0),
  )

  return {
    templateMeta,
    sessions,
    draggingExId,
    addSession,
    removeSession,
    renameSession,
    addBlock,
    removeBlock,
    updateBlock,
    toggleGroup,
    moveBlock,
    onLibDragStart,
    onDropToSession,
    insights,
    isValid,
  }
}
