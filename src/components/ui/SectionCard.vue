<template>
  <div class="bg-white dark:bg-slate-800 rounded-xl border shadow-sm" :class="[borderClass, cardClass]">
    <div v-if="title || $slots['header-actions']" class="flex justify-between items-center" :class="headerClass">
      <div>
        <h3 class="font-bold" :class="titleClass">{{ title }}</h3>
        <p v-if="subtitle" class="text-sm text-slate-500">{{ subtitle }}</p>
      </div>
      <slot name="header-actions" />
    </div>
    <div :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  titleClass?: string
  headerClass?: string
  contentClass?: string
  borderClass?: string
  cardClass?: string
}>(), {
  title: '',
  subtitle: '',
  titleClass: 'text-lg',
  headerClass: 'p-6 pb-0 mb-6',
  contentClass: 'p-6 pt-0',
  borderClass: 'border-primary/10',
  cardClass: ''
})
</script>
