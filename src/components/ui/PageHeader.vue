<template>
  <div>
    <!-- Breadcrumbs -->
    <div v-if="breadcrumbs.length" class="flex flex-wrap gap-2 mb-4">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <a v-if="crumb.href" class="text-primary text-sm font-medium hover:underline" :href="crumb.href">
          {{ crumb.label }}
        </a>
        <span v-else class="text-slate-900 dark:text-slate-100 text-sm font-medium">
          {{ crumb.label }}
        </span>
        <span v-if="index < breadcrumbs.length - 1" class="text-slate-400 text-sm">/</span>
      </template>
    </div>

    <!-- Title + Actions -->
    <div class="flex flex-wrap justify-between items-end gap-3" :class="wrapperClass">
      <div class="flex min-w-72 flex-col gap-1">
        <h1 class="text-slate-900 dark:text-slate-100 font-black leading-tight tracking-tight"
          :class="titleClass">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-slate-500 dark:text-slate-400 text-base font-normal">
          {{ subtitle }}
        </p>
      </div>
      <div class="flex gap-3">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface BreadcrumbItem {
  label: string
  href?: string
}

withDefaults(defineProps<{
  title: string
  subtitle?: string
  titleClass?: string
  wrapperClass?: string
  breadcrumbs?: BreadcrumbItem[]
}>(), {
  subtitle: '',
  titleClass: 'text-4xl',
  wrapperClass: 'mb-8',
  breadcrumbs: () => []
})
</script>
