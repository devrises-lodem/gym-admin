<template>
  <div class="flex gap-2 overflow-x-auto scrollbar-hide" :class="wrapperClass">
    <button
      v-for="item in items"
      :key="item"
      @click="$emit('update:modelValue', item)"
      class="shrink-0 whitespace-nowrap transition-colors"
      :class="[
        baseClass,
        modelValue === item ? activeClass : inactiveClass
      ]"
    >
      {{ item }}
    </button>
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  items: string[]
  modelValue?: string
  activeClass?: string
  inactiveClass?: string
  baseClass?: string
  wrapperClass?: string
}>(), {
  modelValue: '',
  activeClass: 'bg-primary text-slate-900 font-semibold',
  inactiveClass: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700',
  baseClass: 'px-4 py-1.5 rounded-full text-xs',
  wrapperClass: ''
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
