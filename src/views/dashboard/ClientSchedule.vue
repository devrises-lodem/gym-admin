<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="flex h-screen overflow-hidden">
<aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
<div class="p-6 flex items-center gap-3">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-slate-900">
<span class="material-symbols-outlined font-bold">fitness_center</span>
</div>
<div>
<h1 class="font-bold text-lg leading-none">FitTrain Pro</h1>
<p class="text-xs text-slate-500 dark:text-slate-400">Trainer Portal</p>
</div>
</div>
<nav class="flex-1 px-4 space-y-2 py-4">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">Clients</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">calendar_today</span>
<span class="text-sm font-medium">Global Schedule</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">library_books</span>
<span class="text-sm font-medium">Plan Library</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
</nav>
<div class="p-4 border-t border-slate-200 dark:border-slate-800">
<div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
<h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Library Items</h3>
<div class="space-y-3">
<div class="p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 cursor-move shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-blue-500 text-sm">exercise</span>
<span class="text-xs font-medium">Push Day A</span>
</div>
</div>
<div class="p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 cursor-move shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-blue-500 text-sm">exercise</span>
<span class="text-xs font-medium">Leg Power II</span>
</div>
</div>
<div class="p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 cursor-move shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-sm">restaurant</span>
<span class="text-xs font-medium">Bulking 3000kcal</span>
</div>
</div>
<div class="p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 cursor-move shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-sm">restaurant</span>
<span class="text-xs font-medium">Keto Cutting</span>
</div>
</div>
</div>
</div>
</div>
</aside>
<main class="flex-1 flex flex-col overflow-hidden">
<header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8">
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-slate-500">
<span class="text-sm">Clients</span>
<span class="material-symbols-outlined text-sm">chevron_right</span>
<span class="text-sm font-semibold text-slate-900 dark:text-white">Alex Johnson</span>
</div>
</div>
<div class="flex items-center gap-4">
<div class="relative">
<span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">search</span>
<input class="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Search routines..." type="text"/>
</div>
<div class="h-10 w-10 rounded-full border-2 border-primary/20 p-0.5">
<img alt="Alex Johnson Profile" class="w-full h-full rounded-full object-cover" data-alt="Portrait of a male fitness client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFidFKszlyN2_ZKI_kPsmRptL5DdHKBfAi9GY6yOgb5yNMCpWDbhUNmU5pNeymxHEQKwGq7YIaGY6IdASyerLvxL32PasEmrOkJTARceCNDD-Pb3Pp47RTP-JaW5sUY77EzWqwzBgpTTCQLN4a4y2zYKBHJGSgqVCcn4bLrqrtlJbc10vhJJEUS8-H4ArMX2isD_3v33aD0SolvswBZNv479J7HVxN8SIIGNDaxy8aXmSJxvMPwA-9CNgi1bqv9h1yk6MTAxG6iU8"/>
</div>
</div>
</header>
<div class="flex-1 overflow-y-auto p-8">
<div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 class="text-2xl font-bold mb-1">Schedule &amp; Nutrition</h2>
<p class="text-slate-500 dark:text-slate-400">Managing plans for October 2023</p>
</div>
<div class="flex items-center gap-3">
<div class="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
<button class="px-4 py-1.5 text-xs font-bold rounded bg-white dark:bg-slate-700 shadow-sm">Workouts &amp; Nutrition</button>
<button class="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700">Workouts</button>
<button class="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700">Nutrition</button>
</div>
<button class="flex items-center gap-2 bg-primary hover:bg-primary/90 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
<span class="material-symbols-outlined text-lg">content_copy</span>
                            Copy Week
                        </button>
<button class="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
<span class="material-symbols-outlined text-lg">add</span>
                            Add Entry
                        </button>
