<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
<div class="layout-container flex h-full flex-col overflow-hidden">
<header class="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-3 bg-white dark:bg-slate-900">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-primary">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">FitTrain Pro</h2>
</div>
</div>
<div class="flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Dashboard</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Clients</a>
<a class="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Exercises</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Workouts</a>
</nav>
<div class="flex items-center gap-3">
<button class="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeh_awAt5qTIPPBL605cVeskwOTvxf44URrFBTb5lkLX_sL-YD4A5eHFey10bu1_1_oaLYpxUXjl3xAE1aJ5nbJ6zZbcdxSh8Qg8Texu8-nStr43lzL3clLZGZ2fDQjZ7pB1Mi-SDTDZdB3ylPoa-tFkRjFu0wqK1Bx80dJ4AUYot3JBHeMxAaxr38A0buZ9F-KHSV4BuHP2ytirf6fz3R6cswfFI-RWVWou81VhhNHYnXp-kGizqXNfSzCN0CKjDVSjZwurq7ubU");'></div>
</div>
</div>
</header>
<main class="flex-1 flex flex-col overflow-hidden">
<div class="flex shrink-0 items-center justify-between px-10 py-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-4">
<a class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors" href="#">
<span class="material-symbols-outlined">arrow_back</span>
</a>
<h1 class="text-2xl font-black text-slate-900 dark:text-slate-100">Barbell Back Squat</h1>
<span class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">Draft</span>
</div>
<div class="flex items-center gap-3">
<button class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Preview
                    </button>
<button class="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-slate-900 text-sm font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]">
<span class="material-symbols-outlined text-[18px]">save</span>
<span>Save Changes</span>
</button>
</div>
</div>
<div class="flex-1 flex overflow-hidden">
<div class="flex-1 p-8 overflow-y-auto scrollbar-hide bg-slate-50 dark:bg-slate-950">
<div class="max-w-4xl mx-auto space-y-8">
<div class="space-y-4">
<h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Instructional Video</h3>
<div class="relative aspect-video w-full rounded-2xl bg-black overflow-hidden shadow-2xl group cursor-pointer">
<div class="absolute inset-0 bg-center bg-cover opacity-60" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRc00UI-pnZ9xXv8xv7GcQl2K9er7oXVhV3eD6tHmXB41c09_5VvXiN3OHaQhdtq9qi1ENv8qyjgfOKgszKm012gL4O-D5i5TZ6cD3y0DFCIuKYGnj3blOXl5eeXz_xljSvuZmBxVKl3BUxYoY43Rts4OX9_OjRkV9OesI2Al0nZKLoyMVtw3pL7ERqLaOziyUXSEpseoGkFxKm8PJ1M-34ypk4K7K890XKDVSKg0JKynVzNIrJqg5Txboad4qvMgyTYtWN_z6AB8");'></div>
<div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
<div class="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-slate-900 transition-transform group-hover:scale-110">
<span class="material-symbols-outlined text-4xl fill-1">play_arrow</span>
</div>
<p class="text-white font-medium text-sm">Click to play preview</p>
</div>
<div class="absolute bottom-6 right-6 flex gap-2">
<button class="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-xs font-medium hover:bg-white/20 transition-colors">Replace Video</button>
<button class="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-xs font-medium hover:bg-white/20 transition-colors">Edit Captions</button>
</div>
</div>
</div>
<div class="space-y-4">
<div class="flex items-center justify-between">
<h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Recommended Variations</h3>
<button class="flex items-center gap-1 text-primary text-sm font-bold hover:underline">
<span class="material-symbols-outlined text-[18px]">add</span>
                                    Add Variation
                                </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
