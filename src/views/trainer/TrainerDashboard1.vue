<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="flex h-screen overflow-hidden text-slate-900 dark:text-slate-100">

      <main class="flex-1 overflow-y-auto custom-scrollbar bg-background-light dark:bg-background-dark px-8 py-10">
        <header class="flex flex-wrap justify-between items-center gap-4 mb-10">
          <div class="flex items-center gap-6">
            <div class="flex flex-col gap-1">
              <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                {{ $t('dashboard.nutrition_tracking') }}</h1>
              <div class="flex items-center gap-3 mt-1">
                <div
                  class="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg">
                  <img alt="Client" class="w-6 h-6 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPYkmgs1l7RPhUSb8PtXnNKMIJ5UuZE2zAvWcakf6mpnmtEUknJOuvxfsGdKzHwUMKjG4q9P45S9RZdrGebyo-tIkpmqEzsZWmvATAxFYw_U2BW2SACS9ZRvFVhMI80gwJf9Q-usQlebPtFjgacNZ17oRIwqYh9Z0Hws0kH2Blbs0uOIPo96rkNtC-ojsHmsgGxETeXa4UhEjjVt1B08QEQQYjPIG71D2NBYq5hrZGhRt9FfAsugI_pvjSfna-zTMkDhDHzs6HmU" />
                  <span class="text-sm font-semibold">John Doe</span>
                  <span class="material-symbols-outlined text-slate-400 text-sm">keyboard_arrow_down</span>
                </div>
                <span class="text-slate-400 text-sm">•</span>
                <p class="text-slate-500 dark:text-slate-400 text-sm">{{ $t('common.target') }}: Weight Loss (Phase 1)</p>
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <button
              class="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <span class="material-symbols-outlined">print</span>
              <span>{{ $t('dashboard.export_pdf') }}</span>
            </button>
            <button
              class="px-5 py-2.5 bg-primary/20 text-slate-900 dark:text-primary font-bold rounded-lg flex items-center gap-2 hover:bg-primary/30 transition-colors border border-primary/20">
              <span class="material-symbols-outlined">restaurant_menu</span>
              <span>{{ $t('dashboard.meal_template') }}</span>
            </button>
          </div>
        </header>

        <section class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatsCard
            v-for="macro in macroData"
            :key="macro.label"
            :label="macro.label"
            :value="macro.value"
            :subtitle="macro.target"
            subtitleClass="text-slate-500"
            :trendIcon="macro.icon"
            :trendIconClass="macro.iconClass"
            :progress="macro.progress"
            :progressBarClass="macro.progressBarClass"
            borderClass="border-slate-200 dark:border-slate-800"
            valueClass="text-3xl"
          />
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 flex flex-col gap-6">
            <!-- Search Food -->
            <div
              class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <SearchInput
                :placeholder="$t('dashboard.search_food')"
                bgClass="bg-slate-50 dark:bg-slate-800"
                paddingClass="pl-12 pr-4 py-3"
                inputClass="text-sm focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all"
                iconClass="text-slate-400"
                iconWrapperClass="pl-4"
              />
              <div class="flex gap-2 mt-4">
                <span v-for="tag in quickTags" :key="tag"
                  class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium cursor-pointer hover:bg-primary/20 transition-colors">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Today's Log (unique UI, kept mostly inline) -->
            <div
              class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <h2 class="text-lg font-bold">Today's Log</h2>
                <div class="flex gap-2">
                  <button class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><span
                      class="material-symbols-outlined">chevron_left</span></button>
                  <span class="text-sm font-semibold self-center">Tuesday, Oct 24</span>
                  <button class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><span
                      class="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>
              <div class="flex flex-col">
                <div v-for="meal in meals" :key="meal.name"
                  class="p-6 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-primary">{{ meal.icon }}</span>
                      <h3 class="font-bold">{{ meal.name }}</h3>
                      <span class="text-xs text-slate-400 ml-2">{{ meal.summary }}</span>
                    </div>
                    <button class="text-primary hover:text-primary/80"><span
                        class="material-symbols-outlined">add_circle</span></button>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div v-for="item in meal.items" :key="item.name"
                      class="flex items-center justify-between text-sm group">
                      <div class="flex flex-col">
                        <span class="font-medium">{{ item.name }}</span>
                        <span class="text-xs text-slate-500">{{ item.portion }}</span>
                      </div>
                      <div class="flex items-center gap-4">
                        <span class="font-medium">{{ item.calories }}</span>
                        <button
                          class="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><span
                            class="material-symbols-outlined text-sm">delete</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-6 bg-slate-50/50 dark:bg-slate-800/30">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-primary text-opacity-50">dinner_dining</span>
                      <h3 class="font-bold text-slate-400">Dinner (Not Logged)</h3>
                    </div>
                    <button class="text-primary"><span class="material-symbols-outlined">add_circle</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <!-- Calorie Adherence Chart -->
            <SectionCard title="Calorie Adherence" borderClass="border-slate-200 dark:border-slate-800">
              <template #header-actions>
                <span class="text-xs font-medium text-slate-400 uppercase tracking-widest">Last 7 Days</span>
              </template>
              <div class="flex items-end justify-between h-40 gap-2 px-2">
                <div v-for="bar in weeklyBars" :key="bar.label" class="flex flex-col items-center gap-2 flex-1">
                  <div class="w-full rounded-t-sm" :class="bar.barClass" :style="{ height: bar.height }"></div>
                  <span class="text-[10px] text-slate-400">{{ bar.label }}</span>
                </div>
              </div>
            </SectionCard>

            <!-- Weight Trend -->
            <div
              class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 class="font-bold mb-6 flex justify-between items-center">
                <span>Weight Trend</span>
                <span class="text-xs font-medium text-slate-400 uppercase tracking-widest">Current: 82.4kg</span>
              </h3>
              <div class="relative h-40 flex items-center justify-center">
                <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 100">
                  <path d="M0,80 Q50,70 100,50 T200,30" fill="none" stroke="#19e66f" stroke-width="3"></path>
                  <circle cx="100" cy="50" fill="#19e66f" r="4"></circle>
                </svg>
                <div class="absolute bottom-0 w-full flex justify-between text-[10px] text-slate-400 px-1">
                  <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <p class="text-[10px] text-slate-400 uppercase font-bold">Total Lost</p>
                  <p class="text-lg font-black text-primary">-4.2kg</p>
                </div>
                <div>
                  <p class="text-[10px] text-slate-400 uppercase font-bold">Body Fat %</p>
                  <p class="text-lg font-black text-slate-800 dark:text-slate-200">18.5%</p>
                </div>
              </div>
            </div>

            <!-- Coaching Note -->
            <div class="bg-primary/5 border border-primary/20 p-6 rounded-xl">
              <h3 class="font-bold mb-3 flex items-center gap-2 text-sm">
                <span class="material-symbols-outlined text-primary text-sm">sticky_note_2</span>
                Coaching Note
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 italic">"Increasing protein by 20g this week to help
                with satiety. Client reported feeling low energy on Wednesday, adjusted carb timing."</p>
              <button class="mt-4 text-xs font-bold text-primary hover:underline uppercase tracking-wider">Update
                Note</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatsCard from '@/components/ui/StatsCard.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import SectionCard from '@/components/ui/SectionCard.vue'

