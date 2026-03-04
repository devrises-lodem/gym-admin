<template>
  <aside class="w-56 shrink-0 bg-background-dark border-l border-border-default overflow-y-auto custom-scrollbar p-4 space-y-5">

    <!-- Semana activa -->
    <div>
      <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-3">Semana activa</p>
      <div class="space-y-2">
        <div v-for="row in weekRows" :key="row.label"
          class="flex items-center gap-2 text-xs">
          <span class="material-symbols-outlined text-[14px] text-text-muted">{{ row.icon }}</span>
          <span class="flex-1 text-text-muted">{{ row.label }}</span>
          <span class="font-bold text-text-secondary tabular-nums">{{ row.value }}</span>
        </div>
      </div>
    </div>

    <!-- Totales de la plantilla -->
    <div>
      <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-3">Plantilla completa</p>
      <div class="space-y-2">
        <div v-for="row in globalRows" :key="row.label"
          class="flex items-center gap-2 text-xs">
          <span class="material-symbols-outlined text-[14px] text-text-muted">{{ row.icon }}</span>
          <span class="flex-1 text-text-muted">{{ row.label }}</span>
          <span class="font-bold text-primary tabular-nums">{{ row.value }}</span>
        </div>
      </div>
    </div>

    <!-- Methods breakdown -->
    <div v-if="insights.blockCount > 0">
      <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-3">Métodos</p>
      <div class="space-y-1.5">
        <div v-if="insights.supersetCount" class="flex items-center gap-2 text-xs">
          <span class="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
          <span class="flex-1 text-text-muted">Superseries</span>
          <span class="font-bold text-text-secondary">{{ insights.supersetCount }}</span>
        </div>
        <div v-if="insights.circuitCount" class="flex items-center gap-2 text-xs">
          <span class="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
          <span class="flex-1 text-text-muted">Circuitos</span>
          <span class="font-bold text-text-secondary">{{ insights.circuitCount }}</span>
        </div>
        <div v-if="insights.dropsetCount" class="flex items-center gap-2 text-xs">
          <span class="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
          <span class="flex-1 text-text-muted">Dropsets</span>
          <span class="font-bold text-text-secondary">{{ insights.dropsetCount }}</span>
        </div>
        <p v-if="!insights.supersetCount && !insights.circuitCount && !insights.dropsetCount"
          class="text-[11px] text-text-muted italic">Solo bloques normales</p>
      </div>
    </div>

    <!-- Volume gauge (semana activa) -->
    <div v-if="insights.setCount > 0">
      <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">Volumen / sesión</p>
      <div class="h-1.5 rounded-full bg-background-muted overflow-hidden mb-1.5">
        <div
          class="h-full rounded-full transition-all duration-500"
          :class="volumeBarColor"
          :style="{ width: `${volumePct}%` }"
        />
      </div>
      <p class="text-[10px] text-text-muted text-center">{{ volumeLabel }}</p>
    </div>

    <!-- Validity checklist -->
    <div>
      <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-3">Checklist</p>
      <div class="space-y-1.5">
        <div v-for="item in checklist" :key="item.label"
          class="flex items-center gap-2 text-xs"
          :class="item.ok ? 'text-primary' : 'text-text-muted'">
          <span class="material-symbols-outlined text-[13px]">{{ item.ok ? 'check_circle' : 'radio_button_unchecked' }}</span>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>

  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface InsightData {
  // Semana activa
  sessionCount: number
  blockCount: number
  exerciseCount: number
  setCount: number
  supersetCount: number
  circuitCount: number
  dropsetCount: number
  estimatedMinutes: number
  // Totales globales
  totalWeeks: number
  totalSessions: number
  totalExercises: number
  totalSets: number
  totalMinutes: number
}

const props = defineProps<{ insights: InsightData }>()

const weekRows = computed(() => [
  { icon: 'calendar_view_week', label: 'Sesiones',   value: props.insights.sessionCount  },
  { icon: 'view_module',        label: 'Bloques',    value: props.insights.blockCount    },
  { icon: 'fitness_center',     label: 'Ejercicios', value: props.insights.exerciseCount },
  { icon: 'repeat',             label: 'Series',     value: props.insights.setCount      },
  { icon: 'schedule',           label: '~Tiempo',    value: `${props.insights.estimatedMinutes} min` },
])

const globalRows = computed(() => [
  { icon: 'date_range',     label: 'Semanas',    value: props.insights.totalWeeks    },
  { icon: 'event_note',     label: 'Sesiones',   value: props.insights.totalSessions },
  { icon: 'fitness_center', label: 'Ejercicios', value: props.insights.totalExercises },
  { icon: 'repeat',         label: 'Series',     value: props.insights.totalSets     },
  { icon: 'schedule',       label: '~Tiempo',    value: `${props.insights.totalMinutes} min` },
])

const volumePct = computed(() => {
  if (!props.insights.sessionCount) return 0
  const perSession = props.insights.setCount / props.insights.sessionCount
  return Math.min(100, Math.round((perSession / 30) * 100))
})

const volumeBarColor = computed(() => {
  const p = volumePct.value
  if (p < 25) return 'bg-blue-400'
  if (p < 60) return 'bg-primary'
  if (p < 85) return 'bg-amber-400'
  return 'bg-red-400'
})

const volumeLabel = computed(() => {
  const p = volumePct.value
  if (p < 25) return 'Volumen bajo'
  if (p < 60) return 'Volumen óptimo'
  if (p < 85) return 'Volumen alto'
  return 'Posible sobrecarga'
})

const checklist = computed(() => [
  { ok: props.insights.totalWeeks > 0,         label: 'Mínimo 1 semana'    },
  { ok: props.insights.sessionCount > 0,        label: 'Mínimo 1 sesión'    },
  { ok: props.insights.exerciseCount > 0,       label: 'Mínimo 1 ejercicio' },
  { ok: props.insights.setCount >= 3,           label: 'Mínimo 3 series'    },
])
</script>
