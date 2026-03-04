<template>
  <div class="group/row">
    <!-- Exercise header -->
    <div class="flex items-center gap-2 px-3 py-2.5">
      <!-- Slot badge (A, B, C for supersets) -->
      <span v-if="exercise.slot"
        class="w-5 h-5 rounded-full bg-primary/15 text-primary text-[10px] font-black flex items-center justify-center shrink-0">
        {{ exercise.slot }}
      </span>

      <!-- Exercise name -->
      <div class="flex-1 min-w-0">
        <p class="text-sm font-bold text-text-primary truncate">
          {{ resolvedName }}
        </p>
        <p class="text-[10px] text-text-muted truncate mt-0.5">
          {{ exercise.coaching_note || resolvedMeta }}
        </p>
      </div>

      <!-- Series count pill -->
      <span class="text-[10px] font-semibold text-text-muted bg-background-muted px-2 py-0.5 rounded-full">
        {{ exercise.sets.length }} series
      </span>

      <!-- Remove exercise (only visible on hover) -->
      <button
        class="w-6 h-6 rounded-md flex items-center justify-center text-text-muted opacity-0 group-hover/row:opacity-100
               hover:text-red-400 hover:bg-red-400/10 transition-all shrink-0"
        @click="$emit('remove')"
      >
        <span class="material-symbols-outlined text-[14px]">close</span>
      </button>
    </div>

    <!-- Set rows -->
    <div class="px-3 pb-2.5 space-y-1">
      <!-- Header labels -->
      <div class="grid gap-1.5 mb-1" :style="gridStyle">
        <span class="text-[9px] font-bold uppercase tracking-wider text-text-muted text-center">#</span>
        <span class="text-[9px] font-bold uppercase tracking-wider text-text-muted text-center">Tipo</span>
        <span class="text-[9px] font-bold uppercase tracking-wider text-text-muted text-center">Reps</span>
        <span class="text-[9px] font-bold uppercase tracking-wider text-text-muted text-center">Intensidad</span>
        <span class="text-[9px] font-bold uppercase tracking-wider text-text-muted text-center">Descanso</span>
        <span class="text-[9px] font-bold uppercase tracking-wider text-text-muted text-center">Tempo</span>
        <span />
      </div>

      <!-- Set row -->
      <div
        v-for="(set, idx) in exercise.sets"
        :key="set.id"
        class="group/set grid gap-1.5 items-center"
        :style="gridStyle"
      >
        <!-- Order number -->
        <span class="text-[11px] font-mono font-bold text-text-muted text-center">{{ idx + 1 }}</span>

        <!-- Set type -->
        <select
          :value="set.set_type"
          class="h-7 px-1.5 rounded-md border border-border-default bg-background-muted text-[11px] font-semibold text-text-secondary focus:outline-none focus:border-primary transition-colors"
          @change="patch(set.id, { set_type: ($event.target as HTMLSelectElement).value as any })"
        >
          <option v-for="st in SET_TYPES" :key="st.value" :value="st.value">{{ st.label }}</option>
        </select>

        <!-- Reps range -->
        <div class="flex items-center gap-0.5">
          <input
            :value="set.reps_min ?? ''"
            type="number" min="1" max="100" placeholder="8"
            class="w-10 h-7 text-center text-[11px] font-mono font-bold bg-background-muted border border-border-default rounded-l-md text-text-primary outline-none focus:border-primary transition-colors"
            @change="patch(set.id, { reps_min: +($event.target as HTMLInputElement).value })"
          />
          <span class="text-text-muted text-[10px] px-0.5">–</span>
          <input
            :value="set.reps_max ?? ''"
            type="number" min="1" max="100" placeholder="12"
            class="w-10 h-7 text-center text-[11px] font-mono font-bold bg-background-muted border border-border-default rounded-r-md text-text-primary outline-none focus:border-primary transition-colors"
            @change="patch(set.id, { reps_max: +($event.target as HTMLInputElement).value })"
          />
        </div>

        <!-- Intensity (metric + value) -->
        <div class="flex items-center gap-0.5">
          <select
            :value="set.intensity_metric"
            class="h-7 px-1 rounded-l-md border border-border-default bg-background-muted text-[10px] font-semibold text-text-muted focus:outline-none focus:border-primary transition-colors"
            @change="patch(set.id, { intensity_metric: ($event.target as HTMLSelectElement).value as any })"
          >
            <option v-for="im in INTENSITY_METRICS" :key="im.value" :value="im.value">{{ im.label }}</option>
          </select>
          <input
            :value="set.intensity_value ?? ''"
            type="number" step="0.5" placeholder="7"
            class="w-12 h-7 text-center text-[11px] font-mono font-bold bg-background-muted border border-l-0 border-border-default rounded-r-md text-text-primary outline-none focus:border-primary transition-colors"
            @change="patch(set.id, { intensity_value: +($event.target as HTMLInputElement).value })"
          />
        </div>

        <!-- Rest seconds -->
        <div class="flex items-center gap-0.5">
          <input
            :value="set.rest_seconds ?? ''"
            type="number" min="0" max="600" step="15" placeholder="90"
            class="w-14 h-7 text-center text-[11px] font-mono font-bold bg-background-muted border border-border-default rounded-md text-text-primary outline-none focus:border-primary transition-colors"
            @change="patch(set.id, { rest_seconds: +($event.target as HTMLInputElement).value })"
          />
          <span class="text-[9px] text-text-muted">s</span>
        </div>

        <!-- Tempo -->
        <input
          :value="set.tempo ?? ''"
          type="text" placeholder="3-1-2-0" maxlength="7"
          class="h-7 px-1.5 text-center text-[11px] font-mono bg-background-muted border border-border-default rounded-md text-text-primary outline-none focus:border-primary transition-colors"
          @blur="patch(set.id, { tempo: ($event.target as HTMLInputElement).value || undefined })"
        />

        <!-- Remove set -->
        <button
          class="w-6 h-6 rounded-md flex items-center justify-center opacity-0 group-hover/set:opacity-100
                 text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-all justify-self-center"
          :disabled="exercise.sets.length <= 1"
          @click="$emit('remove-set', set.id)"
        >
          <span class="material-symbols-outlined text-[13px]">remove</span>
        </button>
      </div>

      <!-- Add set -->
      <button
        class="w-full flex items-center justify-center gap-1 h-7 rounded-lg border border-dashed
               border-border-default text-[11px] font-semibold text-text-muted
               hover:border-primary hover:text-primary hover:bg-primary/5 transition-all mt-1"
        @click="$emit('add-set')"
      >
        <span class="material-symbols-outlined text-[14px]">add</span>
        Serie
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BlockExercise, BlockType, SetConfig, SetType, IntensityMetric } from '@/types/workout.types'
import { EXERCISES } from '@/data/exercises'

