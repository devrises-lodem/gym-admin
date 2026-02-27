<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <AppHeader
          title="FitPro Manager"
          header-class="border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark"
          :search-bg-class="'bg-slate-100 dark:bg-slate-800'"
          :search-icon-class="'text-slate-500 dark:text-slate-400'"
          :search-input-class="'text-base placeholder:text-slate-500'"
          search-placeholder="Search clients..."
          :show-actions="true"
          :nav-items="['Clients', 'Workouts', 'Nutrition', 'Reports', 'Settings']"
        />
        <main class="px-10 py-8 max-w-[1280px] mx-auto w-full">
          <PageHeader
            title="Client Progress &amp; Adherence"
            subtitle="Detailed performance tracking for Alex Thompson (Last 30 Days)"
            :breadcrumbs="[{ label: 'Clients', href: '#' }, { label: 'Alex Thompson - Progress Report' }]"
          >
            <template #actions>
              <button
                class="flex items-center justify-center rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold gap-2">
                <span class="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Last 30 Days</span>
              </button>
              <button
                class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold gap-2">
                <span class="material-symbols-outlined text-[18px]">download</span>
                <span>Export PDF Report</span>
              </button>
            </template>
          </PageHeader>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              label="Overall Adherence"
              value="92.4%"
              badge="+2.5%"
              badgeClass="bg-primary/20 text-primary"
              :progress="92.4"
              borderClass="border-slate-200 dark:border-slate-800"
              valueClass="text-3xl"
            />
            <StatsCard
              label="Workouts Completed"
              value="18/20"
              badge="-5%"
              badgeClass="bg-red-500/20 text-red-500"
              subtitle="Target: 5 workouts per week"
              subtitleClass="text-slate-400"
              borderClass="border-slate-200 dark:border-slate-800"
              valueClass="text-3xl"
            />
            <StatsCard
              label="Weight Change"
              value="-4.5 lbs"
              badge="-3.2 lbs"
              badgeClass="bg-primary/20 text-primary"
              subtitle="Current: 182.5 lbs | Initial: 187.0 lbs"
              subtitleClass="text-slate-400"
              borderClass="border-slate-200 dark:border-slate-800"
              valueClass="text-3xl"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div
              class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold">Weight &amp; Body Fat Evolution</h3>
                <div class="flex gap-4 text-xs">
                  <div class="flex items-center gap-1">
                    <div class="size-2 rounded-full bg-primary"></div> Weight (lbs)
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="size-2 rounded-full bg-blue-400"></div> Body Fat %
                  </div>
                </div>
              </div>
              <div
                class="h-64 flex items-end justify-between gap-2 px-2 border-b border-l border-slate-100 dark:border-slate-800">
                <div class="flex-1 bg-primary/40 h-[90%] rounded-t relative group"></div>
                <div class="flex-1 bg-primary/45 h-[85%] rounded-t relative group"></div>
                <div class="flex-1 bg-primary/50 h-[82%] rounded-t relative group"></div>
                <div class="flex-1 bg-primary/55 h-[80%] rounded-t relative group"></div>
                <div class="flex-1 bg-primary/60 h-[78%] rounded-t relative group"></div>
                <div class="flex-1 bg-primary/70 h-[75%] rounded-t relative group"></div>
                <div class="flex-1 bg-primary/80 h-[72%] rounded-t relative group"></div>
                <div class="flex-1 bg-primary h-[70%] rounded-t relative group"></div>
              </div>
              <div class="flex justify-between mt-2 text-[10px] text-slate-400 px-2 uppercase tracking-wider font-bold">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
            <div
              class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold">Caloric Adherence vs. Target</h3>
                <span class="text-xs text-slate-500">Target: 2,400 kcal</span>
              </div>
              <div class="space-y-4">
                <ProgressBar
                  v-for="day in caloricData"
                  :key="day.label"
                  :label="day.label"
                  :displayValue="day.displayValue"
                  :value="day.value"
                  :max="day.max"
                  :showValue="true"
                  :barClass="day.barClass"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div
              class="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold">Adherence Heatmap</h3>
                <div class="flex items-center gap-2 text-xs">
                  <span>Less</span>
                  <div class="flex gap-1">
                    <div class="size-3 bg-slate-100 dark:bg-slate-800 rounded-sm"></div>
                    <div class="size-3 bg-primary/30 rounded-sm"></div>
                    <div class="size-3 bg-primary/60 rounded-sm"></div>
                    <div class="size-3 bg-primary rounded-sm"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
              <div class="grid grid-cols-7 gap-2">
                <div v-for="day in heatmapDays" :key="day.num"
                  class="aspect-square rounded-lg flex items-center justify-center text-[10px]"
                  :class="[day.bgClass, day.fontClass]">
                  {{ day.num }}
                </div>
              </div>
            </div>
            <div
              class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 class="text-lg font-bold mb-6">Training Performance (1RM)</h3>
              <div class="space-y-6">
                <div v-for="lift in liftData" :key="lift.name" class="flex items-center gap-4">
                  <div class="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary">fitness_center</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-bold uppercase">{{ lift.name }}</span>
                      <span class="text-sm text-primary font-bold">{{ lift.change }}</span>
                    </div>
                    <div class="text-xs text-slate-500">Current: {{ lift.current }} | Initial: {{ lift.initial }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="material-symbols-outlined text-primary">edit_note</span>
              <h3 class="text-lg font-bold">Trainer Feedback &amp; Notes</h3>
            </div>
            <textarea
              class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 min-h-[120px] text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary"
              placeholder="Type your observation and feedback here..."></textarea>
            <div class="flex justify-end mt-4">
              <button
                class="bg-primary text-background-dark px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">Save
                Notes</button>
            </div>
            <div class="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p class="text-xs text-slate-500 font-medium mb-4 uppercase tracking-wider">Previous Notes</p>
              <div class="space-y-4">
                <div v-for="note in previousNotes" :key="note.date" class="flex gap-4">
                  <div class="min-w-[100px] text-xs font-bold text-slate-400">{{ note.date }}</div>
                  <p class="text-sm text-slate-700 dark:text-slate-300">{{ note.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import StatsCard from '@/components/ui/StatsCard.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'

const caloricData = [
  { label: 'Monday', displayValue: '2,350 kcal', value: 2350, max: 2400, barClass: 'bg-primary' },
  { label: 'Tuesday', displayValue: '2,450 kcal', value: 2450, max: 2400, barClass: 'bg-primary' },
  { label: 'Wednesday', displayValue: '2,800 kcal', value: 2800, max: 2400, barClass: 'bg-orange-400' },
  { label: 'Thursday', displayValue: '2,380 kcal', value: 2380, max: 2400, barClass: 'bg-primary' },
  { label: 'Friday', displayValue: '2,410 kcal', value: 2410, max: 2400, barClass: 'bg-primary' }
]

const heatmapDays = [
  { num: 1, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 2, bgClass: 'bg-primary/80', fontClass: 'font-bold' },
  { num: 3, bgClass: 'bg-slate-100 dark:bg-slate-800', fontClass: '' },
  { num: 4, bgClass: 'bg-primary/60', fontClass: 'font-bold' },
  { num: 5, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 6, bgClass: 'bg-primary/40', fontClass: 'font-bold' },
  { num: 7, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 8, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 9, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 10, bgClass: 'bg-slate-100 dark:bg-slate-800', fontClass: '' },
  { num: 11, bgClass: 'bg-primary/80', fontClass: 'font-bold' },
  { num: 12, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 13, bgClass: 'bg-primary/60', fontClass: 'font-bold' },
  { num: 14, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 15, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 16, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 17, bgClass: 'bg-slate-100 dark:bg-slate-800', fontClass: '' },
  { num: 18, bgClass: 'bg-primary/40', fontClass: 'font-bold' },
  { num: 19, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 20, bgClass: 'bg-primary/80', fontClass: 'font-bold' },
  { num: 21, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 22, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 23, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 24, bgClass: 'bg-slate-100 dark:bg-slate-800', fontClass: '' },
  { num: 25, bgClass: 'bg-primary/80', fontClass: 'font-bold' },
  { num: 26, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 27, bgClass: 'bg-primary', fontClass: 'font-bold' },
  { num: 28, bgClass: 'bg-primary/60', fontClass: 'font-bold' }
]

const liftData = [
  { name: 'Back Squat', change: '+15 lbs', current: '285 lbs', initial: '270 lbs' },
  { name: 'Bench Press', change: '+10 lbs', current: '215 lbs', initial: '205 lbs' },
  { name: 'Deadlift', change: '+25 lbs', current: '345 lbs', initial: '320 lbs' }
]

const previousNotes = [
  { date: 'OCT 14, 2023', text: 'Alex is showing great consistency in meal logging. Weight is dropping steadily. Need to watch recovery during week 4.' },
  { date: 'OCT 07, 2023', text: 'Strong performance in the squat sessions. Increased target weight for next block.' }
]
</script>
