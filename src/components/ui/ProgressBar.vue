<template>
  <div class="space-y-1">
    <div v-if="label || showValue" class="flex justify-between text-xs font-medium">
      <span v-if="label">{{ label }}</span>
      <span v-if="showValue">{{ displayValue }}</span>
    </div>
    <div class="w-full rounded-full overflow-hidden" :class="[trackClass, heightClass]">
      <div class="h-full rounded-full transition-all duration-500" :class="barClass"
        :style="{ width: `${percentage}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  max?: number
  label?: string
  displayValue?: string
  showValue?: boolean
  barClass?: string
  trackClass?: string
  heightClass?: string
}>(), {
  max: 100,
  label: '',
  displayValue: '',
  showValue: false,
  barClass: 'bg-primary',
  trackClass: 'bg-slate-100 dark:bg-slate-800',
  heightClass: 'h-3'
})

const percentage = computed(() => {
  if (props.max === 0) return 0
  return Math.min((props.value / props.max) * 100, 100)
})
</script>
