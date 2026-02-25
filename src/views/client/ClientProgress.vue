<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <header
          class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
          <div class="flex items-center gap-8">
            <div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
              <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                <span class="material-symbols-outlined font-bold">exercise</span>
              </div>
              <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">FitPro Manager</h2>
            </div>
            <label class="flex flex-col min-w-40 h-10 max-w-64">
              <div class="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
                <div class="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-4 rounded-l-lg"
                  data-icon="search">
                  <span class="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-slate-500 px-4 pl-2 text-base font-normal"
                  placeholder="Search clients..." value="" />
              </div>
            </label>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors"
                href="#">Clients</a>
              <a class="text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors"
                href="#">Workouts</a>
              <a class="text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors"
                href="#">Nutrition</a>
              <a class="text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors"
                href="#">Reports</a>
              <a class="text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors"
                href="#">Settings</a>
            </div>
            <div class="flex gap-2">
              <button
                class="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                <span class="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <button
                class="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                <span class="material-symbols-outlined text-[20px]">account_circle</span>
              </button>
            </div>
            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
              data-alt="Profile picture of trainer"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYm79FBcHi7KO7hROOBDDSsU_K-n9EGMsCq2b5Szt2SMK-d5UEsXnndirtOxMLemWnzzHZw-2HAGwhdXewoQ90bWinFVXK4DlPVtVIjF_WekyG1hPprd3uQapB8C29SuypSOWIdalFzK02R2JfhVBsxL0a3mWs6yQE9V7TAlpu-BTyQgZyiUR4j-mi43uSgT21GZ2qKeeXw2EG0tIzOrQnxoXZA5yUUbKmMg6ycZCkLUzZgC1K7bQfdfpGIVSy2_k4ZMba-lnSj9o");'>
            </div>
          </div>
        </header>
        <main class="px-10 py-8 max-w-[1280px] mx-auto w-full">
          <div class="flex flex-wrap gap-2 mb-4">
            <a class="text-primary text-sm font-medium hover:underline" href="#">Clients</a>
            <span class="text-slate-400 text-sm">/</span>
            <span class="text-slate-900 dark:text-slate-100 text-sm font-medium">Alex Thompson - Progress Report</span>
          </div>
          <div class="flex flex-wrap justify-between items-end gap-3 mb-8">
            <div class="flex min-w-72 flex-col gap-1">
              <h1 class="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">Client
                Progress &amp; Adherence</h1>
              <p class="text-slate-500 dark:text-slate-400 text-base font-normal">Detailed performance tracking for Alex
                Thompson (Last 30 Days)</p>
            </div>
            <div class="flex gap-3">
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
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              class="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="flex justify-between items-start">
                <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Overall Adherence</p>
                <span class="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">+2.5%</span>
              </div>
              <p class="text-slate-900 dark:text-slate-100 text-3xl font-bold">92.4%</p>
              <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: 92.4%"></div>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="flex justify-between items-start">
                <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Workouts Completed</p>
                <span class="bg-red-500/20 text-red-500 text-xs font-bold px-2 py-0.5 rounded-full">-5%</span>
              </div>
              <p class="text-slate-900 dark:text-slate-100 text-3xl font-bold">18/20</p>
              <p class="text-slate-400 text-xs mt-2">Target: 5 workouts per week</p>
            </div>
            <div
              class="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="flex justify-between items-start">
                <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Weight Change</p>
                <span class="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">-3.2 lbs</span>
              </div>
              <p class="text-slate-900 dark:text-slate-100 text-3xl font-bold">-4.5 lbs</p>
              <p class="text-slate-400 text-xs mt-2">Current: 182.5 lbs | Initial: 187.0 lbs</p>
            </div>
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
                <div class="flex-1 bg-primary/40 h-[90%] rounded-t relative group">
                  <div
                    class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block bg-slate-800 text-white px-1 rounded">
                    187.0</div>
                </div>
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
                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-medium"><span>Monday</span><span>2,350 kcal</span></div>
                  <div class="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full">
                    <div class="bg-primary h-full rounded-full" style="width: 98%"></div>
                  </div>
                </div>
                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-medium"><span>Tuesday</span><span>2,450 kcal</span>
                  </div>
                  <div class="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full">
                    <div class="bg-primary h-full rounded-full" style="width: 100%"></div>
                  </div>
                </div>
                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-medium"><span>Wednesday</span><span>2,800 kcal</span>
                  </div>
                  <div class="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full">
                    <div class="bg-orange-400 h-full rounded-full" style="width: 116%"></div>
                  </div>
                </div>
                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-medium"><span>Thursday</span><span>2,380 kcal</span>
                  </div>
                  <div class="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full">
                    <div class="bg-primary h-full rounded-full" style="width: 99%"></div>
                  </div>
                </div>
                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-medium"><span>Friday</span><span>2,410 kcal</span></div>
                  <div class="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full">
                    <div class="bg-primary h-full rounded-full" style="width: 100%"></div>
                  </div>
                </div>
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

                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  1</div>
                <div
                  class="aspect-square bg-primary/80 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  2</div>
                <div
                  class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-[10px]">
                  3</div>
                <div
                  class="aspect-square bg-primary/60 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  4</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  5</div>
                <div
                  class="aspect-square bg-primary/40 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  6</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  7</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  8</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  9</div>
                <div
                  class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-[10px]">
                  10</div>
                <div
                  class="aspect-square bg-primary/80 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  11</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  12</div>
                <div
                  class="aspect-square bg-primary/60 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  13</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  14</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  15</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  16</div>
                <div
                  class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-[10px]">
                  17</div>
                <div
                  class="aspect-square bg-primary/40 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  18</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  19</div>
                <div
                  class="aspect-square bg-primary/80 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  20</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  21</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  22</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  23</div>
                <div
                  class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-[10px]">
                  24</div>
                <div
                  class="aspect-square bg-primary/80 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  25</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  26</div>
                <div class="aspect-square bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">
                  27</div>
                <div
                  class="aspect-square bg-primary/60 rounded-lg flex items-center justify-center text-[10px] font-bold">
                  28</div>
              </div>
            </div>
            <div
              class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 class="text-lg font-bold mb-6">Training Performance (1RM)</h3>
              <div class="space-y-6">
                <div class="flex items-center gap-4">
                  <div class="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary">fitness_center</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-bold uppercase">Back Squat</span>
                      <span class="text-sm text-primary font-bold">+15 lbs</span>
                    </div>
                    <div class="text-xs text-slate-500">Current: 285 lbs | Initial: 270 lbs</div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary">fitness_center</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-bold uppercase">Bench Press</span>
                      <span class="text-sm text-primary font-bold">+10 lbs</span>
                    </div>
                    <div class="text-xs text-slate-500">Current: 215 lbs | Initial: 205 lbs</div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary">fitness_center</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-bold uppercase">Deadlift</span>
                      <span class="text-sm text-primary font-bold">+25 lbs</span>
                    </div>
                    <div class="text-xs text-slate-500">Current: 345 lbs | Initial: 320 lbs</div>
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
                <div class="flex gap-4">
                  <div class="min-w-[100px] text-xs font-bold text-slate-400">OCT 14, 2023</div>
                  <p class="text-sm text-slate-700 dark:text-slate-300">Alex is showing great consistency in meal
                    logging. Weight is dropping steadily. Need to watch recovery during week 4.</p>
                </div>
                <div class="flex gap-4">
                  <div class="min-w-[100px] text-xs font-bold text-slate-400">OCT 07, 2023</div>
                  <p class="text-sm text-slate-700 dark:text-slate-300">Strong performance in the squat sessions.
                    Increased target weight for next block.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer
          class="mt-auto py-10 px-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
          <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex items-center gap-3">
              <div
                class="size-6 bg-primary rounded flex items-center justify-center text-[12px] font-bold text-background-dark">
                F</div>
              <p class="text-slate-500 text-sm">© 2024 FitPro Manager. All rights reserved.</p>
            </div>
            <div class="flex gap-8">
              <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Terms of Service</a>
              <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
              <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Help Center</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Progress Reports
</script>
