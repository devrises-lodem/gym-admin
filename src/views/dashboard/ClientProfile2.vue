<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 bg-background-light dark:bg-background-dark px-10 py-3 shrink-0 z-50">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark font-bold">
<span class="material-symbols-outlined">exercise</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">FitPro Manager</h2>
</div>
<div class="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
<div class="flex items-center gap-4">
<input class="bg-transparent border-none text-lg font-bold p-0 focus:ring-0 w-64 text-slate-900 dark:text-white" type="text" value="Hypertrophy - Upper Focus"/>
<div class="flex gap-2">
<span class="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold rounded-full border border-amber-500/20 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">signal_cellular_alt</span> Intermediate
                    </span>
<span class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">schedule</span> 60-75 min
                    </span>
</div>
</div>
</div>
<div class="flex items-center gap-4">
<button class="px-4 py-2 text-sm font-bold border border-primary/30 rounded-lg hover:bg-primary/5">Save Draft</button>
<button class="px-6 py-2 text-sm font-bold bg-primary text-background-dark rounded-lg shadow-lg shadow-primary/20">Publish Template</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary ml-4" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOY2NnzG4tDI6JRM8hik0eUEBcBil9ivh0uI9hcg9KlOQt-6LFgVbZn-pLxkqzlqIPCyZrIIJMYNH2d5pwSzwDESrw_jc58GdZ09fuG1AlDyM8GV4AWwDb6eOfcdr2nEROnkOfsIBjyDLgF7gJyPJN8820cUlOWt2vWtkMtf7_UBik0HmgCD1FycC_ZENj8Y1oZv-czV5HB0A6rAnXKUQflKxDY8ykj1WbixgKCqWwzqy95SB2X7Fw3TFeCLCuZxVaJEzTLTV3nb4");'></div>
</div>
</header>
<div class="flex-1 flex overflow-hidden">
<main class="flex-1 overflow-y-auto p-10 space-y-8 bg-slate-50 dark:bg-slate-900/30">
<section class="bg-white dark:bg-slate-800 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
<div class="bg-primary/5 px-6 py-3 border-b border-primary/10 flex justify-between items-center">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">drag_indicator</span>
<h3 class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider text-xs">Block 1: Warm-up</h3>
</div>
<button class="material-symbols-outlined text-slate-400 hover:text-red-500">delete</button>
</div>
<div class="p-6 space-y-4">
<div class="grid grid-cols-12 gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">
<div class="col-span-5">Exercise</div>
<div class="col-span-1 text-center">Sets</div>
<div class="col-span-1 text-center">Reps</div>
<div class="col-span-1 text-center">Weight</div>
<div class="col-span-1 text-center">RPE</div>
<div class="col-span-2 text-center">Rest</div>
<div class="col-span-1"></div>
</div>
<div class="grid grid-cols-12 gap-4 items-center bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-all group">
<div class="col-span-5 flex items-center gap-3">
<div class="size-10 rounded bg-slate-200 dark:bg-slate-600 shrink-0"></div>
<div>
<p class="text-sm font-bold">Dynamic Chest Stretch</p>
<p class="text-[10px] text-slate-500">Mobility • Bodyweight</p>
</div>
</div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="2"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="12"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="--"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="4"/></div>
<div class="col-span-2 flex items-center gap-2">
<input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="30s"/>
</div>
<div class="col-span-1 flex justify-end">
<button class="material-symbols-outlined text-slate-300 group-hover:text-slate-500">more_vert</button>
</div>
</div>
</div>
<div class="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-primary/5">
<button class="flex items-center gap-2 text-primary text-sm font-bold hover:translate-x-1 transition-transform">
<span class="material-symbols-outlined text-lg">add_circle</span> Add Exercise
                    </button>
