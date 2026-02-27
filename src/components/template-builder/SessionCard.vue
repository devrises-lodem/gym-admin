<template>
  <div class="bg-white rounded-2xl border border-border-default shadow-soft overflow-hidden mb-4 transition-shadow hover:shadow-card">

    <!-- Session Header -->
    <div class="flex items-center gap-3 px-5 py-3.5 bg-background-muted border-b border-border-default">
      <div class="w-1 h-7 rounded-full shrink-0" :style="{ background: session.color }" />
      <input
        :value="session.name"
        class="flex-1 font-bold text-text-primary bg-transparent border-none outline-none text-sm focus:border-b focus:border-primary"
        spellcheck="false"
        @change="$emit('rename', ($event.target as HTMLInputElement).value)"
        @keydown.enter="($event.target as HTMLInputElement).blur()"
      />
      <!-- Meta pills -->
      <div class="flex items-center gap-2 shrink-0">
        <span class="flex items-center gap-1 px-2 py-1 rounded-full bg-background-dark text-[11px] font-medium text-text-secondary border border-border-soft">
          <span class="material-symbols-outlined text-[13px]">schedule</span>
          ~{{ estMinutes }} min
        </span>
        <span class="px-2 py-1 rounded-full bg-background-dark text-[11px] font-medium text-text-secondary border border-border-soft">
          {{ totalSets }} series
        </span>
        <span v-if="session.blocks.length" class="px-2 py-1 rounded-full bg-background-dark text-[11px] font-medium text-text-secondary border border-border-soft">
          {{ session.blocks.length }} ejercicio{{ session.blocks.length !== 1 ? 's' : '' }}
        </span>
      </div>
      <button
        class="w-7 h-7 rounded-lg flex items-center justify-center text-text-muted hover:bg-red-50 hover:text-red-500 transition-colors ml-1"
        title="Eliminar sesión"
        @click="$emit('remove')"
      >
        <span class="material-symbols-outlined text-[16px]">delete</span>
      </button>
    </div>

    <!-- Blocks area -->
    <div class="p-3">
      <template v-for="(entry, idx) in groupedBlocks" :key="idx">

        <!-- Group wrapper (superset / circuit) -->
        <div
          v-if="entry.type === 'group'"
          class="mb-2 rounded-xl border overflow-hidden"
          :class="entry.groupType === 'superset' ? 'border-blue-200 bg-blue-50/40' : 'border-orange-200 bg-orange-50/40'"
        >
          <div
            class="flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
            :class="entry.groupType === 'superset' ? 'text-blue-600' : 'text-orange-500'"
          >
            <span class="material-symbols-outlined text-[14px]">{{ entry.groupType === 'superset' ? 'link' : 'loop' }}</span>
            {{ entry.groupType === 'superset' ? 'Superserie' : 'Circuito' }}
            <span class="opacity-60">({{ entry.blocks.length }} ejercicios)</span>
          </div>
          <div class="px-2 pb-2">
            <ExerciseBlock
              v-for="block in entry.blocks"
              :key="block.id"
              :block="block"
              @update="(f, v) => $emit('update-block', block.id, f, v)"
              @remove="$emit('remove-block', block.id)"
              @move="(d) => $emit('move-block', block.id, d)"
              @toggle-group="(t) => $emit('toggle-group', block.id, t)"
            />
          </div>
        </div>

        <!-- Single block -->
        <ExerciseBlock
          v-else
          :block="entry.block"
          @update="(f, v) => $emit('update-block', entry.block.id, f, v)"
          @remove="$emit('remove-block', entry.block.id)"
          @move="(d) => $emit('move-block', entry.block.id, d)"
          @toggle-group="(t) => $emit('toggle-group', entry.block.id, t)"
        />
      </template>

      <!-- Drop zone -->
      <div
        class="mt-1 border-2 border-dashed rounded-xl py-5 flex flex-col items-center justify-center gap-1 transition-all cursor-default"
        :class="isDragOver
          ? 'border-primary bg-primary-light'
          : 'border-border-dashed hover:border-primary/50 hover:bg-background-muted'"
        @dragover.prevent="isDragOver = true"
        @dragleave="isDragOver = false"
        @drop.prevent="onDrop"
      >
        <span class="material-symbols-outlined text-2xl" :class="isDragOver ? 'text-primary' : 'text-text-muted'">add_circle</span>
        <p class="text-[12px] font-medium" :class="isDragOver ? 'text-primary' : 'text-text-muted'">
          Arrastra un ejercicio aquí o
          <button class="font-bold text-primary hover:underline" @click="$emit('open-picker')">elige uno</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ExerciseBlock from './ExerciseBlock.vue'
import type { TemplateSession, TemplateBlock } from '@/composables/useTemplateBuilder'

const props = defineProps<{ session: TemplateSession }>()

const emit = defineEmits<{
  rename: [name: string]
  remove: []
  'update-block': [bid: string, field: string, value: string]
  'remove-block': [bid: string]
  'move-block': [bid: string, dir: number]
  'toggle-group': [bid: string, type: 'superset' | 'circuit']
  'drop-exercise': [exId: number]
  'open-picker': []
}>()

const isDragOver = ref(false)

function onDrop(e: DragEvent) {
  isDragOver.value = false
  const exId = parseInt(e.dataTransfer?.getData('exId') ?? '')
  if (exId) emit('drop-exercise', exId)
}

const totalSets = computed(() => props.session.blocks.reduce((acc, b) => acc + (b.sets || 0), 0))
const estMinutes = computed(() => {
  const secs = props.session.blocks.reduce((acc, b) => acc + (b.sets || 0) * ((b.rest || 60) + 45), 0)
  return Math.max(Math.round(secs / 60), 1)
})

interface GroupEntry {
  type: 'group'
  groupType: string
  blocks: TemplateBlock[]
}
interface SingleEntry {
  type: 'single'
  block: TemplateBlock
}
type BlockEntry = GroupEntry | SingleEntry

const groupedBlocks = computed<BlockEntry[]>(() => {
  const blocks = props.session.blocks
  const result: BlockEntry[] = []
  let i = 0
  while (i < blocks.length) {
    const b = blocks[i]
    if (b.group === 'superset' || b.group === 'circuit') {
      const groupBlocks: TemplateBlock[] = []
      while (i < blocks.length && blocks[i].group === b.group) groupBlocks.push(blocks[i++])
      result.push({ type: 'group', groupType: b.group, blocks: groupBlocks })
    } else {
      result.push({ type: 'single', block: b })
      i++
    }
  }
  return result
})
</script>
