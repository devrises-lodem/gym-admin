<template>
  <div
    class="group flex items-start gap-3 bg-white border rounded-xl p-3 mb-1.5 transition-all shadow-soft hover:shadow-card"
    :class="[block.group ? 'border-l-[3px]' : 'border-border-default',
             block.group === 'superset' ? 'border-l-blue-500 border-border-default' :
             block.group === 'circuit'  ? 'border-l-orange-400 border-border-default' : '']"
  >
    <!-- Thumb -->
    <div class="w-12 h-12 rounded-lg bg-background-muted flex items-center justify-center text-2xl shrink-0">
      {{ exercise?.emoji }}
    </div>

    <!-- Body -->
    <div class="flex-1 min-w-0">
      <!-- Name + actions -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <div>
          <p class="text-sm font-bold text-text-primary">{{ exercise?.name }}</p>
          <p class="text-[11px] text-text-muted mt-0.5">{{ exercise?.meta }}</p>
        </div>
        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <button
            class="w-6 h-6 rounded flex items-center justify-center text-text-muted hover:bg-background-muted hover:text-text-primary transition-colors"
            title="Subir"
            @click="$emit('move', -1)"
          >
            <span class="material-symbols-outlined text-[14px]">arrow_upward</span>
          </button>
          <button
            class="w-6 h-6 rounded flex items-center justify-center text-text-muted hover:bg-background-muted hover:text-text-primary transition-colors"
            title="Bajar"
            @click="$emit('move', 1)"
          >
            <span class="material-symbols-outlined text-[14px]">arrow_downward</span>
          </button>
          <button
            class="w-6 h-6 rounded flex items-center justify-center text-text-muted hover:bg-red-50 hover:text-red-500 transition-colors"
            title="Eliminar"
            @click="$emit('remove')"
          >
            <span class="material-symbols-outlined text-[14px]">delete</span>
          </button>
        </div>
      </div>

      <!-- Param inputs -->
      <div class="flex flex-wrap gap-2 mb-2.5">
        <div v-for="p in params" :key="p.field" class="flex flex-col gap-1">
          <label class="text-[9px] font-bold uppercase tracking-wider text-text-muted">{{ p.label }}</label>
          <input
            :type="p.type"
            :value="(block as Record<string, unknown>)[p.field]"
            :min="p.min"
            :max="p.max"
            :step="p.step ?? 1"
            class="h-9 text-center rounded-lg border border-border-default bg-background-muted text-sm font-semibold text-text-primary focus:outline-none focus:border-primary focus:bg-white transition-colors"
            :class="[p.width ?? 'w-14', p.field === 'rpe' ? 'text-amber-600' : '']"
            @change="$emit('update', p.field, ($event.target as HTMLInputElement).value)"
          />
        </div>
      </div>

      <!-- Chain buttons -->
      <div class="flex gap-1.5">
        <button
          class="flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-colors"
          :class="block.group === 'superset'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'border-border-default text-text-secondary hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50'"
          @click="$emit('toggle-group', 'superset')"
        >
          <span class="material-symbols-outlined text-[13px]">link</span>
          Superserie
        </button>
        <button
          class="flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-colors"
          :class="block.group === 'circuit'
            ? 'bg-orange-400 text-white border-orange-400'
            : 'border-border-default text-text-secondary hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50'"
          @click="$emit('toggle-group', 'circuit')"
        >
          <span class="material-symbols-outlined text-[13px]">loop</span>
          Circuito
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { EXERCISES } from '@/data/exercises'
import type { TemplateBlock } from '@/composables/useTemplateBuilder'

const props = defineProps<{ block: TemplateBlock }>()

defineEmits<{
  update: [field: string, value: string]
  remove: []
  move: [dir: number]
  'toggle-group': [type: 'superset' | 'circuit']
}>()

const exercise = computed(() => EXERCISES.find((e) => e.id === props.block.exId))

const params = [
  { field: 'sets', label: 'Series',   type: 'number', min: 1,  max: 20,  width: 'w-14' },
  { field: 'reps', label: 'Reps',     type: 'text',                       width: 'w-16' },
  { field: 'rpe',  label: 'RPE',      type: 'number', min: 1,  max: 10,  step: 0.5, width: 'w-14' },
  { field: 'rest', label: 'Desc. (s)',type: 'number', min: 0,  max: 600, step: 15,  width: 'w-16' },
]
</script>
