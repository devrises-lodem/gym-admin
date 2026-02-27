<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
    <div class="flex h-full w-full">

      <main
        class="w-96 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shrink-0">
        <div class="p-4 border-b border-slate-200 dark:border-slate-800">
          <h2 class="text-lg font-bold mb-4">Messages</h2>
          <SearchInput
            placeholder="Search clients..."
            bgClass="bg-slate-100 dark:bg-slate-800"
            inputClass="text-sm placeholder:text-slate-400"
            paddingClass="py-2.5 pl-10 pr-4"
            wrapperClass="relative group"
            iconClass="text-slate-400 group-focus-within:text-primary transition-colors"
          />
        </div>
        <FilterPills
          :items="chatFilters"
          :modelValue="activeChatFilter"
          @update:modelValue="activeChatFilter = $event"
          wrapperClass="p-4 overflow-x-auto scrollbar-hide"
        />
        <div class="flex-1 overflow-y-auto scrollbar-hide">
          <!-- Active conversation -->
          <div class="p-4 flex items-start gap-4 bg-primary/5 border-l-4 border-primary cursor-pointer">
            <div class="relative shrink-0">
              <img class="h-12 w-12 rounded-full object-cover" data-alt="Active client profile alexandra"
                :src="conversations[0].img" />
              <span
                class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-primary border-2 border-white dark:border-slate-900"></span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline">
                <h3 class="text-sm font-bold truncate">{{ conversations[0].name }}</h3>
                <span class="text-[10px] text-slate-400 uppercase font-medium">{{ conversations[0].time }}</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">{{ conversations[0].preview }}</p>
              <div class="mt-2" v-if="conversations[0].badge">
                <StatusBadge :label="conversations[0].badge" :variant="conversations[0].badgeVariant as any" />
              </div>
            </div>
          </div>

          <!-- Other conversations -->
          <div v-for="conv in conversations.slice(1)" :key="conv.name"
            class="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer border-b border-slate-100 dark:border-slate-800"
            :class="conv.containerClass">
            <div class="relative shrink-0">
              <img class="h-12 w-12 rounded-full object-cover" :class="conv.imgClass" :data-alt="conv.alt"
                :src="conv.img" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline">
                <h3 class="text-sm font-bold truncate" :class="conv.nameClass">{{ conv.name }}</h3>
                <span class="text-[10px] text-slate-400 uppercase font-medium">{{ conv.time }}</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">{{ conv.preview }}</p>
              <div class="mt-2" v-if="conv.badge">
                <StatusBadge :label="conv.badge" :variant="(conv.badgeVariant as any)" />
              </div>
            </div>
            <div v-if="conv.unread" class="shrink-0 flex flex-col items-center gap-1">
              <span
                class="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-slate-900">{{ conv.unread }}</span>
            </div>
          </div>
        </div>
      </main>

      <section class="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
        <header
          class="h-20 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm z-10">
          <div class="flex items-center gap-4">
            <img class="h-10 w-10 rounded-full object-cover border border-slate-200"
              data-alt="Alexandra Smith active chat header"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsyFjXZS4QtGqUFCvPH2MVCUPZo4zj87LwEKUbBcTbm5SsFiS9MbitXxQRt2g44i-kVEFGsx0_799GKm_ntRA5YUcSK45FjzBfiTMYXXtUEUoF0droHkqlJNk1B5UdrsRmbztvB9yD-KIChAfuyIleGOK04Ywq8DQEk80aPC6oHsga1TB33drmQllaRwhEnu_rH1TF-14hpte1p-S5uEfkFj5S7kgHwPTCZ4pHzyE_4KrvLownsD8OXo0FwG86hs_dn4SYXR9VGdk" />
            <div>
              <h2 class="text-base font-bold text-slate-900 dark:text-slate-100">Alexandra Smith</h2>
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-primary"></span>
                <p class="text-xs text-slate-500 dark:text-slate-400">Goal: <span
                    class="text-slate-900 dark:text-slate-200 font-medium">Marathon Training (Sub-4h)</span></p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button
              class="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
              <span class="material-symbols-outlined">call</span>
            </button>
            <button
              class="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
              <span class="material-symbols-outlined">videocam</span>
            </button>
            <div class="w-px h-6 bg-slate-200 dark:border-slate-800 mx-1"></div>
            <button
              class="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
              <span class="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </header>

        <div class="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
          <div class="flex justify-center">
            <span
              class="px-4 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Yesterday</span>
          </div>

          <!-- Received text message -->
          <div class="flex items-end gap-3 max-w-[70%]">
            <div class="shrink-0 mb-1">
              <img class="h-8 w-8 rounded-full object-cover" data-alt="Alexandra profile message"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI8P-MDeqqfPF5yjXiPdyDyLzs56QJ2t0lj7yYkR7Uadt38vWTHO11spDhJ6g9VnzgRV0zKelzba50iQhy9UHKRwsFpR4q2qL72FNwKqjgF46AJXI-R60C5Gy0CnQjTkRnhETkBJM5XLh7LQjNPXEThiENVdSt4sb2q9zh2ymjADLtwxBGGh4ShskAe58cPg7peYjvWGIjZ1ZgZqi2ZID2uyiLaPTutm-fQGoOuIo9vqPLZkTX2HB0v9Q_nUIFc4i-453jddZxFYQ" />
            </div>
            <div class="flex flex-col gap-1">
              <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none shadow-sm text-sm leading-relaxed">
                Hey Coach! I finished the 10k run this morning. Pace was around 5:45/km.
              </div>
              <span class="text-[10px] text-slate-400 font-medium ml-1">08:32 AM</span>
            </div>
          </div>

          <!-- Sent text message -->
          <div class="flex flex-col items-end gap-1 max-w-[70%] self-end">
            <div
              class="bg-primary text-slate-900 p-4 rounded-2xl rounded-br-none shadow-sm text-sm leading-relaxed font-medium">
              That's a solid pace for a recovery run, Alexandra! How are the knees feeling? Any soreness after the
              elevation gain?
            </div>
            <div class="flex items-center gap-1.5 mr-1">
              <span class="text-[10px] text-slate-400 font-medium">09:15 AM</span>
              <span class="material-symbols-outlined text-[14px] text-primary">done_all</span>
            </div>
          </div>

          <!-- Audio message -->
          <div class="flex items-end gap-3 max-w-[70%]">
            <div class="shrink-0 mb-1">
              <img class="h-8 w-8 rounded-full object-cover" data-alt="Alexandra profile message"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYfphUGuVza-gAk8PY8XZTI2Yq_-7kC-rXyeITVx_BNjVeyvMzlSez9eqbWsEDZomYAtZt4j8J4FozVVoZkLiUea4I7S1fF5mvyUjY2EGszLOUaGRF8U-fO5auSnqNThfko7rXJqtDl8MgYrT-Y_UsBMLJbqfsDYAztPB4Ogqr1poBMNvjRkeWv9fxwn_tsw7kVmzuxVzfKsLShHtk4Vwyzl5uso_C8LHTpzt5wnI_KDuDhJrmZpGdmGj3udHMSp3GJHJsafJldyQ" />
            </div>
            <div class="flex flex-col gap-1 w-full">
              <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none shadow-sm">
                <div class="flex items-center gap-3">
                  <button class="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span class="material-symbols-outlined">play_arrow</span>
                  </button>
                  <div class="flex-1 flex items-center gap-0.5 h-6">
                    <div v-for="(h, i) in audioWaveform" :key="i"
                      class="w-1 rounded-full"
                      :class="i < 8 ? 'bg-primary' : 'bg-primary/20'"
                      :style="{ height: h }"></div>
                  </div>
                  <span class="text-xs font-mono text-slate-500">0:24</span>
                </div>
              </div>
              <span class="text-[10px] text-slate-400 font-medium ml-1">09:45 AM</span>
            </div>
          </div>

          <div class="flex justify-center">
            <span
              class="px-4 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Today</span>
          </div>

          <!-- Received message today -->
          <div class="flex items-end gap-3 max-w-[70%]">
            <div class="shrink-0 mb-1">
              <img class="h-8 w-8 rounded-full object-cover" data-alt="Alexandra profile message"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANFWBZzdhrSFYoSFv2LYFWO38EgX-YHuYtfl8MfawkB6DkpFE5rC7f2-utsoXMDoMq-hFvxdVAccHXTnb5MzAROdBpcPcGfsnxLzFSMr6RiPU1WIisg0W3YfKu6mwTK8k_cmtDpiSmyhsVmwbQPhCXPHoZmLjQwayXUTTN6i33LVWOCZh2_-5_ozxF8KenMC3ZP7Imm9r6BfsnISVYa4rBTsJEG8MFnnKXEXR9OQcmHguRXyVQnljUQvM8wCzTME6sOLxXJJg4Hlk" />
            </div>
            <div class="flex flex-col gap-1">
              <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none shadow-sm text-sm leading-relaxed">
                I just finished the upper body session, feeling great! Also, I logged my lunch. Can you check if the
                protein intake is okay for today?
              </div>
              <span class="text-[10px] text-slate-400 font-medium ml-1">02:14 PM</span>
            </div>
          </div>

          <!-- Sent file message -->
          <div class="flex flex-col items-end gap-1 max-w-[70%] self-end">
            <div
              class="bg-primary text-slate-900 p-1.5 rounded-2xl rounded-br-none shadow-sm flex flex-col gap-1.5 overflow-hidden">
              <div class="bg-white/20 p-3 rounded-xl flex items-center gap-3">
                <div class="h-10 w-10 flex items-center justify-center bg-white rounded-lg text-primary">
                  <span class="material-symbols-outlined">description</span>
                </div>
                <div class="flex-1 min-w-0 pr-4">
                  <p class="text-xs font-bold truncate">Nutritional_Plan_V2.pdf</p>
                  <p class="text-[10px] opacity-70">1.2 MB • PDF File</p>
                </div>
                <button class="p-1 text-slate-900">
                  <span class="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>
              <div class="px-3 py-2 text-sm">
                Here's your updated plan! I increased the protein for training days.
              </div>
            </div>
            <div class="flex items-center gap-1.5 mr-1">
              <span class="text-[10px] text-slate-400 font-medium">Just now</span>
              <span class="material-symbols-outlined text-[14px] text-slate-400">check</span>
            </div>
          </div>
        </div>

        <footer class="p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl">
            <button class="p-2.5 rounded-xl text-slate-500 hover:text-primary transition-colors">
              <span class="material-symbols-outlined">add_circle</span>
            </button>
            <button class="p-2.5 rounded-xl text-slate-500 hover:text-primary transition-colors">
              <span class="material-symbols-outlined">mood</span>
            </button>
            <input class="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-2 placeholder:text-slate-500"
              placeholder="Type a message to Alexandra..." type="text" />
            <div class="flex items-center gap-1 pr-1">
              <button class="p-2.5 rounded-xl text-slate-500 hover:text-primary transition-colors">
                <span class="material-symbols-outlined">mic</span>
              </button>
              <button
                class="h-10 w-10 flex items-center justify-center bg-primary text-slate-900 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                <span class="material-symbols-outlined font-bold">send</span>
              </button>
            </div>
          </div>
        </footer>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import FilterPills from '@/components/ui/FilterPills.vue'
