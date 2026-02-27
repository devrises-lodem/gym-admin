<template>
  <div class="bg-white dark:bg-slate-900 rounded-xl p-6 border shadow-sm" :class="borderClass">
    <div class="flex justify-between items-start" :class="{ 'mb-4': hasIconSlot, 'mb-2': !hasIconSlot }">
      <!-- Layout A: Icon on top-left, badge on top-right (Analytics style) -->
      <template v-if="hasIconSlot">
        <div class="p-2 rounded-lg" :class="iconBgClass">
          <span class="material-symbols-outlined" :class="iconColorClass">{{ icon }}</span>
        </div>
      </template>
      <!-- Layout B: Label on top-left, trend icon on top-right (ClientProfile1 style) -->
      <template v-else>
        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">{{ label }}</p>
      </template>

      <span v-if="badge"
        class="text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
        :class="badgeClass">
        {{ badge }}
      </span>
      <span v-if="trendIcon && !badge"
        class="material-symbols-outlined text-sm"
        :class="trendIconClass">
        {{ trendIcon }}
      </span>
    </div>

    <p v-if="hasIconSlot" class="text-slate-500 dark:text-slate-400 text-sm font-medium">{{ label }}</p>
    <p class="font-bold mt-1" :class="valueClass">{{ value }}</p>
    <p v-if="subtitle" class="text-xs mt-1" :class="subtitleClass">{{ subtitle }}</p>

    <!-- Progress bar -->
    <div v-if="progress !== undefined" class="w-full h-2 rounded-full mt-3 overflow-hidden"
      :class="progressTrackClass">
      <div class="h-full rounded-full transition-all duration-500" :class="progressBarClass"
        :style="{ width: `${Math.min(progress, 100)}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  value: string
  icon?: string
  iconBgClass?: string
  iconColorClass?: string
  badge?: string
  badgeClass?: string
  trendIcon?: string
  trendIconClass?: string
  subtitle?: string
  subtitleClass?: string
  valueClass?: string
  borderClass?: string
  progress?: number
  progressBarClass?: string
  progressTrackClass?: string
}>(), {
  icon: '',
  iconBgClass: 'bg-primary/10',
  iconColorClass: 'text-primary',
  badge: '',
  badgeClass: 'bg-primary/20 text-primary',
  trendIcon: '',
  trendIconClass: 'text-primary',
  subtitle: '',
  subtitleClass: 'text-primary',
  valueClass: 'text-2xl',
  borderClass: 'border-slate-200 dark:border-slate-800',
  progressBarClass: 'bg-primary',
  progressTrackClass: 'bg-slate-100 dark:bg-slate-800'
})

const hasIconSlot = computed(() => !!props.icon)
</script>
