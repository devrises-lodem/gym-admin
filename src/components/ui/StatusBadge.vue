<template>
  <span
    class="inline-flex items-center font-bold uppercase rounded"
    :class="[sizeClass, variantClass]">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  variant?: 'primary' | 'danger' | 'warning' | 'info' | 'success'
  size?: 'sm' | 'md'
}>(), {
  variant: 'primary',
  size: 'sm'
})

const variantClasses: Record<string, string> = {
  primary: 'bg-primary/20 text-primary-dark',
  danger: 'bg-red-100 dark:bg-red-900/30 text-red-600',
  warning: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600',
  info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
  success: 'bg-green-100 dark:bg-green-900/30 text-green-600'
}

const sizeClasses: Record<string, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs'
}

const variantClass = computed(() => variantClasses[props.variant] || variantClasses.primary)
const sizeClass = computed(() => sizeClasses[props.size] || sizeClasses.sm)
</script>
