<template>
  <div class="shrink-0 bg-background-dark border-b border-border-default">
    <div class="flex items-center overflow-x-auto scrollbar-none px-2">

      <button
        v-for="(week, idx) in weeks"
        :key="week.id"
        class="group relative flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-all"
        :class="activeIndex === idx
          ? 'text-primary border-primary'
          : 'text-text-muted border-transparent hover:text-text-secondary hover:border-border-default'"
        @click="$emit('select', idx)"
      >
        <!-- Week number badge -->
        <span class="font-mono text-[10px] px-1.5 py-0.5 rounded-md"
          :class="activeIndex === idx
            ? 'bg-primary/15 text-primary'
            : 'bg-background-muted text-text-muted'">
          S{{ week.week_number }}
        </span>

        <span>{{ week.label || `Semana ${week.week_number}` }}</span>

        <!-- Deload badge -->
        <span v-if="(week.volume_modifier ?? 1) < 0.85"
          class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
          DELOAD
        </span>

        <!-- Week actions -->
        <span
          class="material-symbols-outlined text-[13px] opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity cursor-pointer hover:text-text-primary"
          @click.stop="openMenu(week.id, idx, $event)"
        >more_horiz</span>
      </button>

      <!-- Add week -->
      <button
        class="flex items-center gap-1 px-3 py-3 text-xs font-semibold text-text-muted hover:text-primary transition-colors border-b-2 border-transparent ml-1 whitespace-nowrap"
        @click="$emit('add')"
      >
        <span class="material-symbols-outlined text-[15px]">add</span>
        Semana
      </button>
    </div>

    <!-- Context menu -->
    <Teleport to="body">
      <div
        v-if="menuOpen"
        class="fixed z-50 bg-background-dark border border-border-default rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-1.5 min-w-[176px]"
        :style="{ top: `${menuY}px`, left: `${menuX}px` }"
        @mouseleave="menuOpen = false"
      >
        <button
          class="w-full px-4 py-2.5 text-left text-sm text-text-secondary hover:bg-background-muted flex items-center gap-2.5 transition-colors"
          @click="emit('duplicate', menuWeekId); menuOpen = false"
        >
          <span class="material-symbols-outlined text-[16px] text-text-muted">content_copy</span>
          Duplicar semana
        </button>
        <div class="mx-3 my-1 border-t border-border-default" />
        <button
          v-if="weeks.length > 1"
          class="w-full px-4 py-2.5 text-left text-sm text-red-400 hover:bg-red-400/10 flex items-center gap-2.5 transition-colors"
          @click="emit('remove', menuWeekId); menuOpen = false"
        >
          <span class="material-symbols-outlined text-[16px]">delete</span>
          Eliminar semana
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { WeekTemplate } from '@/types/workout.types'

defineProps<{ weeks: WeekTemplate[]; activeIndex: number }>()

const emit = defineEmits<{
  select:    [index: number]
  add:       []
  remove:    [weekId: string]
  duplicate: [weekId: string]
}>()

const menuOpen   = ref(false)
const menuX      = ref(0)
const menuY      = ref(0)
const menuWeekId = ref('')

function openMenu(weekId: string, _idx: number, e: MouseEvent) {
  const rect = (e.target as HTMLElement).getBoundingClientRect()
  menuX.value   = rect.left
  menuY.value   = rect.bottom + 4
  menuWeekId.value = weekId
  menuOpen.value = true
}
</script>
