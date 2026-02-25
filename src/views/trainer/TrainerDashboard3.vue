<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="flex h-screen overflow-hidden">

      <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
        <div class="px-8 py-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div class="flex flex-wrap justify-between items-center gap-6">
            <div class="flex items-center gap-6">
              <div class="relative">
                <div class="w-24 h-24 rounded-full border-4 border-primary/20 overflow-hidden">
                  <img alt="John Doe" class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPYkmgs1l7RPhUSb8PtXnNKMIJ5UuZE2zAvWcakf6mpnmtEUknJOuvxfsGdKzHwUMKjG4q9P45S9RZdrGebyo-tIkpmqEzsZWmvATAxFYw_U2BW2SACS9ZRvFVhMI80gwJf9Q-usQlebPtFjgacNZ17oRIwqYh9Z0Hws0kH2Blbs0uOIPo96rkNtC-ojsHmsgGxETeXa4UhEjjVt1B08QEQQYjPIG71D2NBYq5hrZGhRt9FfAsugI_pvjSfna-zTMkDhDHzs6HmU" />
                </div>
                <span
                  class="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
              </div>
              <div class="flex flex-col gap-1">
                <div class="flex items-center gap-3">
                  <h1 class="text-3xl font-black text-slate-900 dark:text-slate-100">John Doe</h1>
                  <span
                    class="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Elite
                    Tier</span>
                </div>
                <p class="text-slate-500 dark:text-slate-400 font-medium">Current Goal: <span
                    class="text-slate-900 dark:text-slate-200">Body Fat Reduction &amp; Muscle Definition</span></p>
                <div class="flex gap-4 mt-2">
                  <div class="flex items-center gap-1.5 text-xs text-slate-500">
                    <span class="material-symbols-outlined text-sm">location_on</span>
                    <span>New York, NY</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-xs text-slate-500">
                    <span class="material-symbols-outlined text-sm">event</span>
                    <span>Joined Sept 2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-3">
              <button
                class="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors">
                <span class="material-symbols-outlined">edit</span>
                <span>Edit Plan</span>
              </button>
              <button
                class="px-5 py-2.5 bg-primary text-slate-900 font-bold rounded-xl flex items-center gap-2 hover:brightness-95 transition-all shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined">send</span>
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
        <div class="px-8 py-8 grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <section
              class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div
                class="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                    <span class="material-symbols-outlined">today</span>
                  </div>
                  <div>
                    <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">Today's Plan</h2>
                    <p class="text-xs text-slate-500">Monday, Oct 24th</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">In
                  Progress</span>
              </div>
              <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex flex-col gap-4">
                  <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider">Workout Target</h3>
                  <div
                    class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/20">
                    <div class="flex items-center gap-4 mb-4">
                      <div
                        class="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary">fitness_center</span>
                      </div>
                      <div>
                        <p class="font-bold text-slate-900 dark:text-slate-100">Hypertrophy Upper A</p>
                        <p class="text-xs text-slate-500">Duration: 75 mins • 8 Exercises</p>
                      </div>
                    </div>
                    <div class="space-y-2">
                      <div class="flex items-center justify-between text-xs">
                        <span class="text-slate-500">Target Volume</span>
                        <span class="font-semibold text-slate-900 dark:text-slate-100">12,500 lbs</span>
                      </div>
                      <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div class="bg-primary h-full w-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider">Nutrition Target</h3>
                  <div
                    class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/20">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-orange-400">local_fire_department</span>
                        <p class="font-bold text-slate-900 dark:text-slate-100">2,450 kcal</p>
                      </div>
                      <span class="text-[10px] font-bold text-slate-400">PROTEIN GOAL: 195G</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                      <div
                        class="text-center p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <p class="text-[10px] text-slate-400 uppercase">Carbs</p>
                        <p class="text-sm font-bold text-slate-900 dark:text-slate-100">220g</p>
                      </div>
                      <div
                        class="text-center p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <p class="text-[10px] text-slate-400 uppercase">Protein</p>
                        <p class="text-sm font-bold text-slate-900 dark:text-slate-100">195g</p>
                      </div>
                      <div
                        class="text-center p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <p class="text-[10px] text-slate-400 uppercase">Fat</p>
                        <p class="text-sm font-bold text-slate-900 dark:text-slate-100">65g</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">Workout History</h2>
                <button class="text-xs font-bold text-primary hover:underline">Download Report</button>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left">
                  <thead>
                    <tr class="bg-slate-50 dark:bg-slate-800/50">
                      <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                      <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workout Name
                      </th>
                      <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</th>
                      <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                      <th class="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">
                        Feedback</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100">Oct 22, 2023
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">Leg
                        Day - Quads Focus</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">68 mins</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 uppercase">Completed</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right">
                        <div class="flex items-center justify-end gap-2">
                          <button class="text-slate-400 hover:text-primary transition-colors" title="Audio Note">
                            <span class="material-symbols-outlined text-lg">mic</span>
                          </button>
                          <button class="text-slate-400 hover:text-primary transition-colors" title="Emoji React">
                            <span class="material-symbols-outlined text-lg">mood</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100">Oct 20, 2023
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                        Pull Day - Back &amp; Bi</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">55 mins</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 uppercase">Completed</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right">
                        <div class="flex items-center justify-end gap-2">
                          <button class="text-slate-400 hover:text-primary transition-colors" title="Audio Note">
                            <span class="material-symbols-outlined text-lg">mic</span>
                          </button>
                          <button class="text-slate-400 hover:text-primary transition-colors" title="Emoji React">
                            <span class="material-symbols-outlined text-lg">mood</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100">Oct 18, 2023
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                        Rest Day (Active)</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">20 mins</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">Skipped</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-xs text-slate-400 italic">No feedback
                        needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          <div class="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <section
              class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">Weight Trend</h2>
                <span class="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">-4.2 lbs this
                  month</span>
              </div>
              <div class="chart-container flex items-end justify-between gap-1 mb-6">
                <div
                  class="w-full h-32 relative border-b border-slate-100 dark:border-slate-800 flex items-end justify-around">
                  <div class="w-2 bg-primary/20 rounded-t h-[90%]"></div>
                  <div class="w-2 bg-primary/20 rounded-t h-[85%]"></div>
                  <div class="w-2 bg-primary/20 rounded-t h-[88%]"></div>
                  <div class="w-2 bg-primary/20 rounded-t h-[82%]"></div>
                  <div class="w-2 bg-primary/40 rounded-t h-[80%]"></div>
                  <div class="w-2 bg-primary/40 rounded-t h-[75%]"></div>
                  <div class="w-2 bg-primary rounded-t h-[72%]"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 100">
                      <path d="M0,20 Q50,15 100,40 T200,80" fill="none" stroke="#19e66f" stroke-width="3"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div
                  class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <p class="text-[10px] text-slate-400 uppercase font-bold mb-1">Current</p>
                  <p class="text-xl font-bold text-slate-900 dark:text-slate-100">184.5 <span
                      class="text-xs font-normal text-slate-500">lbs</span></p>
                </div>
                <div
                  class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <p class="text-[10px] text-slate-400 uppercase font-bold mb-1">Body Fat %</p>
                  <p class="text-xl font-bold text-slate-900 dark:text-slate-100">14.2 <span
                      class="text-xs font-normal text-slate-500">%</span></p>
                </div>
              </div>
            </section>
            <section
              class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Nutrition Adherence</h2>
              <div class="flex flex-col gap-6">
                <div class="flex items-center gap-4">
                  <div class="relative w-16 h-16 flex items-center justify-center">
                    <svg class="w-full h-full transform -rotate-90">
                      <circle class="text-slate-100 dark:text-slate-800" cx="32" cy="32" fill="transparent" r="28"
                        stroke="currentColor" stroke-width="6"></circle>
                      <circle class="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor"
                        stroke-dasharray="176" stroke-dashoffset="35" stroke-width="6"></circle>
                    </svg>
                    <span class="absolute text-sm font-bold">82%</span>
                  </div>
                  <div class="flex flex-col">
                    <p class="font-bold text-slate-900 dark:text-slate-100">Calorie Target</p>
                    <p class="text-xs text-slate-500">6/7 days hit this week</p>
                  </div>
                </div>
                <div class="flex flex-col gap-3">
                  <div class="flex justify-between items-center text-xs">
                    <span class="text-slate-500">Protein Consistency</span>
                    <span class="font-bold text-primary">High</span>
                  </div>
                  <div class="flex gap-1">
                    <div class="h-2 flex-1 rounded-full bg-primary"></div>
                    <div class="h-2 flex-1 rounded-full bg-primary"></div>
                    <div class="h-2 flex-1 rounded-full bg-primary"></div>
                    <div class="h-2 flex-1 rounded-full bg-primary"></div>
                    <div class="h-2 flex-1 rounded-full bg-primary"></div>
                    <div class="h-2 flex-1 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    <div class="h-2 flex-1 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div class="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p class="text-xs text-slate-600 dark:text-slate-400 italic">"Client is struggling with weekend social
                    events. Recommended a 15% buffer for Friday/Saturday."</p>
                </div>
              </div>
            </section>
            <div class="grid grid-cols-1 gap-4">
              <button
                class="w-full py-4 px-6 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-2xl flex items-center justify-between hover:scale-[1.02] transition-transform">
                <span>Update Macros</span>
                <span class="material-symbols-outlined">restaurant</span>
              </button>
              <button
                class="w-full py-4 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl flex items-center justify-between hover:scale-[1.02] transition-transform">
                <span>Assign Check-in</span>
                <span class="material-symbols-outlined">assignment_turned_in</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Client Profile - John Doe
</script>