</div>
</section>
<section class="bg-white dark:bg-slate-800 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
<div class="bg-primary/5 px-6 py-3 border-b border-primary/10 flex justify-between items-center">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">drag_indicator</span>
<h3 class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider text-xs">Block 2: Main Lifts</h3>
</div>
<button class="material-symbols-outlined text-slate-400 hover:text-red-500">delete</button>
</div>
<div class="p-6 space-y-4">
<div class="grid grid-cols-12 gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">
<div class="col-span-5">Exercise</div>
<div class="col-span-1 text-center">Sets</div>
<div class="col-span-1 text-center">Reps</div>
<div class="col-span-1 text-center">Weight</div>
<div class="col-span-1 text-center">RPE</div>
<div class="col-span-2 text-center">Rest</div>
<div class="col-span-1"></div>
</div>
<div class="grid grid-cols-12 gap-4 items-center bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-all group">
<div class="col-span-5 flex items-center gap-3">
<div class="size-10 rounded bg-slate-200 dark:bg-slate-600 shrink-0 bg-cover" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA67J5ZdRMxVXjdQzyeEwbKGr4RamhAXuJKTuuXEceet2z6Xz8IZfQ1wdDqY6zwccCzer8_r0bj6IWPV760iclzcdwB-Xj38UFvoYeNAnnmNASOKKUY1H5FdJAZJRHjms1UTWvmU6kaAPvuavMzg3XaBuY5Hp4tDITAYC8lrPkPtLWMw_L3v330-MvhRT9tQASqqJRBFBQAPnbMfN6hWyltCgUCxSoyEa7tvnqf1slPnCuyOEfpj8fk2g96o_69s7yyon6Pe5uYcEw');"></div>
<div>
<p class="text-sm font-bold">Barbell Bench Press</p>
<p class="text-[10px] text-slate-500">Chest • Strength</p>
</div>
</div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="4"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="6-8"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="185lb"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="8.5"/></div>
<div class="col-span-2 flex items-center gap-2">
<input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="3m"/>
</div>
<div class="col-span-1 flex justify-end">
<button class="material-symbols-outlined text-slate-300 group-hover:text-slate-500">more_vert</button>
</div>
</div>
<div class="grid grid-cols-12 gap-4 items-center bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-all group">
<div class="col-span-5 flex items-center gap-3">
<div class="size-10 rounded bg-slate-200 dark:bg-slate-600 shrink-0"></div>
<div>
<p class="text-sm font-bold">Incline Dumbbell Press</p>
<p class="text-[10px] text-slate-500">Upper Chest • Hypertrophy</p>
</div>
</div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="3"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="10"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="65lb"/></div>
<div class="col-span-1"><input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="8"/></div>
<div class="col-span-2 flex items-center gap-2">
<input class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-center text-sm py-1" type="text" value="90s"/>
</div>
<div class="col-span-1 flex justify-end">
<button class="material-symbols-outlined text-slate-300 group-hover:text-slate-500">more_vert</button>
</div>
</div>
</div>
<div class="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-primary/5">
<button class="flex items-center gap-2 text-primary text-sm font-bold hover:translate-x-1 transition-transform">
<span class="material-symbols-outlined text-lg">add_circle</span> Add Exercise
                    </button>
</div>
</section>
<section class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
<h4 class="text-sm font-bold mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">analytics</span> Total Volume Distribution
                    </h4>
