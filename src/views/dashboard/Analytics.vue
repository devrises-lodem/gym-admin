<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div class="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<div class="flex items-center gap-8">
<div class="flex items-center gap-2">
<div class="bg-primary p-1.5 rounded-lg">
<span class="material-symbols-outlined text-background-dark font-bold">monitoring</span>
</div>
<h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">FitBiz <span class="text-primary">Pro</span></h1>
</div>
<nav class="hidden md:flex items-center gap-6">
<a class="text-sm font-semibold text-primary" href="#">Dashboard</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Clients</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Programs</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Revenue</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden lg:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input class="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Search clients..." type="text"/>
</div>
<button class="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
<span class="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-background-dark"></span>
</button>
<div class="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-800">
<div class="text-right hidden sm:block">
<p class="text-xs font-bold">Coach Marcus</p>
<p class="text-[10px] text-slate-500">Premium Trainer</p>
</div>
<img class="w-9 h-9 rounded-full border border-primary/20 bg-slate-200" data-alt="Profile picture of Coach Marcus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPQr6flb-ozSdT4Sw7KMAA4tQfmn2agH-rx4pvGlLIMd9LrshMwbvt6c86AAKo_45c6pP9gR9lHlSw2_bDYkLfWBSGMqLDzRkBCcHYmnCLouo5xNOfDJ0ZcdS6ZhWVNhuOPfAk9iQfuGj0qtLBp3ihA4eTeEGz0M0v8XVePY43wvkOmPlPTK02D0gRpA76bLlx8qN2UGStd8UWKvjvzQwNb_9zWtPCverypG7jJEUpQzkz7bsSHUxRmIhCqu4Y_uR64mzPBJnQrFk"/>
</div>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-6 py-8">

<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 class="text-3xl font-black tracking-tight mb-1">Business Analytics</h2>
<p class="text-slate-500 dark:text-slate-400">Reviewing your fitness empire's performance for Oct 2023.</p>
</div>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
<span class="material-symbols-outlined text-sm">calendar_today</span>
                    Last 30 Days
                </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-sm">download</span>
                    Export Report
                </button>
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
<span class="material-symbols-outlined text-blue-500">groups</span>
</div>
<span class="text-primary text-xs font-bold flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">+5.2%</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Clients</p>
<h3 class="text-2xl font-bold mt-1">124</h3>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-primary/10 rounded-lg">
<span class="material-symbols-outlined text-primary">autorenew</span>
</div>
<span class="text-primary text-xs font-bold flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">+2.1%</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Subscriptions</p>
<h3 class="text-2xl font-bold mt-1">98</h3>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
<span class="material-symbols-outlined text-emerald-500">payments</span>
</div>
<span class="text-primary text-xs font-bold flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">+12.4%</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Monthly Revenue</p>
<h3 class="text-2xl font-bold mt-1">$12,450</h3>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
<span class="material-symbols-outlined text-orange-500">task_alt</span>
</div>
<span class="text-red-500 text-xs font-bold flex items-center gap-1 bg-red-100 dark:bg-red-900/20 px-2 py-0.5 rounded-full">-0.8%</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg. Client Adherence</p>
<h3 class="text-2xl font-bold mt-1">88.4%</h3>
</div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div class="lg:col-span-2 space-y-8">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
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
<path d="M0 160 Q 133 140 266 100 T 533 110 T 800 40" fill="none" stroke="#19e66f" stroke-width="3"></path>
<circle cx="266" cy="100" fill="#19e66f" r="5"></circle>
<circle cx="800" cy="40" fill="#19e66f" r="5"></circle>
</svg>
<div class="flex justify-between mt-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
<span>Sep</span>
<span>Oct</span>
</div>
</div>
</div>

<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex items-center justify-between mb-6">
<h4 class="text-lg font-bold">Engagement Score Leaderboard</h4>
<button class="text-primary text-sm font-semibold hover:underline">View All</button>
</div>
<div class="space-y-4">

<div class="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full" data-alt="Portrait of Sarah J." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArysIMVXXNl-MFCyUtXW8ae5ELzRpoVHoCnFRPgLcZMfiA48TBgiQixXCkwntyw16_vB9qUdQz6BeaiQkU_PHnjdM_0U09oFHg2vbWAnuSt4uTGoxXcubkY9hn4MeksQ-Ymi7Ja2PkdG_SV3o8Uf-aVk49PS4oTiMj7hV1qaLwVkYNFtG0gDsfaeuZQuxK2smfhzMkqEh6HY3hrl0ana9XK4Vsi1t9du2YgQFw9vbo-DdFXax0XcUceVg8gj_Uoh-OKV2o7zFDBu0"/>
<div>
<p class="font-bold text-sm">Sarah Jenkins</p>
<p class="text-xs text-slate-500">Powerlifting Phase 2</p>
</div>
</div>
<div class="text-right">
<div class="flex items-center gap-1 text-primary">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span class="text-sm font-black">98</span>
</div>
<p class="text-[10px] text-slate-400">Streak: 24 Days</p>
</div>
</div>

