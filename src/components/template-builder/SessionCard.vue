<template>
  <div
    class="bg-background-dark border rounded-2xl overflow-hidden transition-all duration-200"
    :class="isDragTarget
      ? 'border-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-background-page'
      : 'border-border-default'"
    @dragover.prevent="isDragTarget = true"
    @dragleave.self="isDragTarget = false"
    @drop.prevent="onDrop"
  >
    <!-- Session header -->
    <div class="flex items-center gap-3 px-4 py-3 border-b border-border-default">
      <span class="material-symbols-outlined text-[18px] text-text-muted/50 cursor-grab select-none">drag_indicator</span>

      <!-- Name (editable) -->
      <input
        :value="session.name"
        class="flex-1 bg-transparent font-bold text-base text-text-primary outline-none
               border-b border-transparent focus:border-primary pb-0.5 transition-colors min-w-0"
        @blur="$emit('rename', ($event.target as HTMLInputElement).value)"
        @keyup.enter="($event.target as HTMLInputElement).blur()"
      />

      <!-- Stats -->
      <div class="hidden sm:flex items-center gap-3 text-xs text-text-muted font-medium shrink-0">
        <span>{{ totalBlocks }} bloque{{ totalBlocks !== 1 ? 's' : '' }}</span>
        <span class="text-border-default">·</span>
        <span>{{ totalExercises }} ejerc.</span>
        <span class="text-border-default">·</span>
        <span>{{ totalSets }} series</span>
      </div>

      <!-- Actions -->
      <button
        class="flex items-center gap-1 h-8 px-3 rounded-lg text-xs font-semibold text-text-muted
               hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
        @click="$emit('open-picker')"
      >
        <span class="material-symbols-outlined text-[15px]">search</span>
        <span class="hidden sm:inline">Buscar</span>
      </button>

      <button
        class="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted
               hover:text-red-400 hover:bg-red-400/10 transition-colors shrink-0"
        @click="$emit('remove')"
      >
        <span class="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>

    <!-- Blocks -->
    <div class="p-3 space-y-2">
      <TransitionGroup name="block-list" tag="div" class="space-y-2">
        <ExerciseBlockCard
          v-for="(block, idx) in session.blocks"
          :key="block.id"
          :block="block"
          :is-first="idx === 0"
          :is-last="idx === session.blocks.length - 1"
          :dragged-id="draggedId"
          @move-up="$emit('move-block', block.id, 'up')"
          @move-down="$emit('move-block', block.id, 'down')"
          @remove="$emit('remove-block', block.id)"
          @toggle-type="t => $emit('toggle-group', block.id, t)"
          @update="(f,v) => $emit('update-block', block.id, f, v)"
          @add-set="exId => $emit('add-set', block.id, exId)"
          @remove-set="(exId, sid) => $emit('remove-set', block.id, exId, sid)"
          @update-set="(exId, sid, p) => $emit('update-set', block.id, exId, sid, p)"
          @add-exercise="exId => $emit('add-exercise-to-block', block.id, exId)"
          @remove-exercise="exId => $emit('remove-exercise', block.id, exId)"
          @drop-to-block="$emit('drop-to-block', block.id)"
          @open-picker-for-block="$emit('open-picker-for-block', block.id)"
        />
      </TransitionGroup>

      <!-- Drop zone when empty -->
      <div
        v-if="session.blocks.length === 0"
        class="flex flex-col items-center gap-2 py-10 rounded-xl border-2 border-dashed
               transition-all duration-150"
        :class="isDragTarget
          ? 'border-primary bg-primary/5 text-primary'
          : 'border-border-default text-text-muted'"
      >
        <span class="material-symbols-outlined text-4xl opacity-30">fitness_center</span>
        <span class="text-sm font-semibold">Arrastra ejercicios aquí</span>
        <span class="text-xs opacity-70">o usa el buscador de ejercicios</span>
      </div>

      <!-- Add manually -->
      <button
        class="w-full flex items-center justify-center gap-2 h-9 rounded-xl border border-dashed
               border-border-default text-xs font-semibold text-text-muted
               hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
        @click="$emit('open-picker')"
      >
        <span class="material-symbols-outlined text-[16px]">add</span>
        Agregar ejercicio
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TrainingSession, BlockType, SetConfig } from '@/types/workout.types'
import ExerciseBlockCard from './ExerciseBlockCard.vue'

const props = defineProps<{
  session:   TrainingSession
  draggedId?: string | number | null
}>()

const emit = defineEmits<{
  rename:               [name: string]
  remove:               []
  'add-block':          [exerciseId: string, type: BlockType]
  'remove-block':       [blockId: string]
  'move-block':         [blockId: string, dir: 'up' | 'down']
  'toggle-group':       [blockId: string, type: BlockType]
  'update-block':       [blockId: string, field: string, value: unknown]
  'add-set':            [blockId: string, exerciseId: string]
  'remove-set':         [blockId: string, exerciseId: string, setId: string]
  'update-set':         [blockId: string, exerciseId: string, setId: string, patch: Partial<SetConfig>]
  'add-exercise-to-block': [blockId: string, exerciseId: string]
  'remove-exercise':    [blockId: string, exerciseId: string]
  'drop-exercise':         [exerciseId: string]
  'drop-to-block':         [blockId: string]
  'open-picker':           []
  'open-picker-for-block': [blockId: string]
}>()

const isDragTarget = ref(false)

function onDrop(e: DragEvent) {
  isDragTarget.value = false
  const exId = e.dataTransfer?.getData('exerciseId')
  if (exId) emit('drop-exercise', exId)
}

const totalBlocks    = computed(() => props.session.blocks.length)
const totalExercises = computed(() =>
  props.session.blocks.reduce((a, b) => a + b.exercises.length, 0),
)
const totalSets = computed(() =>
  props.session.blocks.reduce(
    (a, b) => a + b.exercises.reduce((a2, e) => a2 + e.sets.length, 0), 0,
  ),
)
</script>

<style scoped>
.block-list-enter-active { animation: blockIn 0.15s ease-out; }
.block-list-leave-active { animation: blockIn 0.1s ease-in reverse; }
@keyframes blockIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
