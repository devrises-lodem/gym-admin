<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">

        <AppHeader 
          title="FitTrain Pro"
          header-class="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          :search-class="'min-w-64'"
          :search-bg-class="'bg-slate-100 dark:bg-slate-800'"
          :search-icon-class="'text-slate-500'"
          :search-input-class="'placeholder:text-slate-500 text-sm'"
          search-placeholder="Search exercises, clients..."
          :show-actions="false"
          :nav-class="'hidden lg:flex'"
          :nav-items="['Dashboard', 'Clients', 'Exercises', 'Templates']"
          profile-image="https://lh3.googleusercontent.com/aida-public/AB6AXuDk7A44l5Dw3ZRf-4OyetbXR2K9JLv3ZkzQUsFnTAb9w9qOpdDHMHxpAE3cqEm25v4Rb1ccPPK4pNeDgX7WDA22EZsGQoKDWvT5OXePuZEJ68g5rFmLjj9E_phcD5I23MPVyrtlbD8hfTIM5QK0h5ERSlPm-F_cnwqqTPWRP7DOOaIjDYV-TDquEEPVQ29MLvq4XXx4j19KlFABbdibGck1FoLGOf0VEXD0Mgjl1i4aWFn2PO-OVDHvSye3v8LjYu4BalTW2rf47GM"
          show-action-button
          action-text="Save Template"
        />
        <main class="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">

          <aside class="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
            <div class="p-6">
              <h1 class="text-slate-900 dark:text-slate-100 text-lg font-bold">Exercise Library</h1>
              <p class="text-slate-500 text-xs font-normal mt-1 uppercase tracking-wider">342 Exercises available</p>
            </div>
            <div class="px-4 pb-4 space-y-1">
              <button class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group">
                <span class="material-symbols-outlined text-xl">fitness_center</span>
                <span class="text-sm font-semibold">All Exercises</span>
              </button>
              <button
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <span class="material-symbols-outlined text-xl">bolt</span>
                <span class="text-sm font-medium">Strength</span>
              </button>
              <button
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <span class="material-symbols-outlined text-xl">favorite</span>
                <span class="text-sm font-medium">Cardio</span>
              </button>
              <button
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <span class="material-symbols-outlined text-xl">self_improvement</span>
                <span class="text-sm font-medium">Yoga &amp; Flexibility</span>
              </button>
            </div>
            <div class="flex-1 overflow-y-auto custom-scrollbar px-4 space-y-3 pb-6">

              <div
                class="p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 cursor-grab active:cursor-grabbing group transition-all bg-slate-50 dark:bg-slate-950">
                <div class="flex gap-3">
                  <div class="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" data-alt="Person performing a barbell bench press"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsQUsZNqqzcUYbvUG39EIei3Q1mzxNc0yf8MLJf8x_Y6Z0Oh9skaF89pUeHh0OpQtbdbowaxq6xqcAlzp4_XtXAYE_na2eSdesD0Yj9NWF8_dPNKTBNECsLqLMXOhE_RBH5Idyrn3P4FeyvCW6yvEd0UfWUT1_OKs3i_DMWwjNY-rNyAYVVCqkFoYhRSulE_pXTycbkbJ_7Xn19pTR4juJ9ObX_AMDRZkGHtf9TzKHZap5hct10H85JroNM7d0kyO-2XtO1Zf4-M" />
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Barbell Bench Press</p>
                    <p class="text-xs text-slate-500">Chest • Strength</p>
                  </div>
                  <div class="ml-auto opacity-0 group-hover:opacity-100 text-primary">
                    <span class="material-symbols-outlined">add_circle</span>
                  </div>
                </div>
              </div>
              <div
                class="p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 cursor-grab transition-all bg-slate-50 dark:bg-slate-950">
                <div class="flex gap-3">
                  <div class="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" data-alt="Person performing a weighted back squat"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDePHS5VXJNPNq0FvWM_Ly-MSk63JEazWp8bW7P64D56SFXRFDerbLtl_MeXTIFnc2IopCHC5GjwKYKGBzyadMJ81dlnJ-KM0Mw87RVo-gmWgULRwDUNKrwZOtUMvwKIqC3zSIzckXXsgpnxGaFLCLWMLBq_4lbs5moyyhoQogMgsFtVsSEAPHrluH6_PpUAtsm2H-cy61tU9s_4NlUwO4XVc1JgaR4DRFAgEO9691pgIio9LKe7lAYTV9mQfhvh5tVIKMImPlSNX4" />
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Back Squat</p>
                    <p class="text-xs text-slate-500">Quads • Strength</p>
                  </div>
                </div>
              </div>
              <div
                class="p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 cursor-grab transition-all bg-slate-50 dark:bg-slate-950">
                <div class="flex gap-3">
                  <div class="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" data-alt="Close up of a kettlebell on a gym floor"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8eXiOyzUmDRSQY6E912bsesysTSKY7Uguwtlf2rm9K4FxF3HTzmXN1svGb5F_XjtHNXOAUbDFZm0PLITZ_O9UNu58DBJQrhyzZBuFCFMUb2a58b5rY-1WHXZz48CtVfRZqBqBQu7j65KBblgsvNnwU0OG3qJ7vcMfa0lIMMymsWnS_7POAA8WiNkO29zUOX1c-r5n6Pq1cF-eO_xlbIGac0cijIzS_clyKdmzMJapX4bwUL7t434j1DwSa15PcBoXmpfmA-_wdhM" />
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Deadlift</p>
                    <p class="text-xs text-slate-500">Posterior Chain • Strength</p>
                  </div>
                </div>
              </div>
              <div
                class="p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 cursor-grab transition-all bg-slate-50 dark:bg-slate-950">
                <div class="flex gap-3">
                  <div class="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" data-alt="Person performing pull ups"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQvejg7tq8ewtBQv-qljEuhPMTJPS4-b-X3Y7PuQ_Cs-ladlPGLZx6oJf6V9ePCn4whe4XHnPbeY391Ou-sy76RIY9DbBDaNRlUaqLB0wmWbQm8w_DDvo2XO9DAUhXTlQTc_cdJ_WdcCUq4ePVckFzgBzwDgRGD_hzUYozzqwnehE-sailzPJXqFNNWDIajsZF35HYVTSL7U2LHHkylNUxugpyZgpPR5mjcXoDAU0vXrrLIzQJ2ylOsCoJfVLsJi9qko_GLrSExQ8" />
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Pull Ups</p>
                    <p class="text-xs text-slate-500">Back • Bodyweight</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section
            class="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto custom-scrollbar">

            <div class="p-8 pb-4">
              <div class="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <a class="hover:text-primary" href="#">Templates</a>
                <span class="material-symbols-outlined text-xs">chevron_right</span>
                <span class="text-slate-900 dark:text-slate-100 font-medium">New Template Builder</span>
              </div>
              <div class="flex justify-between items-end gap-4">
                <div class="flex-1">
                  <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Template Name</label>
                  <input
                    class="text-3xl font-black bg-transparent border-none focus:ring-0 p-0 w-full placeholder:text-slate-300 dark:placeholder:text-slate-700"
                    placeholder="e.g. Advanced Hypertrophy Split" type="text" />
                  <p class="text-slate-500 mt-2">Design a reusable routine for your clients</p>
                </div>
                <div class="flex gap-3">
                  <button
                    class="px-5 h-11 rounded-lg border border-slate-300 dark:border-slate-700 font-semibold text-sm hover:bg-white dark:hover:bg-slate-800 transition-colors">
                    Preview Workout
                  </button>
                  <button
                    class="px-5 h-11 rounded-lg bg-primary/20 text-primary border border-primary/30 font-bold text-sm hover:bg-primary/30 transition-colors">
                    Add Section
                  </button>
                </div>
              </div>
            </div>

            <div class="p-8 pt-4 space-y-6">

              <div
                class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div
                  class="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-slate-400 cursor-move">drag_indicator</span>
                    <input
                      class="font-bold bg-transparent border-none focus:ring-0 p-0 text-slate-900 dark:text-slate-100"
                      type="text" value="Main Lift: Upper Body" />
                  </div>
                  <button class="text-slate-400 hover:text-red-500">
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>

                <div class="p-6 space-y-4">
                  <div
                    class="flex items-center gap-6 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 group hover:border-primary transition-colors">
                    <span class="material-symbols-outlined text-slate-300">drag_handle</span>
                    <div class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <img class="w-full h-full object-cover" data-alt="Bench press exercise thumbnail"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkRUJQRtGQH2Z_TF4UKpLf_VpfmbGsl9jBNyKVj2XkN21e3PG-c6wsL3N4GclYdGIb2YaVyNReakniAR9Bt_eZ8Fni0tscmWwB86kJfpwGp-Sj3CipI06ZMzahrfxvE28l4xPU8F7G8U6eQP1wo8SmyeWPYpfLgnUvv-g4lpKSGrcSVY6K6w2GZH7I6R0168lco-jTOgBJ0jtlknn9BH7KFv0Wup7fztXyKZrQI5yRRQzVaQcWfVt-EkcAPm3UQJyDoEvTgmh36tQ" />
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-slate-900 dark:text-slate-100">Barbell Bench Press</h4>
                      <p class="text-xs text-slate-500">Primary Muscle: Chest</p>
                    </div>
                    <div class="flex items-center gap-8">
                      <div class="flex flex-col items-center">
                        <span class="text-[10px] uppercase font-bold text-slate-400 mb-1">Sets</span>
                        <input
                          class="w-12 h-10 text-center rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-primary focus:border-primary"
                          type="number" value="4" />
                      </div>
                      <div class="flex flex-col items-center">
                        <span class="text-[10px] uppercase font-bold text-slate-400 mb-1">Reps</span>
                        <input
                          class="w-16 h-10 text-center rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-primary focus:border-primary"
                          type="text" value="8-12" />
                      </div>
                      <div class="flex flex-col items-center">
                        <span class="text-[10px] uppercase font-bold text-slate-400 mb-1">Rest</span>
                        <input
                          class="w-16 h-10 text-center rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-primary focus:border-primary"
                          type="text" value="90s" />
                      </div>
                      <button class="text-slate-400 hover:text-primary transition-colors">
                        <span class="material-symbols-outlined">settings</span>
                      </button>
                    </div>
                  </div>

                  <div
                    class="border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-xl py-8 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950 transition-all cursor-pointer">
                    <span class="material-symbols-outlined text-3xl mb-1">add_circle</span>
                    <span class="text-sm font-medium">Drag an exercise here or click to add</span>
                  </div>
                </div>
              </div>

              <div
                class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden opacity-80">
                <div
                  class="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <div class="flex items-center gap-3 text-slate-500">
                    <span class="material-symbols-outlined cursor-move">drag_indicator</span>
                    <input
                      class="font-bold bg-transparent border-none focus:ring-0 p-0 text-slate-600 dark:text-slate-400"
                      type="text" value="Accessory: Shoulders &amp; Triceps" />
                  </div>
                  <button class="text-slate-400">
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div class="p-12 flex flex-col items-center justify-center">
                  <span class="material-symbols-outlined text-slate-200 dark:text-slate-800 text-5xl">inventory_2</span>
                  <p class="text-slate-400 mt-2 text-sm">No exercises added to this section yet</p>
                </div>
              </div>
            </div>
          </section>

          <aside
            class="w-72 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col">
            <h3 class="font-bold text-slate-900 dark:text-slate-100 mb-6">Template Settings</h3>
            <div class="space-y-6">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Target Level</label>
                <div class="flex flex-wrap gap-2">
                  <button
                    class="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-colors">Beginner</button>
                  <button
                    class="px-3 py-1.5 rounded-full bg-primary text-background-dark text-xs font-bold">Intermediate</button>
                  <button
                    class="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-colors">Advanced</button>
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Tags</label>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 flex items-center gap-1">
                    HYPERTROPHY <button class="material-symbols-outlined text-xs">close</button>
                  </span>
                  <span
                    class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 flex items-center gap-1">
                    UPPER BODY <button class="material-symbols-outlined text-xs">close</button>
                  </span>
                  <button
                    class="px-2 py-1 rounded border border-dashed border-slate-300 dark:border-slate-700 text-[10px] font-bold text-slate-400">+
                    ADD TAG</button>
                </div>
              </div>
              <div class="pt-6 border-t border-slate-100 dark:border-slate-800">
                <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Trainer Notes</label>
                <textarea
                  class="w-full h-32 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-primary focus:border-primary text-sm p-3 placeholder:text-slate-400"
                  placeholder="Instructions for your clients..."></textarea>
              </div>
              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 mt-4">
                <span class="text-xs font-medium text-slate-600 dark:text-slate-400">Visibility: Public</span>
                <div class="w-10 h-6 bg-primary rounded-full relative flex items-center px-1">
                  <div class="size-4 bg-white rounded-full ml-auto shadow-sm"></div>
                </div>
              </div>
            </div>
            <div class="mt-auto space-y-3">
              <button
                class="w-full h-11 rounded-lg bg-primary text-background-dark font-bold text-sm shadow-lg shadow-primary/20">
                Finalize &amp; Save
              </button>
              <button
                class="w-full h-11 rounded-lg border border-red-200 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors">
                Discard Template
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>
