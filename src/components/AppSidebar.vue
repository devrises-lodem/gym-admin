<template>
  <!-- Mobile overlay -->
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="$emit('close')"
    />
  </Transition>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed top-0 left-0 h-full z-50 w-72 flex flex-col',
      'bg-background-dark border-r border-primary/20',
      'transform transition-transform duration-300 ease-in-out',
      'lg:translate-x-0 lg:static lg:z-auto',
      isOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <!-- Logo -->
    <div class="flex items-center justify-between px-6 py-5 border-b border-primary/20 shrink-0">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span class="text-slate-900 font-bold text-sm">G</span>
        </div>
        <span class="text-white font-bold text-lg tracking-tight">GYM Admin</span>
      </div>
      <button
        class="lg:hidden text-slate-400 hover:text-white transition-colors"
        @click="$emit('close')"
      >
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-1">
      <RouterLink
        v-for="route in appRoutes"
        :key="route.path"
        :to="route.path"
        class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
        :class="[
          route.path === currentPath
            ? 'bg-primary text-slate-900'
            : 'text-slate-400 hover:text-white hover:bg-slate-800',
        ]"
        @click="$emit('close')"
      >
        <span class="material-symbols-outlined text-xl">{{ route.icon }}</span>
        <span>{{ route.label }}</span>
      </RouterLink>
    </nav>

    <!-- Footer -->
    <div class="px-6 py-4 border-t border-primary/20 shrink-0">
      <p class="text-xs text-slate-600">GYM Admin · Fitness Management</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { appRoutes } from '@/router'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  close: []
}>()

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