const macroData = [
  { label: 'Calories', value: '1,850', target: '/ 2,200 kcal', icon: 'local_fire_department', iconClass: 'text-primary', progress: 84, progressBarClass: 'bg-primary' },
  { label: 'Proteins', value: '145g', target: '/ 180g', icon: 'egg', iconClass: 'text-blue-500', progress: 80, progressBarClass: 'bg-blue-500' },
  { label: 'Carbs', value: '160g', target: '/ 200g', icon: 'bakery_dining', iconClass: 'text-orange-500', progress: 80, progressBarClass: 'bg-orange-500' },
  { label: 'Fats', value: '48g', target: '/ 65g', icon: 'opacity', iconClass: 'text-yellow-500', progress: 73, progressBarClass: 'bg-yellow-500' }
]

const quickTags = ['Quick Add: Chicken Breast', 'Recent: Greek Yogurt', 'Template: High Protein Oats']

const meals = [
  {
    name: 'Breakfast', icon: 'wb_sunny', summary: '420 kcal • P: 32g, C: 45g, F: 12g',
    items: [
      { name: 'Oatmeal with Blueberries & Whey', portion: '1 bowl (350g)', calories: '350 kcal' },
      { name: 'Black Coffee', portion: '1 cup (250ml)', calories: '0 kcal' }
    ]
  },
  {
    name: 'Lunch', icon: 'lunch_dining', summary: '680 kcal • P: 55g, C: 60g, F: 18g',
    items: [
      { name: 'Grilled Chicken Breast & Quinoa', portion: '200g chicken, 150g quinoa', calories: '620 kcal' },
      { name: 'Mixed Green Salad', portion: '1 bowl with lemon dressing', calories: '60 kcal' }
    ]
  }
]

const weeklyBars = [
  { label: 'M', barClass: 'bg-primary', height: '90%' },
  { label: 'T', barClass: 'bg-primary', height: '100%' },
  { label: 'W', barClass: 'bg-red-400', height: '120%' },
  { label: 'T', barClass: 'bg-primary', height: '85%' },
  { label: 'F', barClass: 'bg-primary', height: '95%' },
  { label: 'S', barClass: 'bg-primary/40', height: '40%' },
  { label: 'S', barClass: 'bg-slate-100 dark:bg-slate-800', height: '0%' }
]
</script>
