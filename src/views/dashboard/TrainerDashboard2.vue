<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="flex h-screen overflow-hidden">
<aside class="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col justify-between p-6">
<div class="flex flex-col gap-8">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary">
<img alt="Coach Alex" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlHdvcyJqkpaSAyLvIm3ppDWWLzMA27fEVhvZf_TiL5WpWpDHXMzLvJg4VMMTtC2gMd174_6V1mFxjRICFSFOWDDfYEMZsJ0ljnKBwWAcVidNMJI9oxFdu_wT7oM4bjDVNxndkS99-4TdoOEK3ri-TR-d9YxbWOX_mYavpDhyWyR9MUFPfDKbu8cozCMI6fQpMXJHxN0Ke_iwuOXakrnCVWGFkruC6UIfWlA4ht4lvdbqRv4y7nSiWtJKKHSi3_jwxnkFT5hDWT40"/>
</div>
<div class="flex flex-col">
<h2 class="text-sm font-bold text-slate-900 dark:text-slate-100">Coach Alex</h2>
<p class="text-xs font-medium text-primary">Elite Fitness Pro</p>
</div>
</div>
<nav class="flex flex-col gap-2">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-slate-900 font-semibold" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm">Clients</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">exercise</span>
<span class="text-sm">Workouts</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">calendar_today</span>
<span class="text-sm">Schedule</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-sm">Analytics</span>
</a>
</nav>
</div>
<div class="flex flex-col gap-4">
<button class="w-full bg-primary text-slate-900 text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:brightness-95 transition-all">
<span class="material-symbols-outlined text-xl">person_add</span>
<span>Add Client</span>
</button>
<div class="flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800 pt-4">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm">Settings</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined">help</span>
<span class="text-sm">Support</span>
</a>
</div>
</div>
</aside>
<main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark px-8 py-10">
<header class="flex flex-wrap justify-between items-end gap-4 mb-10">
<div class="flex flex-col gap-2">
<h1 class="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100">Dashboard Overview</h1>
<p class="text-slate-500 dark:text-slate-400 text-lg">Welcome back! Here's what's happening with your clients today.</p>
</div>
<div class="flex gap-3">
<button class="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors">
<span class="material-symbols-outlined">history</span>
<span>View Logs</span>
</button>
<button class="px-5 py-2.5 bg-primary/20 text-slate-900 dark:text-primary font-bold rounded-lg flex items-center gap-2 hover:bg-primary/30 transition-colors border border-primary/20">
<span class="material-symbols-outlined">add_circle</span>
<span>Create Routine</span>
</button>
</div>
</header>
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Clients</p>
<span class="material-symbols-outlined text-primary">groups</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">24</p>
<div class="flex items-center gap-1 text-primary text-sm font-semibold mt-1">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>+12% vs last month</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Workouts Done</p>
<span class="material-symbols-outlined text-primary">fitness_center</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">142</p>
<div class="flex items-center gap-1 text-primary text-sm font-semibold mt-1">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>+8% this week</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">New Leads</p>
<span class="material-symbols-outlined text-primary">person_search</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">5</p>
<div class="flex items-center gap-1 text-primary text-sm font-semibold mt-1">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>+20% this week</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
<div class="flex items-center justify-between">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Revenue</p>
<span class="material-symbols-outlined text-primary">payments</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-slate-100">$4,250</p>
<div class="flex items-center gap-1 text-red-500 text-sm font-semibold mt-1">
<span class="material-symbols-outlined text-sm">trending_down</span>
<span>-2% from goal</span>
</div>
</div>
</section>
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Recent Client Activity</h2>
<button class="text-primary text-sm font-bold hover:underline">View All Activity</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50">
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Client Name</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Activity</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Time</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<img alt="John Doe" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPYkmgs1l7RPhUSb8PtXnNKMIJ5UuZE2zAvWcakf6mpnmtEUknJOuvxfsGdKzHwUMKjG4q9P45S9RZdrGebyo-tIkpmqEzsZWmvATAxFYw_U2BW2SACS9ZRvFVhMI80gwJf9Q-usQlebPtFjgacNZ17oRIwqYh9Z0Hws0kH2Blbs0uOIPo96rkNtC-ojsHmsgGxETeXa4UhEjjVt1B08QEQQYjPIG71D2NBYq5hrZGhRt9FfAsugI_pvjSfna-zTMkDhDHzs6HmU"/>
</div>
<span class="text-sm font-medium text-slate-900 dark:text-slate-100">John Doe</span>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">Completed Lower Body Blast</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                Finished
                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2 hours ago</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-right">
