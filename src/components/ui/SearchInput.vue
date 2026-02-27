<template>
  <div class="relative" :class="wrapperClass">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      :class="iconWrapperClass">
      <span class="material-symbols-outlined" :class="iconClass">{{ icon }}</span>
    </div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :class="[
        'w-full border-none focus:ring-2 focus:ring-primary/50 transition-all',
        paddingClass,
        bgClass,
        inputClass
      ]"
      :placeholder="placeholder"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string
  placeholder?: string
  icon?: string
  iconClass?: string
  iconWrapperClass?: string
  bgClass?: string
  inputClass?: string
  paddingClass?: string
  wrapperClass?: string
}>(), {
  modelValue: '',
  placeholder: 'Search...',
  icon: 'search',
  iconClass: 'text-slate-400',
  iconWrapperClass: '',
  bgClass: 'bg-slate-100 dark:bg-slate-800',
  inputClass: 'text-sm placeholder:text-slate-400',
  paddingClass: 'pl-10 pr-4 py-2.5',
  wrapperClass: 'group'
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
