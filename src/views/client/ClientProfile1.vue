<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header
        class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 bg-background-light dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
            <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
              <span class="material-symbols-outlined">exercise</span>
            </div>
            <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">FitPro Manager</h2>
          </div>
          <label class="flex flex-col min-w-40 h-10 max-w-64">
            <div class="flex w-full flex-1 items-stretch rounded-lg h-full bg-primary/10">
              <div class="text-primary flex items-center justify-center pl-4 rounded-l-lg" data-icon="search">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input
                class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-primary/60 px-4 text-base font-normal"
                placeholder="Search clients..." value="" />
            </div>
          </label>
        </div>
        <div class="flex flex-1 justify-end gap-8">
          <nav class="flex items-center gap-9">
            <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Clients</a>
            <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Workouts</a>
            <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Templates</a>
            <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Calendar</a>
          </nav>
          <div class="flex gap-2">
            <button
              class="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-slate-900 dark:text-slate-100 hover:bg-primary/20">
              <span class="material-symbols-outlined">notifications</span>
            </button>
            <button
              class="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-slate-900 dark:text-slate-100 hover:bg-primary/20">
              <span class="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
            data-alt="Trainer profile picture"
            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOY2NnzG4tDI6JRM8hik0eUEBcBil9ivh0uI9hcg9KlOQt-6LFgVbZn-pLxkqzlqIPCyZrIIJMYNH2d5pwSzwDESrw_jc58GdZ09fuG1AlDyM8GV4AWwDb6eOfcdr2nEROnkOfsIBjyDLgF7gJyPJN8820cUlOWt2vWtkMtf7_UBik0HmgCD1FycC_ZENj8Y1oZv-czV5HB0A6rAnXKUQflKxDY8ykj1WbixgKCqWwzqy95SB2X7Fw3TFeCLCuZxVaJEzTLTV3nb4");'>
          </div>
        </div>
      </header>
      <main class="flex-1 flex px-10 py-8 gap-8">

        <div class="flex-1 flex flex-col gap-8">
          <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
              <div class="flex justify-between items-start mb-2">
                <p class="text-slate-500 text-sm font-medium">Current Weight</p>
                <span class="material-symbols-outlined text-red-500 text-sm">trending_down</span>
              </div>
              <p class="text-2xl font-bold">185.4 lbs</p>
              <p class="text-xs text-red-500 mt-1">-2.1 lbs this month</p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
              <div class="flex justify-between items-start mb-2">
                <p class="text-slate-500 text-sm font-medium">Body Fat</p>
                <span class="material-symbols-outlined text-primary text-sm">trending_down</span>
              </div>
              <p class="text-2xl font-bold">17.2 %</p>
              <p class="text-xs text-primary mt-1">-0.8% since start</p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
              <div class="flex justify-between items-start mb-2">
                <p class="text-slate-500 text-sm font-medium">Consistency</p>
                <span class="material-symbols-outlined text-primary text-sm">verified</span>
              </div>
              <p class="text-2xl font-bold">94 %</p>
              <p class="text-xs text-primary mt-1">+5% from last week</p>
            </div>
          </section>
          <section class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
            <div class="flex justify-between items-center mb-6">
              <div>
                <h3 class="text-lg font-bold">Progress Chart</h3>
                <p class="text-sm text-slate-500">Weight &amp; Strength Volume (Last 30 Days)</p>
              </div>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-xs font-bold rounded-lg bg-primary/10 text-primary">Weight</button>
                <button
                  class="px-3 py-1 text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors">Volume</button>
              </div>
            </div>
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
          </section>
          <section class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-lg font-bold">Assign Routine</h3>
              <div class="flex gap-4">
                <div class="flex items-center gap-2 border border-primary/20 rounded-lg px-3 py-1.5">
                  <span class="material-symbols-outlined text-sm text-primary">calendar_today</span>
                  <span class="text-xs font-medium">Feb 15 - Feb 21</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h4 class="text-sm font-bold mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">content_paste</span>
                  Workout Templates
                </h4>
                <div class="flex flex-col gap-3">
                  <div
                    class="group flex items-center justify-between p-4 rounded-xl border border-primary/10 hover:border-primary/40 bg-primary/5 cursor-pointer transition-all">
                    <div>
                      <p class="font-bold text-sm">Hypertrophy - Upper Focus</p>
                      <p class="text-xs text-slate-500">60 min • 8 Exercises • Intermediate</p>
                    </div>
                    <button
                      class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">add_circle</button>
                  </div>
                  <div
                    class="group flex items-center justify-between p-4 rounded-xl border border-primary/10 hover:border-primary/40 bg-primary/5 cursor-pointer transition-all">
                    <div>
                      <p class="font-bold text-sm">Strength - Squat Heavy</p>
                      <p class="text-xs text-slate-500">75 min • 5 Exercises • Advanced</p>
                    </div>
                    <button
                      class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">add_circle</button>
                  </div>
                  <div
                    class="group flex items-center justify-between p-4 rounded-xl border border-primary/10 hover:border-primary/40 bg-primary/5 cursor-pointer transition-all">
                    <div>
                      <p class="font-bold text-sm">Full Body Conditioning</p>
                      <p class="text-xs text-slate-500">45 min • 12 Exercises • Beginner</p>
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
                  <div
                    class="flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border-l-4 border-primary">
                    <div class="flex flex-col items-center justify-center min-w-[40px]">
                      <span class="text-[10px] font-bold text-slate-400">MON</span>
                      <span class="text-lg font-bold">15</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-xs font-bold">Hypertrophy - Upper Focus</p>
                      <p class="text-[10px] text-slate-500">Assigned by Trainer</p>
                    </div>
                    <button class="material-symbols-outlined text-slate-400 hover:text-red-500 text-sm">close</button>
                  </div>
                  <div
                    class="flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border-l-4 border-primary">
                    <div class="flex flex-col items-center justify-center min-w-[40px]">
                      <span class="text-[10px] font-bold text-slate-400">WED</span>
                      <span class="text-lg font-bold">17</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-xs font-bold">Leg Power - Max Strength</p>
                      <p class="text-[10px] text-slate-500">Custom Modification</p>
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
          </section>
          <section class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
            <h3 class="text-lg font-bold mb-6">Recent Activity</h3>
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="size-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-primary text-sm">check_circle</span>
                </div>
                <div>
                  <p class="text-sm"><span class="font-bold">Completed Workout:</span> Pull Day Hypertrophy</p>
                  <p class="text-xs text-slate-500">2 hours ago • Duration: 58m • Volume: 12,450 lbs</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="size-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-blue-500 text-sm">scale</span>
                </div>
                <div>
                  <p class="text-sm"><span class="font-bold">Logged Weight:</span> 185.4 lbs</p>
                  <p class="text-xs text-slate-500">6 hours ago • New personal low</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="size-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-amber-500 text-sm">comment</span>
                </div>
                <div>
                  <p class="text-sm"><span class="font-bold">Workout Note:</span> "Feeling slight fatigue in right
                    shoulder during bench press."</p>
                  <p class="text-xs text-slate-500">Yesterday at 5:14 PM</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Client Profile
</script>
