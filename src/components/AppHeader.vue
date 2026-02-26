<template>
  <header
    class="flex items-center justify-between whitespace-nowrap border-b border-solid bg-background-light dark:bg-background-dark px-10 py-3 sticky top-0 z-50"
    :class="headerClass">
    <div class="flex items-center gap-8">
      <div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
        <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
          <span class="material-symbols-outlined">exercise</span>
        </div>
        <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">{{ title }}</h2>
      </div>
      <label v-if="showSearch" class="flex flex-col min-w-40 h-10" :class="searchClass">
        <div class="flex w-full flex-1 items-stretch rounded-lg h-full" :class="searchBgClass">
          <div class="flex items-center justify-center pl-4 rounded-l-lg" :class="searchIconClass" data-icon="search">
            <span class="material-symbols-outlined">search</span>
          </div>
          <input
            class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full px-4 text-base font-normal"
            :class="searchInputClass"
            :placeholder="searchPlaceholder" value="" />
        </div>
      </label>
    </div>
    <div class="flex flex-1 justify-end gap-8 items-center">
      <nav v-if="showNav" class="flex items-center gap-9" :class="navClass">
        <a v-for="item in navItems" :key="item" class="text-sm font-medium hover:text-primary transition-colors" href="#">{{ item }}</a>
      </nav>
      <div v-if="showActions" class="flex gap-2">
        <button
          class="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-slate-900 dark:text-slate-100 hover:bg-primary/20">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <button
          class="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-slate-900 dark:text-slate-100 hover:bg-primary/20">
          <span class="material-symbols-outlined">settings</span>
        </button>
      </div>
      <div class="flex items-center gap-3" v-if="showProfile">
        <button v-if="showActionButton" @click="$emit('action-click')"
          class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold hover:opacity-90 transition-opacity">
          <span class="material-symbols-outlined text-lg" v-if="actionIcon">{{ actionIcon }}</span>
          <span class="ml-1" v-if="actionText">{{ actionText }}</span>
        </button>
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
          data-alt="Trainer profile picture"
          :style="`background-image: url('${profileImage}')`">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  headerClass?: string
  showSearch?: boolean
  searchClass?: string
  searchBgClass?: string
  searchIconClass?: string
  searchInputClass?: string
  searchPlaceholder?: string
  showNav?: boolean
  navClass?: string
  navItems?: string[]
  showActions?: boolean
  showProfile?: boolean
  profileImage?: string
  showActionButton?: boolean
  actionText?: string
  actionIcon?: string
}>(), {
  title: 'FitPro Manager',
  headerClass: 'border-primary/20',
  showSearch: true,
  searchClass: 'max-w-64',
  searchBgClass: 'bg-primary/10',
  searchIconClass: 'text-primary',
  searchInputClass: 'placeholder:text-primary/60',
  searchPlaceholder: 'Search...',
  showNav: true,
  navClass: '',
  navItems: () => ['Clients', 'Workouts', 'Templates', 'Calendar'],
  showActions: true,
  showProfile: true,
  profileImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOY2NnzG4tDI6JRM8hik0eUEBcBil9ivh0uI9hcg9KlOQt-6LFgVbZn-pLxkqzlqIPCyZrIIJMYNH2d5pwSzwDESrw_jc58GdZ09fuG1AlDyM8GV4AWwDb6eOfcdr2nEROnkOfsIBjyDLgF7gJyPJN8820cUlOWt2vWtkMtf7_UBik0HmgCD1FycC_ZENj8Y1oZv-czV5HB0A6rAnXKUQflKxDY8ykj1WbixgKCqWwzqy95SB2X7Fw3TFeCLCuZxVaJEzTLTV3nb4',
  showActionButton: false,
  actionText: '',
  actionIcon: ''
})

defineEmits<{
  'action-click': []
}>()
</script>