<div class="flex items-center justify-end gap-3">
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Audio Note">
<span class="material-symbols-outlined text-[20px]">mic</span>
</button>
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Emoji">
<span class="material-symbols-outlined text-[20px]">mood</span>
</button>
<div class="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button class="text-primary hover:text-primary/80 font-bold">Feedback</button>
</div>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<img alt="Jane Smith" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA84vVB0UHozVGet9rBPNFONlFvLjgpAXsd4WcxDGks3TR9rfl2_3MGZgKxuI52AteK73wXWU8KsSaeSLQNXoBZWuqXYMIi5ZXIQC2OT_F3N7Bsf5M99QPGMu269NvCpfwsw7IF19IMx-62aQxXSYijel43TSPwxmb4v5fOeJBcxlm4bRZxPuU9X-xiSA-WtMS8PJNiu3dhfMfIUvej6m-lkWGOOkSa8Ms2BUa7eLUU1elMUg_k0RlDMZZYMcrdOM-h7j0yTMyUWpU"/>
</div>
<span class="text-sm font-medium text-slate-900 dark:text-slate-100">Jane Smith</span>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">Logged daily nutrition logs</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                                Updated
                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">5 hours ago</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-right">
<div class="flex items-center justify-end gap-3">
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Audio Note">
<span class="material-symbols-outlined text-[20px]">mic</span>
</button>
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Emoji">
<span class="material-symbols-outlined text-[20px]">mood</span>
</button>
<div class="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button class="text-primary hover:text-primary/80 font-bold">View</button>
</div>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<img alt="Mike Ross" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWnNIdXylT9-60cvjRG0LaYcouGTer5a8F1I03QEfm8nzXSJv69P2RglVs3cU5PHySvb5FhkIvcmnEYD0BYKnfmekRKkN_wVSPcDX3pmg5l452KJbcPMfZiFpGDILabNRPvjnD0Ot5ul5scXqFqQ0AMygmkdw9Ac4lCpZc-P7ZuPh4eCdmIWhJo_-OyjsSot6kLZfYVD-1rF0QkI9s1G_p5iwLQguXBUcP_ROkNa7klqfzTcv5EWIyEtWlYtnvj020o441Br6hIeI"/>
</div>
<span class="text-sm font-medium text-slate-900 dark:text-slate-100">Mike Ross</span>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">Missed Morning Yoga session</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                                Alert
                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">Yesterday</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-right">
<div class="flex items-center justify-end gap-3">
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Audio Note">
<span class="material-symbols-outlined text-[20px]">mic</span>
</button>
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Emoji">
<span class="material-symbols-outlined text-[20px]">mood</span>
</button>
<div class="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button class="text-primary hover:text-primary/80 font-bold">Message</button>
</div>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<img alt="Rachel Zane" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEMOH9baPT-RMWpl2r92ePh7IPibx9cCWkUoxDBDEKJPQGChmavamXw_I_Cc6qWzRmtubVmn0rZIMLD1cvO5hoeNocPvStnh_pjlRKiRrxPNL4NQKe423dR87wV_pP8NlF786TcsWiuhxnjgSopvfTeQYw4QRoTMrHsW71IuDGu4xen2a-uYiIhvuyM78gbb2Y_gIuiApwV8S7SmYiiC2qFtx_CKn6Fu32L46Ga-70j_zfGqWlcLLij-hOSTjJap2kTqn9Uyc8nyo"/>
</div>
<span class="text-sm font-medium text-slate-900 dark:text-slate-100">Rachel Zane</span>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">Started 30-Day Shred Program</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/20 text-slate-900 dark:text-primary">
                                Active
                            </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">Yesterday</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-right">
<div class="flex items-center justify-end gap-3">
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Audio Note">
<span class="material-symbols-outlined text-[20px]">mic</span>
</button>
<button class="text-slate-400 hover:text-primary transition-colors flex items-center" title="Send Emoji">
<span class="material-symbols-outlined text-[20px]">mood</span>
</button>
<div class="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button class="text-primary hover:text-primary/80 font-bold">Details</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
<div class="p-6 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-between group cursor-pointer hover:bg-primary/20 transition-colors">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-slate-900">
<span class="material-symbols-outlined">description</span>
</div>
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">New Training Plan</h3>
<p class="text-sm text-slate-600 dark:text-slate-400">Assign a new routine to a client</p>
</div>
</div>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<div class="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">video_call</span>
</div>
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">Schedule Session</h3>
<p class="text-sm text-slate-600 dark:text-slate-400">Book a 1-on-1 video training call</p>
</div>
</div>
<span class="material-symbols-outlined text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors">arrow_forward</span>
</div>
</section>
</main>
</div>
  </div>
</template>

<script setup lang="ts">
// Trainer Dashboard
</script>