<div class="flex justify-between mb-3">
<input class="bg-transparent border-none p-0 text-sm font-bold text-slate-900 dark:text-slate-100 focus:ring-0 w-full" type="text" value="Hypertrophy Focus"/>
<span class="material-symbols-outlined text-slate-400 text-[20px] cursor-pointer">drag_indicator</span>
</div>
<div class="flex items-center gap-3">
<div class="flex-1">
<label class="block text-[10px] uppercase text-slate-400 font-bold mb-1">Sets x Reps</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded text-xs focus:ring-primary" type="text" value="4 sets of 10-12 reps"/>
</div>
<div class="flex-1">
<label class="block text-[10px] uppercase text-slate-400 font-bold mb-1">Rest</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded text-xs focus:ring-primary" type="text" value="90s"/>
</div>
</div>
</div>
<div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
<div class="flex justify-between mb-3">
<input class="bg-transparent border-none p-0 text-sm font-bold text-slate-900 dark:text-slate-100 focus:ring-0 w-full" type="text" value="Strength Peak"/>
<span class="material-symbols-outlined text-slate-400 text-[20px] cursor-pointer">drag_indicator</span>
</div>
<div class="flex items-center gap-3">
<div class="flex-1">
<label class="block text-[10px] uppercase text-slate-400 font-bold mb-1">Sets x Reps</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded text-xs focus:ring-primary" type="text" value="5 sets of 3-5 reps"/>
</div>
<div class="flex-1">
<label class="block text-[10px] uppercase text-slate-400 font-bold mb-1">Rest</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded text-xs focus:ring-primary" type="text" value="3-5m"/>
</div>
</div>
</div>
<div class="p-4 bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer group transition-colors">
<div class="text-center">
<span class="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">add_circle</span>
<p class="text-xs text-slate-400 mt-1">Add another</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="w-96 shrink-0 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
<div class="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
<div class="space-y-3">
<label class="text-xs font-bold text-slate-400 uppercase tracking-widest">Exercise Thumbnail</label>
<div class="relative group">
<div class="w-full aspect-video rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col items-center justify-center gap-2 group-hover:border-primary transition-colors cursor-pointer">
<div class="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRc00UI-pnZ9xXv8xv7GcQl2K9er7oXVhV3eD6tHmXB41c09_5VvXiN3OHaQhdtq9qi1ENv8qyjgfOKgszKm012gL4O-D5i5TZ6cD3y0DFCIuKYGnj3blOXl5eeXz_xljSvuZmBxVKl3BUxYoY43Rts4OX9_OjRkV9OesI2Al0nZKLoyMVtw3pL7ERqLaOziyUXSEpseoGkFxKm8PJ1M-34ypk4K7K890XKDVSKg0JKynVzNIrJqg5Txboad4qvMgyTYtWN_z6AB8");'></div>
<span class="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary z-10">photo_camera</span>
<p class="text-[10px] font-bold text-slate-500 z-10">CHANGE IMAGE</p>
</div>
</div>
</div>
<div class="space-y-6">
<div class="flex flex-col gap-2">
<label class="text-xs font-bold text-slate-400 uppercase tracking-widest">Exercise Name</label>
<input class="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-primary focus:border-primary" type="text" value="Barbell Back Squat"/>
</div>
<div class="flex flex-col gap-2">
<label class="text-xs font-bold text-slate-400 uppercase tracking-widest">Short Description</label>
<input class="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-primary focus:border-primary" placeholder="Quick overview of the movement..." type="text" value="A foundational compound lower-body exercise."/>
</div>
<div class="flex flex-col gap-2">
<label class="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Description &amp; Instructions</label>
<textarea class="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-primary focus:border-primary text-sm leading-relaxed" rows="8">1. Position the barbell across your upper back (traps) and stand with feet shoulder-width apart.
2. Engage your core, keep your chest up, and initiate the movement by sitting your hips back.
3. Lower until your thighs are at least parallel to the floor.
4. Drive through your heels to return to the starting position.</textarea>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="flex flex-col gap-2">
<label class="text-xs font-bold text-slate-400 uppercase tracking-widest">Difficulty</label>
<select class="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-primary focus:border-primary text-sm">
<option>Beginner</option>
<option>Intermediate</option>
<option selected="">Advanced</option>
<option>Expert</option>
</select>
</div>
<div class="flex flex-col gap-2">
<label class="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</label>
<select class="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-primary focus:border-primary text-sm">
<option selected="">Strength</option>
<option>Cardio</option>
<option>Mobility</option>
</select>
</div>
</div>
<div class="flex flex-col gap-3">
<label class="text-xs font-bold text-slate-400 uppercase tracking-widest">Tags</label>
<div class="flex flex-wrap gap-2 mb-2">
<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium group transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                                        Legs
                                        <button class="text-slate-400 hover:text-red-500 flex items-center transition-colors">
<span class="material-symbols-outlined text-sm">close</span>
</button>
</span>
<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium group transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                                        Compound
                                        <button class="text-slate-400 hover:text-red-500 flex items-center transition-colors">
<span class="material-symbols-outlined text-sm">close</span>
</button>
</span>
<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium group transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                                        Hypertrophy
                                        <button class="text-slate-400 hover:text-red-500 flex items-center transition-colors">
<span class="material-symbols-outlined text-sm">close</span>
</button>
</span>
</div>
<div class="relative">
<input class="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-primary focus:border-primary text-sm pr-10" placeholder="Add a tag (e.g. Quads, Powerlifting)" type="text"/>
<button class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary flex items-center">
<span class="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
</div>
</div>
<div class="pt-6 border-t border-slate-100 dark:border-slate-800">
<button class="w-full py-3 rounded-xl border border-red-100 dark:border-red-900/30 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-sm">delete</span>
                                Archive Exercise
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
  </div>
</template>

<script setup lang="ts">
// Exercise Library 2
</script>