const EXERCISE_NAMES: Record<string, string> = Object.fromEntries(
  EXERCISES.map(e => [String(e.id), e.name]),
)

const SET_TYPES: { value: SetType; label: string }[] = [
  { value: 'warmup',    label: 'Calent.'  },
  { value: 'working',   label: 'Trabajo'  },
  { value: 'drop',      label: 'Drop'     },
  { value: 'amrap',     label: 'AMRAP'    },
  { value: 'failure',   label: 'Fallo'    },
  { value: 'technique', label: 'Técnica'  },
]

const INTENSITY_METRICS: { value: IntensityMetric; label: string }[] = [
  { value: 'rpe',          label: 'RPE'  },
  { value: 'percent_1rm',  label: '%1RM' },
  { value: 'rir',          label: 'RIR'  },
  { value: 'absolute',     label: 'kg'   },
  { value: 'bodyweight',   label: 'BW'   },
]

const props = defineProps<{
  exercise:  BlockExercise
  blockType: BlockType
}>()

const emit = defineEmits<{
  'add-set':    []
  'remove-set': [setId: string]
  'update-set': [setId: string, patch: Partial<SetConfig>]
  remove:       []
}>()

const resolvedExercise = computed(() =>
  EXERCISES.find(e => String(e.id) === props.exercise.exercise_id),
)

const resolvedName = computed(() =>
  props.exercise.display_name
  ?? (resolvedExercise.value ? `${resolvedExercise.value.emoji} ${resolvedExercise.value.name}` : null)
  ?? `Ejercicio (${props.exercise.exercise_id.slice(0, 6)}…)`,
)

const resolvedMeta = computed(() => resolvedExercise.value?.meta ?? '')

// 7 columns: # | type | reps | intensity | rest | tempo | del
const gridStyle = 'grid-template-columns: 24px 72px 1fr 1fr 64px 72px 28px'

function patch(setId: string, p: Partial<SetConfig>) {
  emit('update-set', setId, p)
}
</script>
