<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <AppHeader
      title="FitBiz Pro"
      header-class="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md"
      :search-bg-class="'bg-slate-100 dark:bg-slate-800'"
      :search-icon-class="'text-slate-400'"
      :search-input-class="'text-sm rounded-full'"
      search-placeholder="Search clients..."
      :nav-class="'hidden md:flex'"
      :nav-items="['Dashboard', 'Clients', 'Programs', 'Revenue']"
      :profile-image="profileImage"
    />
    <main class="max-w-[1440px] mx-auto px-6 py-8">
      <PageHeader
        title="Business Analytics"
        subtitle="Reviewing your fitness empire's performance for Oct 2023."
        titleClass="text-3xl"
      >
        <template #actions>
          <button
            class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <span class="material-symbols-outlined text-sm">calendar_today</span>
            Last 30 Days
          </button>
          <button
            class="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined text-sm">download</span>
            Export Report
          </button>
        </template>
      </PageHeader>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          v-for="stat in statsData"
          :key="stat.label"
          :label="stat.label"
          :value="stat.value"
          :icon="stat.icon"
          :iconBgClass="stat.iconBgClass"
          :iconColorClass="stat.iconColorClass"
          :badge="stat.badge"
          :badgeClass="stat.badgeClass"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <!-- Client Growth Chart -->
          <div
            class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <h4 class="text-lg font-bold">Client Growth &amp; Retention</h4>
              <div class="flex gap-4">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-primary"></span>
                  <span class="text-xs text-slate-500">New Clients</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-slate-300"></span>
                  <span class="text-xs text-slate-500">Retention</span>
                </div>
              </div>
            </div>
            <div class="h-64 relative">
              <svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 200">
                <defs>
                  <lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="#19e66f" stop-opacity="0.3"></stop>
                    <stop offset="100%" stop-color="#19e66f" stop-opacity="0"></stop>
                  </lineargradient>
                </defs>
                <path d="M0 160 Q 133 140 266 100 T 533 110 T 800 40 L 800 200 L 0 200 Z" fill="url(#gradient)"></path>
                <path d="M0 160 Q 133 140 266 100 T 533 110 T 800 40" fill="none" stroke="#19e66f" stroke-width="3">
                </path>
                <circle cx="266" cy="100" fill="#19e66f" r="5"></circle>
                <circle cx="800" cy="40" fill="#19e66f" r="5"></circle>
              </svg>
              <div class="flex justify-between mt-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
                <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
              </div>
            </div>
          </div>

          <!-- Engagement Leaderboard -->
          <SectionCard title="Engagement Score Leaderboard" headerClass="p-6 pb-0 mb-6"
            contentClass="p-6 pt-0" borderClass="border-slate-200 dark:border-slate-800">
            <template #header-actions>
              <button class="text-primary text-sm font-semibold hover:underline">View All</button>
            </template>
            <div class="space-y-4">
              <div v-for="client in leaderboard" :key="client.name"
                class="flex items-center justify-between p-3 rounded-lg"
                :class="client.containerClass">
                <div class="flex items-center gap-3">
                  <img class="w-10 h-10 rounded-full" :class="client.imgClass" :data-alt="client.alt" :src="client.img" />
                  <div>
                    <p class="font-bold text-sm">{{ client.name }}</p>
                    <p class="text-xs text-slate-500" :class="client.subtitleClass">{{ client.program }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <div class="flex items-center gap-1" :class="client.scoreClass">
                    <span class="material-symbols-outlined text-sm">{{ client.trendIcon }}</span>
                    <span class="text-sm font-black">{{ client.score }}</span>
                  </div>
                  <p class="text-[10px]" :class="client.metaClass">{{ client.meta }}</p>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div class="lg:col-span-1 space-y-8">
          <!-- Muscle Group Focus (unique chart, kept inline) -->
          <div
            class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 class="text-lg font-bold mb-6">Muscle Group Focus</h4>
            <div class="flex justify-center py-6 relative">
              <div
                class="w-48 h-48 rounded-full border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-40 h-40 transform -rotate-90">
                    <circle class="text-slate-100 dark:text-slate-800" cx="80" cy="80" fill="transparent" r="70"
                      stroke="currentColor" stroke-width="12"></circle>
                    <circle class="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor"
                      stroke-dasharray="440" stroke-dashoffset="110" stroke-width="12"></circle>
                  </svg>
                </div>
                <div class="text-center z-10">
                  <span class="text-3xl font-black block">Legs</span>
                  <span class="text-xs text-slate-500">45% Priority</span>
                </div>
              </div>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-2">
              <div v-for="muscle in muscleGroups" :key="muscle.label" class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full" :class="muscle.dotClass"></span>
                <span class="text-xs font-medium">{{ muscle.label }}</span>
              </div>
            </div>
          </div>

          <!-- Recent Milestones -->
          <SectionCard title="Recent Milestones" headerClass="p-6 pb-0 mb-6"
            contentClass="p-6 pt-0" borderClass="border-slate-200 dark:border-slate-800">
            <div class="space-y-6">
              <ActivityItem
                v-for="(milestone, idx) in milestones"
                :key="milestone.title"
                :icon="milestone.icon"
                :iconBgClass="milestone.iconBgClass"
                :iconClass="milestone.iconClass"
                :boldTitle="milestone.title"
                :description="milestone.description"
                :timestamp="milestone.timestamp"
                :showConnector="idx < milestones.length - 1"
              />
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
    <AppFooter appName="FitBiz Analytics Platform" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import StatsCard from '@/components/ui/StatsCard.vue'
import SectionCard from '@/components/ui/SectionCard.vue'
import ActivityItem from '@/components/ui/ActivityItem.vue'

const profileImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOY2NnzG4tDI6JRM8hik0eUEBcBil9ivh0uI9hcg9KlOQt-6LFgVbZn-pLxkqzlqIPCyZrIIJMYNH2d5pwSzwDESrw_jc58GdZ09fuG1AlDyM8GV4AWwDb6eOfcdr2nEROnkOfsIBjyDLgF7gJyPJN8820cUlOWt2vWtkMtf7_UBik0HmgCD1FycC_ZENj8Y1oZv-czV5HB0A6rAnXKUQflKxDY8ykj1WbixgKCqWwzqy95SB2X7Fw3TFeCLCuZxVaJEzTLTV3nb4'

const statsData = [
  { label: 'Total Clients', value: '124', icon: 'groups', iconBgClass: 'bg-blue-50 dark:bg-blue-900/20', iconColorClass: 'text-blue-500', badge: '+5.2%', badgeClass: 'text-primary bg-primary/10' },
  { label: 'Active Subscriptions', value: '98', icon: 'autorenew', iconBgClass: 'bg-primary/10', iconColorClass: 'text-primary', badge: '+2.1%', badgeClass: 'text-primary bg-primary/10' },
  { label: 'Monthly Revenue', value: '$12,450', icon: 'payments', iconBgClass: 'bg-emerald-50 dark:bg-emerald-900/20', iconColorClass: 'text-emerald-500', badge: '+12.4%', badgeClass: 'text-primary bg-primary/10' },
  { label: 'Avg. Client Adherence', value: '88.4%', icon: 'task_alt', iconBgClass: 'bg-orange-50 dark:bg-orange-900/20', iconColorClass: 'text-orange-500', badge: '-0.8%', badgeClass: 'text-red-500 bg-red-100 dark:bg-red-900/20' }
]

const leaderboard = [
  {
    name: 'Sarah Jenkins', program: 'Powerlifting Phase 2', score: '98', trendIcon: 'trending_up',
    meta: 'Streak: 24 Days', alt: 'Portrait of Sarah J.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArysIMVXXNl-MFCyUtXW8ae5ELzRpoVHoCnFRPgLcZMfiA48TBgiQixXCkwntyw16_vB9qUdQz6BeaiQkU_PHnjdM_0U09oFHg2vbWAnuSt4uTGoxXcubkY9hn4MeksQ-Ymi7Ja2PkdG_SV3o8Uf-aVk49PS4oTiMj7hV1qaLwVkYNFtG0gDsfaeuZQuxK2smfhzMkqEh6HY3hrl0ana9XK4Vsi1t9du2YgQFw9vbo-DdFXax0XcUceVg8gj_Uoh-OKV2o7zFDBu0',
    containerClass: 'bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800',
    imgClass: '', subtitleClass: '', scoreClass: 'text-primary', metaClass: 'text-slate-400'
  },
  {
    name: 'Mike Ross', program: 'Fat Loss & Mobility', score: '92', trendIcon: 'trending_up',
    meta: 'Streak: 12 Days', alt: 'Portrait of Mike R.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcZ-LnxFhpk7HgA4I_PJh-Ta8Jq164VrvVm47PBbdxATp6n5H58IbCrWX8PnxpFzWtCqTwBMX_3h36_I8iwjimE0hL1pNNwYMbfx3L1XtAEGfks_LS4FOxQWnrPPEtBXrWMkImxcBBn628CfwTxisZMltlPNAnG4s7QM5GOkQlRGw4PxOYB04040iv-c8EGJvAbLQk_bgaUW5KgyfDktbZHbz4yJCbFXLQFQhc6xghyvF0HSmaXzTryy3zDpElE9QHmTu3_I52Xsg',
    containerClass: 'bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800',
    imgClass: '', subtitleClass: '', scoreClass: 'text-primary', metaClass: 'text-slate-400'
  },
  {
    name: 'Alex Murphy', program: 'Inactive 5+ days', score: '42', trendIcon: 'trending_down',
    meta: 'Churn Risk', alt: 'Portrait of Alex M.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmnuOkq48tK-CDV_jjtQw4-LT3YX8sxtP6_vd-WegSkChrwRBTdu9W2fmfhZjuSeNIH_s2x2K8AKnvjbwaAUBR9t7_lZ-oolPGM89p64PsNsYP-TxyzaScFlJ50h774QnROdES_eEEMtxM0gOVvIhqkAEjwbpEo9qVmL10lBdixoCQgTo9qnAY1YMTMdoJIWrvmKefHITUnnV7tI3nrzfdtyp1B-rcpvd-ovZ7KhNXaPaTcd3g-w7FLBPGX4Q1d3PjRhZr_9WuEnU',
    containerClass: 'border border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-900/10',
    imgClass: 'opacity-70', subtitleClass: 'italic', scoreClass: 'text-red-500', metaClass: 'text-red-500 font-bold uppercase tracking-tighter'
  }
]

const muscleGroups = [
  { label: 'Legs (45%)', dotClass: 'bg-primary' },
  { label: 'Back (20%)', dotClass: 'bg-primary/60' },
  { label: 'Chest (20%)', dotClass: 'bg-primary/40' },
  { label: 'Arms (15%)', dotClass: 'bg-primary/20' }
]

const milestones = [
  { icon: 'workspace_premium', iconBgClass: 'bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30', iconClass: 'text-amber-500', title: 'New Squat 1RM', description: 'David G. reached 140kg (Personal Best)', timestamp: '2 hours ago' },
  { icon: 'event_available', iconBgClass: 'bg-primary/10 border border-primary/20', iconClass: 'text-primary', title: 'Consistency Streak', description: 'Emily W. completed 30 days of workouts!', timestamp: '5 hours ago' },
  { icon: 'fitness_center', iconBgClass: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30', iconClass: 'text-blue-500', title: 'Body Fat Milestone', description: 'James L. reached sub-15% body fat goal.', timestamp: 'Yesterday' }
]
</script>
