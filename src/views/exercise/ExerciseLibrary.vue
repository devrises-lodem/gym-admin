<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">

        <main class="flex-1 flex flex-col items-center">
          <div class="layout-content-container flex flex-col max-w-[1200px] w-full px-6 py-10">
            <PageHeader :title="$t('exercises.exercise_library')" :subtitle="$t('exercises.create_organize_manage')">
              <template #actions>
                <RouterLink to="/exercise-details/create"
                  class="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-primary text-slate-900 text-base font-bold transition-transform hover:scale-[1.02]">
                  <span class="material-symbols-outlined">add_circle</span>
                  <span>{{ $t('exercises.upload_new_exercise') }}</span>
                </RouterLink>
              </template>
            </PageHeader>

            <div class="flex flex-col gap-6 mb-10">
              <SearchInput
                :placeholder="$t('exercises.search_exercises')"
                bgClass="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                inputClass="text-sm text-slate-900 dark:text-white focus:ring-primary focus:border-primary dark:placeholder-slate-400"
                paddingClass="p-4 pl-12"
                wrapperClass="w-full"
              />
              <FilterPills
                :items="filterItems"
                :modelValue="activeFilter"
                @update:modelValue="activeFilter = $event"
                activeClass="bg-primary text-slate-900 font-bold"
                inactiveClass="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700"
                baseClass="flex h-10 items-center justify-center px-5 rounded-full text-sm"
              >
                <div class="flex-1"></div>
                <button
                  class="flex h-10 shrink-0 items-center justify-center gap-2 px-4 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <span class="material-symbols-outlined text-sm">filter_list</span>
                  {{ $t('common.filter') }}
                </button>
              </FilterPills>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <ExerciseCard
                v-for="exercise in exercises"
                :key="exercise.name"
                :name="exercise.name"
                :image="exercise.image"
                :imageAlt="exercise.imageAlt"
                :category="exercise.category"
                :tags="exercise.tags"
                :badge="exercise.badge"
                :to="exercise.to"
              />

              <!-- New Exercise placeholder -->
              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <RouterLink to="/exercise-details/create">
                  <div
                    class="group flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl aspect-[4/5] hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                    <span
                      class="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-700 group-hover:text-primary mb-2">add_circle</span>
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">{{ $t('exercises.new_exercise') }}</p>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Upload Modal (hidden by default) -->
    <div class="hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div class="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h2 class="text-2xl font-black text-slate-900 dark:text-slate-100">{{ $t('exercises.upload_new_exercise') }}</h2>
          <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="p-8 overflow-y-auto max-h-[70vh]">
          <form class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ $t('exercises.form.exercise_media') }}</label>
              <div
                class="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-10 flex flex-col items-center justify-center gap-4 hover:border-primary transition-colors cursor-pointer bg-slate-50 dark:bg-slate-800/50">
                <span class="material-symbols-outlined text-4xl text-primary">cloud_upload</span>
                <div class="text-center">
                  <p class="text-sm font-bold text-slate-900 dark:text-slate-100">{{ $t('exercises.form.drag_drop_video_images') }}</p>
                  <p class="text-xs text-slate-500">{{ $t('exercises.form.supported_formats') }}</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ $t('exercises.form.name') }}</label>
                <input
                  class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                  :placeholder="$t('exercises.form.placeholder_name')" type="text" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ $t('exercises.form.category') }}</label>
                <select
                  class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary">
                  <option>{{ $t('exercises.categories.strength') }}</option>
                  <option>{{ $t('exercises.categories.cardio') }}</option>
                  <option>{{ $t('exercises.categories.flexibility') }}</option>
                  <option>{{ $t('exercises.categories.yoga') }}</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ $t('exercises.form.target_muscle_groups') }}</label>
              <input
                class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                :placeholder="$t('exercises.form.placeholder_muscles')" type="text" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ $t('exercises.form.description_instructions') }}</label>
              <textarea
                class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                :placeholder="$t('exercises.form.briefly_describe')" rows="4"></textarea>
            </div>
          </form>
        </div>
        <div
          class="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
          <button
            class="px-6 py-2 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">{{ $t('common.cancel') }}</button>
          <button
            class="px-8 py-2 rounded-lg text-sm font-bold bg-primary text-slate-900 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">{{ $t('exercises.upload_exercise') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import FilterPills from '@/components/ui/FilterPills.vue'
import ExerciseCard from '@/components/ui/ExerciseCard.vue'

const filterItems = ['All Exercises', 'Strength', 'Cardio', 'Flexibility', 'Yoga', 'Warm-up', 'Recovery']
const activeFilter = ref('All Exercises')

const exercises = [
  {
    name: 'Barbell Back Squat',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRc00UI-pnZ9xXv8xv7GcQl2K9er7oXVhV3eD6tHmXB41c09_5VvXiN3OHaQhdtq9qi1ENv8qyjgfOKgszKm012gL4O-D5i5TZ6cD3y0DFCIuKYGnj3blOXl5eeXz_xljSvuZmBxVKl3BUxYoY43Rts4OX9_OjRkV9OesI2Al0nZKLoyMVtw3pL7ERqLaOziyUXSEpseoGkFxKm8PJ1M-34ypk4K7K890XKDVSKg0JKynVzNIrJqg5Txboad4qvMgyTYtWN_z6AB8',
    imageAlt: 'Barbell squats exercise demonstration video frame',
    category: 'Strength • Legs • Quadriceps',
    tags: ['Equipment: Barbell', 'Advanced'],
    badge: 'Pro',
    to: ''
  },
  {
    name: 'Standard Push-up',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuEmoKXS81kxvObTwCRCSEJu7RIhI1makJ7-zQeI0pax80h-uLrfEp5xxSEOxFXBEUXDV4o3OMIqREXfq66iy8Dimo4qYqLFPLarwkNoUVPBbjW81S96OO3Y1wXcMbkG3NUKDAL9KmfK49N1Ofk6gy8G9pcYa8RI-NdmmcgjW20GO2d5j7477SzswJ4HMDlqUh862G61FUW-CKBiNBHQB-GAItqizFRFV5uSrQE10XhaLo-wA_hR-Z647P0QaEi_oKea6lPEWlapo',
    imageAlt: 'Classic push-up exercise form guide image',
    category: 'Strength • Chest • Pectorals',
    tags: ['Bodyweight', 'Beginner'],
    badge: '',
    to: ''
  },
  {
    name: 'Dumbbell Bicep Curl',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxPrYuU1NZokOuJskp5zdwmg8sVkFu64pMcEjLY3_Ln6sizcVJrya631ffI0E9Dj8JbR1PxgPtqqflO0HglnPSReLxpAUN7wyVRo1ahg_JidQKnFLmlt2cAPpFjjvD5eMbwNOb0xMLeLzvtnJ1c_8oOh6Nq8GdlMTgUx06woOsvnuCCCf3bX9Zvja8tG3eSFma9IMH8DG2_6LuBD2H9EwLtvT4BoOSl2be1yk0LHDx_KLcVoZaUwffaN3Xcgf5QYtHU6Dsi_m8HPI',
    imageAlt: 'Dumbbell bicep curls isolation movement image',
    category: 'Strength • Arms • Biceps',
    tags: ['Dumbbells', 'Intermediate'],
    badge: '',
    to: ''
  },
  {
    name: 'Treadmill Sprint',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT604rqEMOy58m7m0qTG8pwlKQF5UGU7QkqeJ24W7oFXEBVAuxHk3PBsXJ_tlJ8zoF8Wem7TaBwMyOmLA9FVLfWymGUEpRF15tcZgR_ojRCUSLNuJS-57zKxncle3Mj-r6_RgSmW-MPO1UE825ZSaaRjG7q0ydwvYVXKBY-3sEsGOF9z4moFBsD7Bj-1IoPxxvzHKATpjN6aKrbCYRC1Lb2S1X9iJMLMsQfF2Up6c9R0eT0wbEbpgJ0PXTqvxShPqrt9nuiTd-ABc',
    imageAlt: 'High intensity running on treadmill visual',
    category: 'Cardio • Full Body',
    tags: ['Treadmill', 'All levels'],
    badge: '',
    to: ''
  },
  {
    name: 'Conventional Deadlift',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiJuQmdHEBOmvB79UQV5beE-Brq_1zHanY9sdJbI-L-71MlLPSxEZmq5wwSOovz6i4Uv8md14ym1QQqcD4wxOcUcll9te1A08ElDIXk-k7x-OjwHvZTXUTAr58bYDkIjP1vI9z9RZmT7BVWpG9O6tzUab2E58iI4N1XrCnTT7sd3dBMkLB_I9sBvyOvZqh33tH8KNpqzIGwHeY6fp-OLgAqrclW6VELOKMw5efxbNZ6E5rBWN8d1MDboWG507MqEScEucU0wdp-Bs',
    imageAlt: 'Deadlift heavy lifting technique overview',
    category: 'Strength • Back • Hamstrings',
    tags: ['Barbell', 'Expert'],
    badge: '',
    to: ''
  },
  {
    name: 'Forearm Plank',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigWwYWpH2G1ya2He6vIzuKVfKoaWE5mOUPsO1mIgrgBE5OIuPXJBV70ZD0asDgI0Ci7xPHp5i_kWoLZ6pp1IC_jJrQm_0MR07iCEsPKq5hPLC2ijNyHza3OghrwNLHAhVhCr4uq37dKXAwdxifU4K8fJr3hYoZQ_9_0gSKdL-5HdZ-zRC4TVg969pQSBp3Cfgnqd8qHsy5IJ1IiN-4igeqKQ8UoxIPgnnjwHBU9L0mWHjH5Ey0MN-BKZV0pJgL-aewzyZXy3U3ps',
    imageAlt: 'Plank core stabilization exercise hold',
    category: 'Strength • Core • Abs',
    tags: ['Bodyweight', 'Beginner'],
    badge: '',
    to: ''
  },
  {
    name: 'Walking Lunges',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDThPyvOg6IiojwGlOjjDMNdc5JNDwItS1Wi66nTPRhL86Ukg9CGqNv9te4fcxPvctQhScLn747kWqgrSZ1VQPs3egoIX8u5Crah2XYr53ML3mmIzwPdGnCruqljEgyLlScRFL6W323Fptbv7jxqpxEZHoW-fg1i60kBtqopT3IQn7UQBdWdYEP2vnPi_EWklnTMxsnsHD4I_WJFZnb0ZN2rY0_DSbF5tA5i4NyVDm7yOysa9IoDIU2NA9Qv6gjS2EewSy47GTxb0E',
    imageAlt: 'Dynamic lunge walking exercise representation',
    category: 'Strength • Legs • Glutes',
    tags: ['Optional Weights', 'Intermediate'],
    badge: '',
    to: '/exercise-details/edit/1'
  }
]
</script>