</div>
</div>
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div class="grid grid-cols-7 border-b border-slate-200 dark:border-slate-800">
<div class="py-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0"><span class="text-xs font-bold uppercase tracking-widest text-slate-400">Sun</span></div>
<div class="py-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0"><span class="text-xs font-bold uppercase tracking-widest text-slate-400">Mon</span></div>
<div class="py-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0"><span class="text-xs font-bold uppercase tracking-widest text-slate-400">Tue</span></div>
<div class="py-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0"><span class="text-xs font-bold uppercase tracking-widest text-slate-400">Wed</span></div>
<div class="py-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0"><span class="text-xs font-bold uppercase tracking-widest text-slate-400">Thu</span></div>
<div class="py-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0"><span class="text-xs font-bold uppercase tracking-widest text-slate-400">Fri</span></div>
<div class="py-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0"><span class="text-xs font-bold uppercase tracking-widest text-slate-400">Sat</span></div>
</div>
<div class="grid grid-cols-7 min-h-[700px]">
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2 bg-slate-50 dark:bg-slate-800/30">
<span class="text-xs font-medium text-slate-400">27</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2 bg-slate-50 dark:bg-slate-800/30">
<span class="text-xs font-medium text-slate-400">28</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2 bg-slate-50 dark:bg-slate-800/30">
<span class="text-xs font-medium text-slate-400">29</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2 bg-slate-50 dark:bg-slate-800/30">
<span class="text-xs font-medium text-slate-400">30</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">1</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Bulking 3000kcal</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">2</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded text-[10px] font-bold">Push Day A</div>
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Bulking 3000kcal</div>
</div>
</div>
<div class="border-b border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">3</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Bulking 3000kcal</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">4</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded text-[10px] font-bold">Leg Power II</div>
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Bulking 3000kcal</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2 bg-primary/5">
<span class="text-xs font-bold text-primary">5</span>
<p class="text-[10px] text-slate-400 italic mt-1 leading-tight">Rest Day</p>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Cheat Meal (Dinner)</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2 relative group">
<span class="text-xs font-bold">6</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded text-[10px] font-bold cursor-pointer hover:ring-2 ring-blue-400">Pull Day B</div>
</div>
<div class="hidden group-hover:block absolute left-full top-2 z-20 w-48 p-4 bg-white dark:bg-slate-800 shadow-xl rounded-lg border border-slate-200 dark:border-slate-700 ml-2">
<div class="flex justify-between items-start mb-2">
<h4 class="text-xs font-bold">Pull Day B</h4>
<div class="flex gap-1">
<button class="material-symbols-outlined text-xs text-slate-400 hover:text-slate-600">edit</button>
<button class="material-symbols-outlined text-xs text-red-400 hover:text-red-600">delete</button>
</div>
</div>
<p class="text-[10px] text-slate-500 mb-2">Back, Biceps, Rear Delts. Estimated: 65 mins.</p>
<div class="flex flex-col gap-1">
<span class="text-[9px] bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">Deadlifts 3x5</span>
<span class="text-[9px] bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">Pull Ups 4x8</span>
</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">7</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Bulking 3000kcal</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">8</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">9</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded text-[10px] font-bold">Push Day A</div>
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Bulking 3000kcal</div>
</div>
</div>
<div class="border-b border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">10</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold">Bulking 3000kcal</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">11</span>
<div class="mt-2 space-y-1">
<div class="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded text-[10px] font-bold">Leg Power II</div>
</div>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">12</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">13</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">14</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">15</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">16</span>
</div>
<div class="border-b border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">17</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">18</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">19</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">20</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">21</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">22</span>
</div>
<div class="border-b border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">23</span>
</div>
<div class="border-b border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">24</span>
</div>
<div class="border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">25</span>
</div>
<div class="border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">26</span>
</div>
<div class="border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">27</span>
</div>
<div class="border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">28</span>
</div>
<div class="border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">29</span>
</div>
<div class="border-r border-slate-200 dark:border-slate-800 p-2">
<span class="text-xs font-bold">30</span>
</div>
<div class="p-2">
<span class="text-xs font-bold">31</span>
</div>
</div>
</div>
<div class="mt-6 flex gap-6">
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex-1">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-lg">insights</span>
</div>
<h3 class="font-bold text-sm">Monthly Compliance</h3>
</div>
<div class="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-primary" style="width: 78%"></div>
</div>
<div class="mt-2 flex justify-between text-xs text-slate-500">
<span>78% Check-in Rate</span>
<span>Target: 90%</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex-1">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-500">
<span class="material-symbols-outlined text-lg">history</span>
</div>
<h3 class="font-bold text-sm">Last Session</h3>
</div>
<p class="text-xs text-slate-500">Push Day A - Oct 09</p>
<p class="text-xs font-semibold text-slate-900 dark:text-white mt-1">Weight: +2.5kg PR on Bench Press</p>
</div>
</div>
</div>
</main>
</div>
  </div>
</template>

<script setup lang="ts">
// Schedule & Calendar
</script>
