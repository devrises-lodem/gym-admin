<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex h-screen w-full flex-col overflow-hidden">

<header class="flex items-center justify-between border-b border-primary/10 bg-white dark:bg-background-dark px-8 py-3 shrink-0">
<div class="flex items-center gap-8">
<div class="flex items-center gap-3 text-slate-900 dark:text-slate-100">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
<span class="material-symbols-outlined text-xl">nutrition</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-tight">FitPro Manager</h2>
</div>
<div class="hidden lg:flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Clients</a>
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Workouts</a>
<a class="text-primary text-sm font-semibold border-b-2 border-primary pb-1" href="#">Meal Plans</a>
<a class="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Settings</a>
</div>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input class="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Search clients..." type="text"/>
</div>
<button class="bg-primary hover:bg-primary/90 text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm">save</span>
                    Save Plan
                </button>
<div class="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20" data-alt="User profile avatar placeholder">
<img alt="Profile" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYJgTDyTBPJvdLJCTti3xXsgp0J1NJSyczBEy4_lJghaaq_54RHBPDxy6h9Y1Sr-omwlASyrcYGyU4eSa9TU4r60P6i5W3FAfxGMOOduo8QeDD8WivAveqkNCcDwQA8t2gbJNLRYfm8zA955StXGNdCul3BGfAQGgNB4a2FuK4moGvBynb5cr0L2Y257cxzSWHRDfyznhBAeweuVGvVVrCVNya2q-Z3uznZI0f85Ro9NAXxAHYdyYLA7v7oL_pBMump3ajtyNehz0"/>
</div>
</div>
</header>
<main class="flex flex-1 overflow-hidden">

<aside class="w-80 border-r border-primary/10 bg-white dark:bg-background-dark flex flex-col shrink-0">
<div class="p-5 border-b border-primary/10">
<h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Meal Components</h3>
<div class="space-y-2">
<button class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium">
<span class="material-symbols-outlined">search</span>
<span class="text-sm">Food Database</span>
</button>
<button class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
<span class="material-symbols-outlined">restaurant_menu</span>
<span class="text-sm">My Recipes</span>
</button>
<button class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
<span class="material-symbols-outlined">assignment</span>
<span class="text-sm">Templates</span>
</button>
</div>
</div>
<div class="flex-1 overflow-y-auto p-4 space-y-4">
<div class="relative">
<input class="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-3 pr-10 py-2.5 text-sm focus:ring-1 focus:ring-primary" placeholder="Search foods or brands..." type="text"/>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">filter_list</span>
</div>
<div class="space-y-3">
<p class="text-xs font-semibold text-slate-400 uppercase px-1">Commonly Used</p>

<div class="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl cursor-move hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-1">
<span class="text-sm font-semibold">Grilled Chicken Breast</span>
<span class="text-[10px] bg-primary/20 text-primary-700 px-1.5 py-0.5 rounded font-bold uppercase">Protein</span>
</div>
<p class="text-xs text-slate-500 mb-2">150g • 245 kcal</p>
<div class="flex gap-2">
<span class="text-[10px] text-slate-400">P: 46g</span>
<span class="text-[10px] text-slate-400">C: 0g</span>
<span class="text-[10px] text-slate-400">F: 5g</span>
</div>
</div>
<div class="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl cursor-move hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-1">
<span class="text-sm font-semibold">Avocado Toast (Whole Grain)</span>
<span class="text-[10px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded font-bold uppercase">Healthy Fat</span>
</div>
<p class="text-xs text-slate-500 mb-2">1 slice • 320 kcal</p>
<div class="flex gap-2">
<span class="text-[10px] text-slate-400">P: 8g</span>
<span class="text-[10px] text-slate-400">C: 24g</span>
<span class="text-[10px] text-slate-400">F: 22g</span>
</div>
</div>
<div class="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl cursor-move hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-1">
<span class="text-sm font-semibold">High Protein Oats</span>
<span class="text-[10px] bg-blue-500/20 text-blue-600 px-1.5 py-0.5 rounded font-bold uppercase">Balanced</span>
</div>
<p class="text-xs text-slate-500 mb-2">1 bowl • 410 kcal</p>
<div class="flex gap-2">
<span class="text-[10px] text-slate-400">P: 28g</span>
<span class="text-[10px] text-slate-400">C: 54g</span>
<span class="text-[10px] text-slate-400">F: 10g</span>
</div>
</div>
<div class="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl cursor-move hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-1">
<span class="text-sm font-semibold">Greek Yogurt with Berries</span>
<span class="text-[10px] bg-primary/20 text-primary-700 px-1.5 py-0.5 rounded font-bold uppercase">Protein</span>
</div>
<p class="text-xs text-slate-500 mb-2">200g • 180 kcal</p>
<div class="flex gap-2">
<span class="text-[10px] text-slate-400">P: 18g</span>
<span class="text-[10px] text-slate-400">C: 12g</span>
<span class="text-[10px] text-slate-400">F: 0g</span>
</div>
</div>
</div>
</div>
<div class="p-4 border-t border-primary/10">
<button class="w-full bg-slate-900 dark:bg-primary text-white dark:text-background-dark py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-lg">add</span>
                        Custom Food
                    </button>