import StatusBadge from '@/components/ui/StatusBadge.vue'

const chatFilters = ['All', 'Unread', 'High Priority', 'New Activity']
const activeChatFilter = ref('All')

const audioWaveform = [
  '2px', '4px', '6px', '3px', '5px', '7px', '4px', '2px',
  '3px', '5px', '4px', '6px', '2px', '4px', '3px'
]

const conversations = [
  {
    name: 'Alexandra Smith', time: '2m ago',
    preview: 'I just finished the upper body session, feeling great!',
    badge: 'Training Now', badgeVariant: 'primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf1LUCfFjXKxwtz5YcslbFAphTxxSZTIsza8wEZmZ_vdqxpv1sxaZXG998oWKShVwmZUzmZsbkQ7GIR_Z_sUf4YdBMhS-mGcHgYlR_QmdRwoHlHCDw-ziK_dNtZSMQp_CLOReqY39wv8uMcUpOX8FigTESjIkLHpCB85b8Gp67ZWD9QBKn-SIdGIDlvE85x6qdiCYaZ07QDXYcdKpcXX-wT14Q9oq0av2smwD1NDHKWbtJOeMD0wHSly1Hck9HTEg3scgBak4kbGA',
    alt: 'Active client profile alexandra',
    containerClass: '', imgClass: '', nameClass: '', unread: 0
  },
  {
    name: 'James Wilson', time: '1h ago',
    preview: 'Can we reschedule tomorrow\'s session to 5 PM?',
    badge: 'Meal Logged', badgeVariant: 'warning',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9JPE2Px7eJ14x1TflpAd3F8cnacmElthT4tRzPrcpD9agQoNBTCT9Nz37TBaMUbQclR_qWWvtVo611HJPOl5fy5wX3a-pcSDhiYOLVrOvf-bqq6qZemYqcx-T51vnLHHp1liXip3b4GdtyqVpx8BegVaWzjjS-MhXGD-Prq2dBlUMwWCUdLrgeDGi99TaH5zCiYx_BiMlW5q48tjPC_oGJ431nznxoapu3v6ILROlw-2MDAWfxAAv6ekeRTdp38VbCO6-5Rnuuao',
    alt: 'Client profile image of James',
    containerClass: '', imgClass: '', nameClass: '', unread: 2
  },
  {
    name: 'Sarah Connor', time: 'Yesterday',
    preview: 'The meal plan is working really well so far!',
    badge: '', badgeVariant: 'primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnE8zsEuvmCoMBIN30RWpnJ8bOJ5M_Y-s34fEGUG23cwbGQ1dyiDtiWlecD6PAOU87sSznPyv61OGYGlOmvgyuQzKKHH5YxspOwNkTim4zj0DaGcGGc7mXjQuK85X5qbXABZiId8tERrluu_zpI1ORDHcxaM43uGlfx2VEJk3GVTDXLzw8ERsHRqAOV20Z0l06xtioQ86b1EwGk78HSQvEYbylroJWB2fZgNYrO0MhHQHaXxiuokIVKuR4EMpLeQTsNbrWrzVntU4',
    alt: 'Client profile image of Sarah',
    containerClass: 'opacity-70', imgClass: 'grayscale', nameClass: '', unread: 0
  },
  {
    name: 'David Martinez', time: '2d ago',
    preview: 'Injury update: My knee is feeling much better.',
    badge: 'High Priority', badgeVariant: 'danger',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb2dOuTTOl_XbuTlOGtLP4PCcjFBL_Q3gTUuYFst19PustxpnUUOUCu8cdeffsQDBuiauJeiL5waeKeXtENeKumzsWdqgKwMPuCyIBCMHNcir2kG05TIayw_m3U1NrIxDLb2vvZq2VqnNtLEaVwBrJjr-NMRFdoVfl5cLeISn0ua3l_bUxterDWvCZmY7efQ_tefltDVHU72Dvk7ZNHcR9SX9OYM4w4I3FWUzPFm0zKTZzZh2phckSaa7cnrRR1cMxqS25lnPM_-k',
    alt: 'Client profile image of David',
    containerClass: '', imgClass: '', nameClass: 'text-red-500', unread: 0
  }
]
</script>
