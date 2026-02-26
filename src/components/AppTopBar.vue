<template>
  <header
    class="sticky top-0 z-30 bg-background-dark/90 backdrop-blur-md border-b border-primary/10
           px-4 py-3 flex items-center gap-4 lg:hidden"
  >
    <button class="text-slate-300 hover:text-white transition-colors" @click="$emit('menu-click')">
      <span class="material-symbols-outlined">menu</span>
    </button>
    <span class="text-black font-semibold">{{ currentLabel }}</span>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { appRoutes } from '@/router'

defineEmits<{
  'menu-click': []
}>()

const route = useRoute()
const currentLabel = computed(
  () => appRoutes.find((r) => r.path === route.path)?.label ?? 'GYM Admin',
)
</script>