<div class="h-40 flex items-end gap-3 px-2">
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary rounded-t h-full" style="height: 100%;"></div>
<span class="text-[10px] font-bold text-slate-400">CHEST</span>
</div>
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/60 rounded-t h-full" style="height: 40%;"></div>
<span class="text-[10px] font-bold text-slate-400">TRICEPS</span>
</div>
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/40 rounded-t h-full" style="height: 25%;"></div>
<span class="text-[10px] font-bold text-slate-400">SHOULDERS</span>
</div>
<div class="flex-1 flex flex-col items-center gap-2">
<div class="w-full bg-primary/20 rounded-t h-full" style="height: 10%;"></div>
<span class="text-[10px] font-bold text-slate-400">CORE</span>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-primary/10 shadow-sm">
<h4 class="text-sm font-bold mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">show_chart</span> Session Stats
                    </h4>
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
<p class="text-[10px] font-bold text-slate-400 uppercase">Estimated Volume</p>
<p class="text-xl font-bold">14,250 lbs</p>
</div>
<div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
<p class="text-[10px] font-bold text-slate-400 uppercase">Avg Intensity</p>
<p class="text-xl font-bold">8.2 RPE</p>
</div>
<div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
<p class="text-[10px] font-bold text-slate-400 uppercase">Est. Cal Burn</p>
<p class="text-xl font-bold">420 kcal</p>
</div>
<div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
<p class="text-[10px] font-bold text-slate-400 uppercase">Work:Rest Ratio</p>
<p class="text-xl font-bold">1:2.4</p>
</div>
</div>
</div>
</section>
</main>
<aside class="w-80 border-l border-primary/20 bg-white dark:bg-background-dark flex flex-col shrink-0">
<div class="p-6 border-b border-primary/10">
<h3 class="text-base font-bold mb-4">Exercise Library</h3>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary" placeholder="Search exercises..." type="text"/>
</div>
<div class="flex gap-2 mt-4 overflow-x-auto hide-scrollbar">
<button class="px-3 py-1 bg-primary text-background-dark text-xs font-bold rounded-full">All</button>
<button class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full border border-slate-200 dark:border-slate-700 whitespace-nowrap">Chest</button>
<button class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full border border-slate-200 dark:border-slate-700 whitespace-nowrap">Back</button>
<button class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full border border-slate-200 dark:border-slate-700 whitespace-nowrap">Legs</button>
</div>
</div>
<div class="flex-1 overflow-y-auto p-4 space-y-3">
<p class="text-[10px] font-bold text-slate-400 uppercase px-2 mb-1">Commonly Used</p>
<div class="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 cursor-grab group transition-all">
<div class="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">fitness_center</span>
</div>
<div class="flex-1 overflow-hidden">
<p class="text-sm font-bold truncate">Dumbbell Flyes</p>
<p class="text-[10px] text-slate-500">Chest • Isolation</p>
</div>
<span class="material-symbols-outlined text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 cursor-grab group transition-all">
<div class="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">fitness_center</span>
</div>
<div class="flex-1 overflow-hidden">
<p class="text-sm font-bold truncate">Push-ups</p>
<p class="text-[10px] text-slate-500">Chest • Bodyweight</p>
</div>
<span class="material-symbols-outlined text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 cursor-grab group transition-all">
<div class="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">fitness_center</span>
</div>
<div class="flex-1 overflow-hidden">
<p class="text-sm font-bold truncate">Tricep Pushdown</p>
<p class="text-[10px] text-slate-500">Triceps • Cable</p>
</div>
<span class="material-symbols-outlined text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 cursor-grab group transition-all">
<div class="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">fitness_center</span>
</div>
<div class="flex-1 overflow-hidden">
<p class="text-sm font-bold truncate">Pec Deck Machine</p>
<p class="text-[10px] text-slate-500">Chest • Machine</p>
</div>
<span class="material-symbols-outlined text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 cursor-grab group transition-all">
<div class="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">fitness_center</span>
</div>
<div class="flex-1 overflow-hidden">
<p class="text-sm font-bold truncate">Overhead Press</p>
<p class="text-[10px] text-slate-500">Shoulders • Barbell</p>
</div>
<span class="material-symbols-outlined text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
</div>
</div>
<div class="p-6 border-t border-primary/10">
<button class="w-full py-2 bg-slate-100 dark:bg-slate-800 border border-dashed border-primary/30 rounded-lg text-sm font-bold text-primary flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-lg">add</span> Create Custom Exercise
                </button>
</div>
</aside>
</div>
  </div>
</template>

<script setup lang="ts">
// Routine Builder
</script>
