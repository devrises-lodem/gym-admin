<template>
  <div class="flex h-screen overflow-hidden bg-background-dark">
    <AppSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />

    <div class="flex-1 flex flex-col overflow-hidden">
      <AppTopBar @menu-click="sidebarOpen = true" />

      <main class="flex-1 overflow-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'
import AppTopBar from '@/components/AppTopBar.vue'

const sidebarOpen = ref<boolean>(false)
</script>