</div>
</aside>

<section class="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-hidden">
<div class="px-8 py-6 flex flex-col gap-1">
<div class="flex justify-between items-end">
<div>
<h1 class="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">Custom Meal Plan Creator</h1>
<p class="text-slate-500 font-medium">Client: <span class="text-primary">Alex Johnson</span> • Hypertrophy Phase 1</p>
</div>
<div class="flex gap-2">
<button class="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-primary transition-colors">
<span class="material-symbols-outlined">content_copy</span>
</button>
<button class="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-primary transition-colors">
<span class="material-symbols-outlined">file_download</span>
</button>
</div>
</div>
</div>

<div class="flex-1 overflow-x-auto p-8 pt-0">
<div class="flex gap-4 min-w-[1200px] h-full pb-6">

<div class="flex-1 min-w-[180px] flex flex-col gap-4">
<div class="text-center pb-2">
<p class="text-xs font-bold uppercase text-slate-400">Mon</p>
<p class="text-lg font-bold text-slate-800 dark:text-slate-200">May 15</p>
</div>
<div class="flex-1 bg-white/60 dark:bg-slate-800/40 rounded-2xl border-2 border-dashed border-primary/20 p-3 flex flex-col gap-3 group hover:bg-white dark:hover:bg-slate-800 transition-all">

<div class="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative group/item">
<button class="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-sm">close</span>
</button>
<p class="text-[10px] font-bold text-primary uppercase mb-1">Breakfast</p>
<p class="text-xs font-semibold">High Protein Oats</p>
<p class="text-[10px] text-slate-500">410 kcal</p>
</div>
<div class="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative group/item">
<p class="text-[10px] font-bold text-primary uppercase mb-1">Lunch</p>
<p class="text-xs font-semibold">Chicken Salad</p>
<p class="text-[10px] text-slate-500">520 kcal</p>
</div>
<button class="mt-auto border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl py-4 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
<span class="material-symbols-outlined">add_circle</span>
</button>
</div>

<div class="bg-slate-900 text-white p-3 rounded-xl">
<div class="flex justify-between items-center mb-2">
<span class="text-[10px] font-bold uppercase opacity-60 tracking-wider">Daily Total</span>
<span class="text-xs font-bold text-primary">2,450 kcal</span>
</div>
<div class="grid grid-cols-3 gap-1">
<div class="text-center">
<p class="text-[9px] opacity-60">P</p>
<p class="text-[11px] font-bold">185g</p>
</div>
<div class="text-center border-x border-white/10">
<p class="text-[9px] opacity-60">C</p>
<p class="text-[11px] font-bold">210g</p>
</div>
<div class="text-center">
<p class="text-[9px] opacity-60">F</p>
<p class="text-[11px] font-bold">65g</p>
</div>
</div>
</div>
</div>

<div class="flex-1 min-w-[180px] flex flex-col gap-4">
<div class="text-center pb-2">
<p class="text-xs font-bold uppercase text-slate-400">Tue</p>
<p class="text-lg font-bold text-slate-800 dark:text-slate-200">May 16</p>
</div>
<div class="flex-1 bg-white/60 dark:bg-slate-800/40 rounded-2xl border-2 border-dashed border-primary/20 p-3 flex flex-col gap-3 group hover:bg-white dark:hover:bg-slate-800 transition-all">
<div class="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p class="text-[10px] font-bold text-primary uppercase mb-1">Breakfast</p>
<p class="text-xs font-semibold">Greek Yogurt Bowl</p>
<p class="text-[10px] text-slate-500">320 kcal</p>
</div>
<button class="mt-auto border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl py-4 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
<span class="material-symbols-outlined">add_circle</span>
</button>
</div>
<div class="bg-slate-900 text-white p-3 rounded-xl">
<div class="flex justify-between items-center mb-2">
<span class="text-[10px] font-bold uppercase opacity-60 tracking-wider">Daily Total</span>
<span class="text-xs font-bold text-primary">2,320 kcal</span>
</div>
<div class="grid grid-cols-3 gap-1">
<div class="text-center">
<p class="text-[9px] opacity-60">P</p>
<p class="text-[11px] font-bold">170g</p>
</div>
<div class="text-center border-x border-white/10">
<p class="text-[9px] opacity-60">C</p>
<p class="text-[11px] font-bold">225g</p>
</div>
<div class="text-center">
<p class="text-[9px] opacity-60">F</p>
<p class="text-[11px] font-bold">72g</p>
</div>
</div>
</div>
</div>

