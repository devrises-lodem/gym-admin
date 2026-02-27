<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <AppHeader />
      <main class="flex-1 flex px-10 py-8 gap-8">

        <div class="flex-1 flex flex-col gap-8">
          <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatsCard
              label="Current Weight"
              value="185.4 lbs"
              trendIcon="trending_down"
              trendIconClass="text-red-500"
              subtitle="-2.1 lbs this month"
              subtitleClass="text-red-500"
              borderClass="border-primary/10"
            />
            <StatsCard
              label="Body Fat"
              value="17.2 %"
              trendIcon="trending_down"
              trendIconClass="text-primary"
              subtitle="-0.8% since start"
              subtitleClass="text-primary"
              borderClass="border-primary/10"
            />
            <StatsCard
              label="Consistency"
              value="94 %"
              trendIcon="verified"
              trendIconClass="text-primary"
              subtitle="+5% from last week"
              subtitleClass="text-primary"
              borderClass="border-primary/10"
            />
          </section>

          <SectionCard title="Progress Chart" subtitle="Weight &amp; Strength Volume (Last 30 Days)"
            borderClass="border-primary/10">
            <template #header-actions>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-xs font-bold rounded-lg bg-primary/10 text-primary">Weight</button>
                <button
                  class="px-3 py-1 text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors">Volume</button>
              </div>
            </template>
            <div class="h-48 w-full flex items-end gap-2 px-2">
              <div class="flex-1 bg-primary/20 rounded-t-sm h-1/2"></div>
              <div class="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
              <div class="flex-1 bg-primary/30 rounded-t-sm h-[55%]"></div>
              <div class="flex-1 bg-primary/40 rounded-t-sm h-[70%]"></div>
              <div class="flex-1 bg-primary/50 rounded-t-sm h-[65%]"></div>
              <div class="flex-1 bg-primary/60 rounded-t-sm h-[80%]"></div>
              <div class="flex-1 bg-primary rounded-t-sm h-[75%]"></div>
              <div class="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
              <div class="flex-1 bg-primary/30 rounded-t-sm h-[85%]"></div>
              <div class="flex-1 bg-primary rounded-t-sm h-[90%]"></div>
              <div class="flex-1 bg-primary/40 rounded-t-sm h-[70%]"></div>
              <div class="flex-1 bg-primary/80 rounded-t-sm h-full"></div>
            </div>
            <div class="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <span>Jan 01</span>
              <span>Jan 10</span>
              <span>Jan 20</span>
              <span>Jan 30</span>
            </div>
          </SectionCard>

          <SectionCard title="Assign Routine" borderClass="border-primary/10">
            <template #header-actions>
              <div class="flex gap-4">
                <div class="flex items-center gap-2 border border-primary/20 rounded-lg px-3 py-1.5">
                  <span class="material-symbols-outlined text-sm text-primary">calendar_today</span>
                  <span class="text-xs font-medium">Feb 15 - Feb 21</span>
                </div>
              </div>
            </template>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h4 class="text-sm font-bold mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">content_paste</span>
                  Workout Templates
                </h4>
                <div class="flex flex-col gap-3">
                  <div v-for="template in workoutTemplates" :key="template.name"
                    class="group flex items-center justify-between p-4 rounded-xl border border-primary/10 hover:border-primary/40 bg-primary/5 cursor-pointer transition-all">
                    <div>
                      <p class="font-bold text-sm">{{ template.name }}</p>
                      <p class="text-xs text-slate-500">{{ template.details }}</p>
                    </div>
                    <button
                      class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">add_circle</button>
                  </div>
                </div>
                <button class="mt-4 text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                  <span class="material-symbols-outlined text-sm">list_alt</span>
                  Browse all templates
                </button>
              </div>
              <div class="bg-slate-50 dark:bg-background-dark/50 rounded-xl p-4 border border-dashed border-primary/30">
                <h4 class="text-sm font-bold mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">event_available</span>
                  Assigned for Week
                </h4>
                <div class="flex flex-col gap-3">
                  <div v-for="assigned in assignedWorkouts" :key="assigned.day"
                    class="flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border-l-4 border-primary">
                    <div class="flex flex-col items-center justify-center min-w-[40px]">
                      <span class="text-[10px] font-bold text-slate-400">{{ assigned.day }}</span>
                      <span class="text-lg font-bold">{{ assigned.date }}</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-xs font-bold">{{ assigned.name }}</p>
                      <p class="text-[10px] text-slate-500">{{ assigned.note }}</p>
                    </div>
                    <button class="material-symbols-outlined text-slate-400 hover:text-red-500 text-sm">close</button>
                  </div>
                  <div
                    class="flex items-center justify-center p-3 rounded-lg border border-dashed border-primary/20 bg-primary/5">
                    <p class="text-xs font-medium text-primary/60">+ Drop workout for Friday</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Recent Activity" borderClass="border-primary/10">
            <div class="space-y-6">
              <ActivityItem
                icon="check_circle"
                iconBgClass="bg-primary/20"
                iconClass="text-primary"
                boldTitle="Completed Workout:"
                description="Pull Day Hypertrophy"
                timestamp="2 hours ago • Duration: 58m • Volume: 12,450 lbs"
              />
              <ActivityItem
                icon="scale"
                iconBgClass="bg-blue-500/20"
                iconClass="text-blue-500"
                boldTitle="Logged Weight:"
                description="185.4 lbs"
                timestamp="6 hours ago • New personal low"
              />
              <ActivityItem
                icon="comment"
                iconBgClass="bg-amber-500/20"
                iconClass="text-amber-500"
                boldTitle="Workout Note:"
                description="&quot;Feeling slight fatigue in right shoulder during bench press.&quot;"
                timestamp="Yesterday at 5:14 PM"
              />
            </div>
          </SectionCard>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import StatsCard from '@/components/ui/StatsCard.vue'
import SectionCard from '@/components/ui/SectionCard.vue'
import ActivityItem from '@/components/ui/ActivityItem.vue'

const workoutTemplates = [
  { name: 'Hypertrophy - Upper Focus', details: '60 min • 8 Exercises • Intermediate' },
  { name: 'Strength - Squat Heavy', details: '75 min • 5 Exercises • Advanced' },
  { name: 'Full Body Conditioning', details: '45 min • 12 Exercises • Beginner' }
]

const assignedWorkouts = [
  { day: 'MON', date: '15', name: 'Hypertrophy - Upper Focus', note: 'Assigned by Trainer' },
  { day: 'WED', date: '17', name: 'Leg Power - Max Strength', note: 'Custom Modification' }
]
</script>
