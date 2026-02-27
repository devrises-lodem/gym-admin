<template>
  <footer class="mt-auto py-10 px-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
    <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-3">
        <div class="size-6 bg-primary rounded flex items-center justify-center text-[12px] font-bold text-background-dark">
          {{ appName.charAt(0) }}
        </div>
        <p class="text-slate-500 text-sm">© {{ currentYear }} {{ appName }}. All rights reserved.</p>
      </div>
      <div class="flex gap-8">
        <a v-for="link in links" :key="link.label"
          class="text-slate-400 hover:text-primary transition-colors text-sm"
          :href="link.href || '#'">
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface FooterLink {
  label: string
  href?: string
}

withDefaults(defineProps<{
  appName?: string
  links?: FooterLink[]
}>(), {
  appName: 'FitPro Manager',
  links: () => [
    { label: 'Terms of Service' },
    { label: 'Privacy Policy' },
    { label: 'Help Center' }
  ]
})

const currentYear = computed(() => new Date().getFullYear())
</script>
