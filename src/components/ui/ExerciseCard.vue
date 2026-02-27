<template>
  <component :is="to ? 'RouterLink' : 'div'"
    :to="to"
    class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
    <!-- Image -->
    <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
      <div
        class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
        :data-alt="imageAlt"
        :style="`background-image: url('${image}');`">
      </div>
      <div
        class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <span
          class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
      </div>
      <div v-if="badge"
        class="absolute top-3 left-3 px-2 py-1 bg-primary text-slate-900 text-[10px] font-bold uppercase rounded leading-none">
        {{ badge }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 flex flex-col gap-2">
      <div class="flex justify-between items-start">
        <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">{{ name }}</h3>
        <span
          class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
      </div>
      <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">{{ category }}</p>
      <div v-if="tags.length" class="mt-2 flex items-center gap-2">
        <span v-for="tag in tags" :key="tag"
          class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">
          {{ tag }}
        </span>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  image: string
  imageAlt?: string
  category: string
  tags?: string[]
  badge?: string
  to?: string
}>(), {
  imageAlt: '',
  tags: () => [],
  badge: '',
  to: ''
})
</script>
