<template>
  <div class="flex gap-4">
    <div class="relative shrink-0">
      <div class="size-8 rounded-full flex items-center justify-center"
        :class="iconBgClass">
        <span class="material-symbols-outlined text-sm" :class="iconClass">{{ icon }}</span>
      </div>
      <div v-if="showConnector"
        class="absolute -bottom-4 left-1/2 w-[1px] h-6 bg-slate-200 dark:bg-slate-800"></div>
    </div>
    <div>
      <p class="text-sm">
        <span v-if="boldTitle" class="font-bold">{{ boldTitle }}</span>
        {{ description }}
      </p>
      <p class="text-xs text-slate-500" :class="timestampClass">{{ timestamp }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  iconBgClass?: string
  iconClass?: string
  boldTitle?: string
  description: string
  timestamp: string
  timestampClass?: string
  showConnector?: boolean
}>(), {
  iconBgClass: 'bg-primary/20',
  iconClass: 'text-primary',
  boldTitle: '',
  timestampClass: '',
  showConnector: false
})
</script>
