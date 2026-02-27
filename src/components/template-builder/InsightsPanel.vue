<template>
  <aside class="w-72 border-l border-border-default bg-background-dark flex flex-col overflow-hidden shrink-0">

    <!-- Header -->
    <div class="px-5 py-4 border-b border-border-default flex items-center justify-between">
      <h3 class="font-bold text-sm text-text-primary">Análisis</h3>
      <div class="flex items-center gap-1.5 text-[10px] font-bold text-primary">
        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        LIVE
      </div>
    </div>

    <div class="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-5">

      <!-- Summary stats -->
      <div>
        <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2.5">Resumen</p>
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-primary-light rounded-xl p-3 border border-primary-border">
            <p class="text-xl font-black text-primary font-mono leading-none">{{ insights.totalSets }}</p>
            <p class="text-[10.5px] text-text-secondary mt-1">Series totales</p>
          </div>
          <div class="bg-background-muted rounded-xl p-3 border border-border-soft">
            <p class="text-xl font-black text-text-primary font-mono leading-none">{{ insights.totalExercises }}</p>
            <p class="text-[10.5px] text-text-secondary mt-1">Ejercicios</p>
          </div>
          <div class="bg-background-muted rounded-xl p-3 border border-border-soft">
            <p class="text-xl font-black text-text-primary font-mono leading-none">{{ insights.totalSessions }}</p>
            <p class="text-[10.5px] text-text-secondary mt-1">Sesiones</p>
          </div>
          <div class="bg-background-muted rounded-xl p-3 border border-border-soft">
            <p class="text-xl font-black text-text-primary font-mono leading-none">{{ insights.durationMin }}'</p>
            <p class="text-[10.5px] text-text-secondary mt-1">Duración est.</p>
          </div>
        </div>
      </div>

      <!-- Intensity gauge -->
      <div v-if="insights.avgRPE">
        <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">Intensidad promedio</p>
        <div class="flex flex-col items-center">
          <svg viewBox="0 0 120 70" class="w-32">
            <path d="M10,65 A52,52 0 0,1 110,65" fill="none" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round"/>
            <path
              d="M10,65 A52,52 0 0,1 110,65"
              fill="none"
              :stroke="gaugeColor"
              stroke-width="8"
              stroke-linecap="round"
              stroke-dasharray="163"
              :stroke-dashoffset="163 - (insights.intensity / 100) * 163"
              style="transition: stroke-dashoffset 0.6s cubic-bezier(.34,1.56,.64,1)"
            />
            <text x="60" y="57" text-anchor="middle" font-family="monospace" font-size="16" font-weight="800" :fill="gaugeColor">
              {{ insights.intensity }}%
            </text>
            <text x="60" y="67" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#94a3b8">
              RPE {{ insights.avgRPE }}
            </text>
          </svg>
          <div class="flex justify-between w-28 -mt-1">
            <span class="text-[9px] text-text-muted">Bajo</span>
            <span class="text-[9px] text-text-muted">Alto</span>
          </div>
        </div>
      </div>

      <!-- Volume per muscle -->
      <div>
        <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2.5">Volumen por músculo</p>
        <div v-if="insights.muscleList.length" class="space-y-2.5">
          <div v-for="m in insights.muscleList" :key="m.name">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-medium text-text-primary">
                {{ m.name }}
                <span v-if="m.sets > 20" class="text-amber-500 text-[10px] font-bold ml-1">⚠ Alto</span>
              </span>
              <span class="text-[11px] font-mono text-text-muted">{{ m.sets }}</span>
            </div>
            <div class="h-1.5 bg-border-default rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-500"
                :style="{
                  width: Math.min((m.sets / 24) * 100, 100) + '%',
                  background: MUSCLE_BAR_COLORS[m.name] ?? '#94a3b8',
                }"
              />
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col items-center py-6 gap-2 text-text-muted">
          <span class="material-symbols-outlined text-3xl opacity-30">bar_chart</span>
          <p class="text-xs text-center">Agrega ejercicios para ver el análisis</p>
        </div>
      </div>

      <!-- Balance -->
      <div v-if="insights.muscleList.length">
        <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2.5">Balance muscular</p>
        <div class="space-y-2">
          <div
            v-for="pair in balancePairs"
            :key="pair.label"
            class="flex items-center gap-2 p-2.5 rounded-xl bg-background-muted border border-border-soft"
          >
            <span class="text-base shrink-0">{{ pair.icon }}</span>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-semibold text-text-primary">{{ pair.label }}</p>
              <p class="text-[11px] mt-0.5" :class="statusClass(pair.status)">
                {{ statusLabel(pair.status) }}
                <span class="text-text-muted ml-1">({{ pair.v1 }}:{{ pair.v2 }})</span>
              </p>
            </div>
            <div class="w-2 h-2 rounded-full shrink-0" :class="dotClass(pair.status)" />
          </div>
        </div>
      </div>

    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MUSCLE_BAR_COLORS } from '@/data/exercises'
import type { InsightsData } from '@/composables/useTemplateBuilder'

const props = defineProps<{ insights: InsightsData }>()

const gaugeColor = computed(() => {
  if (props.insights.intensity >= 85) return '#ef4444'
  if (props.insights.intensity >= 70) return '#f59e0b'
  return '#22c55e'
})

function getMuscleVol(name: string): number {
  return props.insights.muscleList.find((m) => m.name === name)?.sets ?? 0
}

type BalanceStatus = 'ok' | 'warn' | 'over' | 'neutral'

function balanceStatus(v1: number, v2: number): BalanceStatus {
  if (v1 === 0 && v2 === 0) return 'neutral'
  const ratio = v2 > 0 ? v1 / v2 : v1 > 0 ? 99 : 1
  if (ratio >= 0.75 && ratio <= 1.35) return 'ok'
  if (ratio >= 0.5 && ratio < 2.5) return 'warn'
  return 'over'
}

const statusLabel = (s: BalanceStatus) => ({ ok: '✓ Balanceado', warn: '⚠ Revisar', over: '✕ Desbalanceado', neutral: '— Sin datos' }[s])
const statusClass = (s: BalanceStatus) => ({ ok: 'text-primary', warn: 'text-amber-500', over: 'text-red-500', neutral: 'text-text-muted' }[s])
const dotClass   = (s: BalanceStatus) => ({ ok: 'bg-primary', warn: 'bg-amber-400', over: 'bg-red-500', neutral: 'bg-border-default' }[s])

const balancePairs = computed(() => {
  const push = getMuscleVol('Pecho') + getMuscleVol('Hombros')
  const pull = getMuscleVol('Espalda')
  const legs = getMuscleVol('Piernas')
  const upper = push + pull
  return [
    { label: 'Empuje vs. Tirón', icon: '↔', v1: push, v2: pull, status: balanceStatus(push, pull) },
    { label: 'Piernas vs. Upper', icon: '🦵', v1: legs, v2: upper, status: balanceStatus(legs, upper) },
  ]
})
</script>