<div class="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full" data-alt="Portrait of Mike R." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcZ-LnxFhpk7HgA4I_PJh-Ta8Jq164VrvVm47PBbdxATp6n5H58IbCrWX8PnxpFzWtCqTwBMX_3h36_I8iwjimE0hL1pNNwYMbfx3L1XtAEGfks_LS4FOxQWnrPPEtBXrWMkImxcBBn628CfwTxisZMltlPNAnG4s7QM5GOkQlRGw4PxOYB04040iv-c8EGJvAbLQk_bgaUW5KgyfDktbZHbz4yJCbFXLQFQhc6xghyvF0HSmaXzTryy3zDpElE9QHmTu3_I52Xsg"/>
<div>
<p class="font-bold text-sm">Mike Ross</p>
<p class="text-xs text-slate-500">Fat Loss &amp; Mobility</p>
</div>
</div>
<div class="text-right">
<div class="flex items-center gap-1 text-primary">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span class="text-sm font-black">92</span>
</div>
<p class="text-[10px] text-slate-400">Streak: 12 Days</p>
</div>
</div>

<div class="flex items-center justify-between p-3 rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-900/10">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full opacity-70" data-alt="Portrait of Alex M." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmnuOkq48tK-CDV_jjtQw4-LT3YX8sxtP6_vd-WegSkChrwRBTdu9W2fmfhZjuSeNIH_s2x2K8AKnvjbwaAUBR9t7_lZ-oolPGM89p64PsNsYP-TxyzaScFlJ50h774QnROdES_eEEMtxM0gOVvIhqkAEjwbpEo9qVmL10lBdixoCQgTo9qnAY1YMTMdoJIWrvmKefHITUnnV7tI3nrzfdtyp1B-rcpvd-ovZ7KhNXaPaTcd3g-w7FLBPGX4Q1d3PjRhZr_9WuEnU"/>
<div>
<p class="font-bold text-sm">Alex Murphy</p>
<p class="text-xs text-slate-500 italic">Inactive 5+ days</p>
</div>
</div>
<div class="text-right">
<div class="flex items-center gap-1 text-red-500">
<span class="material-symbols-outlined text-sm">trending_down</span>
<span class="text-sm font-black">42</span>
</div>
<p class="text-[10px] text-red-500 font-bold uppercase tracking-tighter">Churn Risk</p>
</div>
</div>
</div>
</div>
</div>

<div class="lg:col-span-1 space-y-8">

<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<h4 class="text-lg font-bold mb-6">Muscle Group Focus</h4>
<div class="flex justify-center py-6 relative">
<div class="w-48 h-48 rounded-full border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center">
<div class="absolute inset-0 flex items-center justify-center">
<svg class="w-40 h-40 transform -rotate-90">
<circle class="text-slate-100 dark:text-slate-800" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-width="12"></circle>
<circle class="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="110" stroke-width="12"></circle>
</svg>
</div>
<div class="text-center z-10">
<span class="text-3xl font-black block">Legs</span>
<span class="text-xs text-slate-500">45% Priority</span>
</div>
</div>
</div>
<div class="mt-4 grid grid-cols-2 gap-2">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span class="text-xs font-medium">Legs (45%)</span>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary/60"></span>
<span class="text-xs font-medium">Back (20%)</span>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary/40"></span>
<span class="text-xs font-medium">Chest (20%)</span>
</div>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary/20"></span>
<span class="text-xs font-medium">Arms (15%)</span>
</div>
</div>
</div>

<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<h4 class="text-lg font-bold mb-6">Recent Milestones</h4>
<div class="space-y-6">
<div class="flex gap-4">
<div class="relative">
<div class="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500 border border-amber-100 dark:border-amber-900/30">
<span class="material-symbols-outlined text-xl">workspace_premium</span>
</div>
<div class="absolute -bottom-4 left-1/2 w-[1px] h-6 bg-slate-200 dark:border-slate-800"></div>
</div>
<div>
<p class="text-sm font-bold">New Squat 1RM</p>
<p class="text-xs text-slate-500">David G. reached 140kg (Personal Best)</p>
<span class="text-[10px] text-slate-400 uppercase font-bold mt-1 inline-block">2 hours ago</span>
</div>
</div>
<div class="flex gap-4">
<div class="relative">
<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
<span class="material-symbols-outlined text-xl">event_available</span>
</div>
<div class="absolute -bottom-4 left-1/2 w-[1px] h-6 bg-slate-200 dark:border-slate-800"></div>
</div>
<div>
<p class="text-sm font-bold">Consistency Streak</p>
<p class="text-xs text-slate-500">Emily W. completed 30 days of workouts!</p>
<span class="text-[10px] text-slate-400 uppercase font-bold mt-1 inline-block">5 hours ago</span>
</div>
</div>
<div class="flex gap-4">
<div class="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 border border-blue-100 dark:border-blue-900/30">
<span class="material-symbols-outlined text-xl">fitness_center</span>
</div>
<div>
<p class="text-sm font-bold">Body Fat Milestone</p>
<p class="text-xs text-slate-500">James L. reached sub-15% body fat goal.</p>
<span class="text-[10px] text-slate-400 uppercase font-bold mt-1 inline-block">Yesterday</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer class="mt-12 py-8 border-t border-slate-200 dark:border-slate-800 text-center">
<p class="text-slate-500 dark:text-slate-400 text-sm">© 2023 FitBiz Analytics Platform. Powered by Training Science.</p>
</footer>
  </div>
</template>

<script setup lang="ts">
// Business Analytics
</script>
