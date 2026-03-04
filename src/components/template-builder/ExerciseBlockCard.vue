<template>
  <div
    class="rounded-xl border transition-all duration-150"
    :class="[borderClass, isDragOver ? 'ring-2 ring-primary/40' : '']"
    @dragover.prevent="isDragOver = true"
    @dragleave.self="isDragOver = false"
    @drop.prevent="onBlockDrop"
  >
    <!-- Block header bar -->
    <div class="flex items-center gap-1.5 px-3 py-2 rounded-t-xl" :class="headerBg">

      <!-- Block type pills -->
      <div class="flex items-center gap-1 flex-wrap">
        <button
          v-for="bt in BLOCK_TYPES"
          :key="bt.value"
          class="px-2 py-0.5 rounded-full text-[10px] font-bold cursor-pointer transition-all border"
          :class="block.block_type === bt.value ? bt.activeClass : 'border-transparent text-text-muted hover:border-border-default hover:text-text-secondary'"
          @click="$emit('toggle-type', bt.value)"
        >{{ bt.label }}</button>
      </div>

      <!-- Label for group blocks -->
      <input
        v-if="block.block_type !== 'normal'"
        :value="block.label"
        placeholder="Etiqueta…"
        class="flex-1 min-w-0 bg-transparent text-xs font-semibold text-text-secondary outline-none
               border-b border-transparent focus:border-border-default transition-colors placeholder:text-text-muted"
        @blur="$emit('update', 'label', ($event.target as HTMLInputElement).value)"
      />
      <div v-else class="flex-1" />

      <!-- Rounds for circuit -->
      <div v-if="block.block_type === 'circuit'" class="flex items-center gap-1.5 shrink-0">
        <span class="text-[10px] font-bold text-text-muted uppercase tracking-wide">Rondas</span>
        <input
          :value="block.rounds ?? 3"
          type="number" min="1" max="20"
          class="w-10 text-center text-xs font-bold bg-background-muted border border-border-default
                 rounded-md outline-none focus:border-primary py-0.5 text-text-primary"
          @change="$emit('update', 'rounds', +($event.target as HTMLInputElement).value)"
        />
      </div>

      <!-- Move / delete -->
      <div class="flex items-center gap-0 shrink-0 ml-auto">
        <button :disabled="isFirst"
          class="w-7 h-7 rounded-md flex items-center justify-center text-text-muted transition-colors disabled:opacity-25"
          :class="!isFirst ? 'hover:bg-background-muted hover:text-text-primary' : ''"
          @click="$emit('move-up')">
          <span class="material-symbols-outlined text-[15px]">keyboard_arrow_up</span>
        </button>
        <button :disabled="isLast"
          class="w-7 h-7 rounded-md flex items-center justify-center text-text-muted transition-colors disabled:opacity-25"
          :class="!isLast ? 'hover:bg-background-muted hover:text-text-primary' : ''"
          @click="$emit('move-down')">
          <span class="material-symbols-outlined text-[15px]">keyboard_arrow_down</span>
        </button>
        <button
          class="w-7 h-7 rounded-md flex items-center justify-center text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
          @click="$emit('remove')">
          <span class="material-symbols-outlined text-[15px]">close</span>
        </button>
      </div>
    </div>

    <!-- Exercises inside block -->
    <div class="divide-y divide-border-default/40">
      <BlockExerciseRow
        v-for="exercise in block.exercises"
        :key="exercise.id"
        :exercise="exercise"
        :block-type="block.block_type"
        @add-set="$emit('add-set', exercise.id)"
        @remove-set="sid => $emit('remove-set', exercise.id, sid)"
        @update-set="(sid, patch) => $emit('update-set', exercise.id, sid, patch)"
        @remove="$emit('remove-exercise', exercise.id)"
      />
    </div>

    <!-- "Add to superset/circuit" drop zone -->
    <div
      v-if="block.block_type !== 'normal' && block.exercises.length < 6"
      class="px-3 py-2 border-t border-border-default/30"
    >
      <div
        class="flex items-center gap-2 h-8 px-3 rounded-lg border border-dashed text-xs font-semibold
               cursor-pointer transition-all"
        :class="isDragOver
          ? 'border-primary bg-primary/5 text-primary'
          : 'border-border-default text-text-muted hover:border-border-light hover:text-text-secondary'"
        @click="$emit('open-picker-for-block')"
      >
        <span class="material-symbols-outlined text-[14px]">add</span>
        Agregar al {{ BLOCK_TYPE_LABELS[block.block_type] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ExerciseBlock, BlockType, SetConfig } from '@/types/workout.types'
import BlockExerciseRow from './BlockExerciseRow.vue'

interface BlockTypeDef { value: BlockType; label: string; activeClass: string }

const BLOCK_TYPES: BlockTypeDef[] = [
  { value: 'normal',     label: 'Normal',      activeClass: 'bg-background-muted  border-border-default  text-text-primary'  },
  { value: 'superset',   label: 'Superserie',  activeClass: 'bg-violet-500/10  border-violet-500/40  text-violet-400'   },
  { value: 'circuit',    label: 'Circuito',    activeClass: 'bg-blue-500/10    border-blue-500/40    text-blue-400'     },
  { value: 'dropset',    label: 'Dropset',     activeClass: 'bg-orange-500/10  border-orange-500/40  text-orange-400'   },
  { value: 'rest_pause', label: 'Rest-Pause',  activeClass: 'bg-green-500/10   border-green-500/40   text-green-400'    },
  { value: 'myo_rep',    label: 'Myo-Rep',     activeClass: 'bg-pink-500/10    border-pink-500/40    text-pink-400'     },
]

const BLOCK_TYPE_LABELS: Record<BlockType, string> = {
  normal: 'bloque', superset: 'superserie', circuit: 'circuito',
  dropset: 'dropset', rest_pause: 'rest-pause', myo_rep: 'myo-rep',
}

const BORDER_CLASS: Record<BlockType, string> = {
  normal:     'border-border-default',
  superset:   'border-violet-500/25',
  circuit:    'border-blue-500/25',
  dropset:    'border-orange-500/25',
  rest_pause: 'border-green-500/25',
  myo_rep:    'border-pink-500/25',
}

const HEADER_BG: Record<BlockType, string> = {
  normal:     'bg-background-muted/40',
  superset:   'bg-violet-500/5',
  circuit:    'bg-blue-500/5',
  dropset:    'bg-orange-500/5',
  rest_pause: 'bg-green-500/5',
  myo_rep:    'bg-pink-500/5',
}

const props = defineProps<{
  block:      ExerciseBlock
  isFirst:    boolean
  isLast:     boolean
  draggedId?: string | number | null
}>()

const emit = defineEmits<{
  'move-up':        []
  'move-down':      []
  remove:           []
  'toggle-type':    [type: BlockType]
  update:           [field: string, value: unknown]
  'add-set':        [exerciseId: string]
  'remove-set':     [exerciseId: string, setId: string]
  'update-set':     [exerciseId: string, setId: string, patch: Partial<SetConfig>]
  'add-exercise':        [exerciseId: string]
  'remove-exercise':     [exerciseId: string]
  'drop-to-block':       []
  'open-picker-for-block': []
}>()

const isDragOver = ref(false)

function onBlockDrop(_e: DragEvent) {
  isDragOver.value = false
  emit('drop-to-block')
}

const borderClass = computed(() => BORDER_CLASS[props.block.block_type])
const headerBg    = computed(() => HEADER_BG[props.block.block_type])
</script>