<div class="flex-1 min-w-[180px] flex flex-col gap-4">
<div class="text-center pb-2">
<p class="text-xs font-bold uppercase text-slate-400">Wed</p>
<p class="text-lg font-bold text-slate-800 dark:text-slate-200">May 17</p>
</div>
<div class="flex-1 bg-white/40 dark:bg-slate-800/20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-3 flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-slate-300 text-4xl mb-2">calendar_today</span>
<p class="text-xs text-slate-400 px-4">Drag foods here to start planning</p>
</div>
<div class="bg-slate-200 dark:bg-slate-800 p-3 rounded-xl opacity-50">
<div class="flex justify-between items-center">
<span class="text-[10px] font-bold uppercase opacity-60 tracking-wider">Daily Total</span>
<span class="text-xs font-bold">0 kcal</span>
</div>
</div>
</div>

<div class="flex-1 min-w-[180px] flex flex-col gap-4">
<div class="text-center pb-2">
<p class="text-xs font-bold uppercase text-slate-400">Thu</p>
<p class="text-lg font-bold text-slate-800 dark:text-slate-200">May 18</p>
</div>
<div class="flex-1 bg-white/40 dark:bg-slate-800/20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-3"></div>
<div class="bg-slate-200 dark:bg-slate-800 p-3 rounded-xl opacity-50">
<span class="text-xs font-bold">0 kcal</span>
</div>
</div>
<div class="flex-1 min-w-[180px] flex flex-col gap-4">
<div class="text-center pb-2">
<p class="text-xs font-bold uppercase text-slate-400">Fri</p>
<p class="text-lg font-bold text-slate-800 dark:text-slate-200">May 19</p>
</div>
<div class="flex-1 bg-white/40 dark:bg-slate-800/20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-3"></div>
<div class="bg-slate-200 dark:bg-slate-800 p-3 rounded-xl opacity-50">
<span class="text-xs font-bold">0 kcal</span>
</div>
</div>
<div class="flex-1 min-w-[180px] flex flex-col gap-4">
<div class="text-center pb-2">
<p class="text-xs font-bold uppercase text-slate-400">Sat</p>
<p class="text-lg font-bold text-slate-800 dark:text-slate-200">May 20</p>
</div>
<div class="flex-1 bg-white/40 dark:bg-slate-800/20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-3"></div>
<div class="bg-slate-200 dark:bg-slate-800 p-3 rounded-xl opacity-50">
<span class="text-xs font-bold">0 kcal</span>
</div>
</div>
<div class="flex-1 min-w-[180px] flex flex-col gap-4">
<div class="text-center pb-2">
<p class="text-xs font-bold uppercase text-slate-400">Sun</p>
<p class="text-lg font-bold text-slate-800 dark:text-slate-200">May 21</p>
</div>
<div class="flex-1 bg-white/40 dark:bg-slate-800/20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-3"></div>
<div class="bg-slate-200 dark:bg-slate-800 p-3 rounded-xl opacity-50">
<span class="text-xs font-bold">0 kcal</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer class="h-16 bg-white dark:bg-background-dark border-t border-primary/10 px-8 flex items-center justify-between shrink-0">
<div class="flex items-center gap-8">
<div class="flex flex-col">
<span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider leading-none">Weekly Avg Calories</span>
<span class="text-lg font-black text-slate-800 dark:text-slate-100">2,385 kcal</span>
</div>
<div class="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<div class="size-2 rounded-full bg-primary"></div>
<span class="text-xs font-medium text-slate-600 dark:text-slate-400">Protein: 182g</span>
</div>
<div class="flex items-center gap-2">
<div class="size-2 rounded-full bg-blue-500"></div>
<span class="text-xs font-medium text-slate-600 dark:text-slate-400">Carbs: 215g</span>
</div>
<div class="flex items-center gap-2">
<div class="size-2 rounded-full bg-amber-500"></div>
<span class="text-xs font-medium text-slate-600 dark:text-slate-400">Fat: 68g</span>
</div>
</div>
</div>
<div class="flex gap-3">
<button class="px-6 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    Discard Draft
                </button>
<button class="px-8 py-2 rounded-lg bg-primary text-background-dark font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                    Generate Client PDF
                </button>
</div>
</footer>
</div>
  </div>
</template>

<script setup lang="ts">
// Meal Plan Creator
</script>
