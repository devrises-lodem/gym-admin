<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">

        <header
          class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-3 bg-white dark:bg-slate-900">
          <div class="flex items-center gap-8">
            <div class="flex items-center gap-4 text-primary">
              <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span class="material-symbols-outlined">fitness_center</span>
              </div>
              <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">FitTrain Pro
              </h2>
            </div>
            <label class="flex flex-col min-w-40 !h-10 max-w-64">
              <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div
                  class="text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <span class="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal"
                  placeholder="Search" value="" />
              </div>
            </label>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <nav class="flex items-center gap-6">
              <a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                href="#">Dashboard</a>
              <a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                href="#">Clients</a>
              <a class="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Exercises</a>
              <a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                href="#">Workouts</a>
              <a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                href="#">Settings</a>
            </nav>
            <div class="flex items-center gap-3">
              <button
                class="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                <span class="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
                data-alt="Professional trainer profile avatar"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeh_awAt5qTIPPBL605cVeskwOTvxf44URrFBTb5lkLX_sL-YD4A5eHFey10bu1_1_oaLYpxUXjl3xAE1aJ5nbJ6zZbcdxSh8Qg8Texu8-nStr43lzL3clLZGZ2fDQjZ7pB1Mi-SDTDZdB3ylPoa-tFkRjFu0wqK1Bx80dJ4AUYot3JBHeMxAaxr38A0buZ9F-KHSV4BuHP2ytirf6fz3R6cswfFI-RWVWou81VhhNHYnXp-kGizqXNfSzCN0CKjDVSjZwurq7ubU");'>
              </div>
            </div>
          </div>
        </header>
        <main class="flex-1 flex flex-col items-center">
          <div class="layout-content-container flex flex-col max-w-[1200px] w-full px-6 py-10">

            <div class="flex flex-wrap justify-between items-end gap-4 mb-8">
              <div class="flex flex-col gap-2">
                <h1 class="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">Exercise
                  Library</h1>
                <p class="text-slate-500 dark:text-slate-400 text-base font-normal">Create, organize, and manage your
                  personalized exercise database.</p>
              </div>
              <button
                class="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-primary text-slate-900 text-base font-bold transition-transform hover:scale-[1.02]">
                <span class="material-symbols-outlined">add_circle</span>
                <span>Upload New Exercise</span>
              </button>
            </div>

            <div class="flex flex-col gap-6 mb-10">
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                  <span class="material-symbols-outlined">search</span>
                </div>
                <input
                  class="block w-full p-4 pl-12 text-sm text-slate-900 border border-slate-200 rounded-xl bg-white focus:ring-primary focus:border-primary dark:bg-slate-900 dark:border-slate-800 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Search exercises by name, equipment, or target muscle..." type="text" />
              </div>
              <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <button
                  class="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-primary text-slate-900 text-sm font-bold">All
                  Exercises</button>
                <button
                  class="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Strength</button>
                <button
                  class="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Cardio</button>
                <button
                  class="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Flexibility</button>
                <button
                  class="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Yoga</button>
                <button
                  class="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Warm-up</button>
                <button
                  class="flex h-10 shrink-0 items-center justify-center px-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Recovery</button>
                <div class="flex-1"></div>
                <button
                  class="flex h-10 shrink-0 items-center justify-center gap-2 px-4 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <span class="material-symbols-outlined text-sm">filter_list</span>
                  Filter
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Barbell squats exercise demonstration video frame"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRc00UI-pnZ9xXv8xv7GcQl2K9er7oXVhV3eD6tHmXB41c09_5VvXiN3OHaQhdtq9qi1ENv8qyjgfOKgszKm012gL4O-D5i5TZ6cD3y0DFCIuKYGnj3blOXl5eeXz_xljSvuZmBxVKl3BUxYoY43Rts4OX9_OjRkV9OesI2Al0nZKLoyMVtw3pL7ERqLaOziyUXSEpseoGkFxKm8PJ1M-34ypk4K7K890XKDVSKg0JKynVzNIrJqg5Txboad4qvMgyTYtWN_z6AB8");'>
                  </div>
                  <div
                    class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span
                      class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                  <div
                    class="absolute top-3 left-3 px-2 py-1 bg-primary text-slate-900 text-[10px] font-bold uppercase rounded leading-none">
                    Pro</div>
                </div>
                <div class="p-4 flex flex-col gap-2">
                  <div class="flex justify-between items-start">
                    <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">Barbell Back Squat</h3>
                    <span
                      class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">Strength • Legs • Quadriceps</p>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Equipment:
                      Barbell</span>
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Advanced</span>
                  </div>
                </div>
              </div>

              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Classic push-up exercise form guide image"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuEmoKXS81kxvObTwCRCSEJu7RIhI1makJ7-zQeI0pax80h-uLrfEp5xxSEOxFXBEUXDV4o3OMIqREXfq66iy8Dimo4qYqLFPLarwkNoUVPBbjW81S96OO3Y1wXcMbkG3NUKDAL9KmfK49N1Ofk6gy8G9pcYa8RI-NdmmcgjW20GO2d5j7477SzswJ4HMDlqUh862G61FUW-CKBiNBHQB-GAItqizFRFV5uSrQE10XhaLo-wA_hR-Z647P0QaEi_oKea6lPEWlapo");'>
                  </div>
                  <div
                    class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span
                      class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                </div>
                <div class="p-4 flex flex-col gap-2">
                  <div class="flex justify-between items-start">
                    <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">Standard Push-up</h3>
                    <span
                      class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">Strength • Chest • Pectorals</p>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Bodyweight</span>
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Beginner</span>
                  </div>
                </div>
              </div>

              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Dumbbell bicep curls isolation movement image"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxPrYuU1NZokOuJskp5zdwmg8sVkFu64pMcEjLY3_Ln6sizcVJrya631ffI0E9Dj8JbR1PxgPtqqflO0HglnPSReLxpAUN7wyVRo1ahg_JidQKnFLmlt2cAPpFjjvD5eMbwNOb0xMLeLzvtnJ1c_8oOh6Nq8GdlMTgUx06woOsvnuCCCf3bX9Zvja8tG3eSFma9IMH8DG2_6LuBD2H9EwLtvT4BoOSl2be1yk0LHDx_KLcVoZaUwffaN3Xcgf5QYtHU6Dsi_m8HPI");'>
                  </div>
                  <div
                    class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span
                      class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                </div>
                <div class="p-4 flex flex-col gap-2">
                  <div class="flex justify-between items-start">
                    <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">Dumbbell Bicep Curl</h3>
                    <span
                      class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">Strength • Arms • Biceps</p>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Dumbbells</span>
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Intermediate</span>
                  </div>
                </div>
              </div>

              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="High intensity running on treadmill visual"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT604rqEMOy58m7m0qTG8pwlKQF5UGU7QkqeJ24W7oFXEBVAuxHk3PBsXJ_tlJ8zoF8Wem7TaBwMyOmLA9FVLfWymGUEpRF15tcZgR_ojRCUSLNuJS-57zKxncle3Mj-r6_RgSmW-MPO1UE825ZSaaRjG7q0ydwvYVXKBY-3sEsGOF9z4moFBsD7Bj-1IoPxxvzHKATpjN6aKrbCYRC1Lb2S1X9iJMLMsQfF2Up6c9R0eT0wbEbpgJ0PXTqvxShPqrt9nuiTd-ABc");'>
                  </div>
                  <div
                    class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span
                      class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                </div>
                <div class="p-4 flex flex-col gap-2">
                  <div class="flex justify-between items-start">
                    <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">Treadmill Sprint</h3>
                    <span
                      class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">Cardio • Full Body</p>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Treadmill</span>
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">All
                      levels</span>
                  </div>
                </div>
              </div>

              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Deadlift heavy lifting technique overview"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiJuQmdHEBOmvB79UQV5beE-Brq_1zHanY9sdJbI-L-71MlLPSxEZmq5wwSOovz6i4Uv8md14ym1QQqcD4wxOcUcll9te1A08ElDIXk-k7x-OjwHvZTXUTAr58bYDkIjP1vI9z9RZmT7BVWpG9O6tzUab2E58iI4N1XrCnTT7sd3dBMkLB_I9sBvyOvZqh33tH8KNpqzIGwHeY6fp-OLgAqrclW6VELOKMw5efxbNZ6E5rBWN8d1MDboWG507MqEScEucU0wdp-Bs");'>
                  </div>
                  <div
                    class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span
                      class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                </div>
                <div class="p-4 flex flex-col gap-2">
                  <div class="flex justify-between items-start">
                    <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">Conventional Deadlift</h3>
                    <span
                      class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">Strength • Back • Hamstrings</p>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Barbell</span>
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Expert</span>
                  </div>
                </div>
              </div>

              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Plank core stabilization exercise hold"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAigWwYWpH2G1ya2He6vIzuKVfKoaWE5mOUPsO1mIgrgBE5OIuPXJBV70ZD0asDgI0Ci7xPHp5i_kWoLZ6pp1IC_jJrQm_0MR07iCEsPKq5hPLC2ijNyHza3OghrwNLHAhVhCr4uq37dKXAwdxifU4K8fJr3hYoZQ_9_0gSKdL-5HdZ-zRC4TVg969pQSBp3Cfgnqd8qHsy5IJ1IiN-4igeqKQ8UoxIPgnnjwHBU9L0mWHjH5Ey0MN-BKZV0pJgL-aewzyZXy3U3ps");'>
                  </div>
                  <div
                    class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span
                      class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                </div>
                <div class="p-4 flex flex-col gap-2">
                  <div class="flex justify-between items-start">
                    <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">Forearm Plank</h3>
                    <span
                      class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">Strength • Core • Abs</p>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Bodyweight</span>
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Beginner</span>
                  </div>
                </div>
              </div>

              <div
                class="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="relative w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Dynamic lunge walking exercise representation"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDThPyvOg6IiojwGlOjjDMNdc5JNDwItS1Wi66nTPRhL86Ukg9CGqNv9te4fcxPvctQhScLn747kWqgrSZ1VQPs3egoIX8u5Crah2XYr53ML3mmIzwPdGnCruqljEgyLlScRFL6W323Fptbv7jxqpxEZHoW-fg1i60kBtqopT3IQn7UQBdWdYEP2vnPi_EWklnTMxsnsHD4I_WJFZnb0ZN2rY0_DSbF5tA5i4NyVDm7yOysa9IoDIU2NA9Qv6gjS2EewSy47GTxb0E");'>
                  </div>
                  <div
                    class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span
                      class="material-symbols-outlined text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity">play_circle</span>
                  </div>
                </div>
                <div class="p-4 flex flex-col gap-2">
                  <div class="flex justify-between items-start">
                    <h3 class="text-slate-900 dark:text-slate-100 text-base font-bold">Walking Lunges</h3>
                    <span
                      class="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">more_vert</span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-xs font-medium">Strength • Legs • Glutes</p>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Optional
                      Weights</span>
                    <span
                      class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded">Intermediate</span>
                  </div>
                </div>
              </div>

              <div
                class="group flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl aspect-[4/5] hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                <span
                  class="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-700 group-hover:text-primary mb-2">add_circle</span>
                <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">New Exercise</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div class="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h2 class="text-2xl font-black text-slate-900 dark:text-slate-100">Upload New Exercise</h2>
          <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="p-8 overflow-y-auto max-h-[70vh]">
          <form class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Exercise Media</label>
              <div
                class="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-10 flex flex-col items-center justify-center gap-4 hover:border-primary transition-colors cursor-pointer bg-slate-50 dark:bg-slate-800/50">
                <span class="material-symbols-outlined text-4xl text-primary">cloud_upload</span>
                <div class="text-center">
                  <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Drag &amp; drop video or images</p>
                  <p class="text-xs text-slate-500">MP4, MOV, JPG or PNG (Max 50MB)</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                <input
                  class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                  placeholder="e.g. Bulgarian Split Squat" type="text" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Category</label>
                <select
                  class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary">
                  <option>Strength</option>
                  <option>Cardio</option>
                  <option>Flexibility</option>
                  <option>Yoga</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Target Muscle Groups</label>
              <input
                class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                placeholder="e.g. Quadriceps, Glutes" type="text" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Description / Instructions</label>
              <textarea
                class="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                placeholder="Briefly describe the form and movement..." rows="4"></textarea>
            </div>
          </form>
        </div>
        <div
          class="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
          <button
            class="px-6 py-2 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Cancel</button>
          <button
            class="px-8 py-2 rounded-lg text-sm font-bold bg-primary text-slate-900 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">Save
            Exercise</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Exercise Library
</script>
