<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        @click.self="$emit('close')"
      >
        <div class="bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">

          <!-- Header -->
          <div class="flex items-baseline gap-2 px-6 py-4 border-b border-border-default relative">
            <h3 class="font-bold text-text-primary">Agregar ejercicio</h3>
            <span class="text-text-muted text-sm">a <em class="not-italic font-medium text-text-secondary">{{ sessionName }}</em></span>
            <button
              class="absolute right-4 top-3.5 w-7 h-7 rounded-lg flex items-center justify-center bg-background-muted text-text-muted hover:bg-red-50 hover:text-red-500 transition-colors"
              @click="$emit('close')"
            >
              <span class="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>

          <!-- Search -->
          <div class="px-5 py-3">
            <div class="relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[18px]">search</span>
              <input
                ref="inputRef"
                v-model="query"
                type="text"
                placeholder="Buscar ejercicio..."
                class="w-full pl-9 py-2.5 text-sm bg-background-muted border border-border-default rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <!-- Muscle chips -->
          <div class="px-5 pb-3 flex flex-wrap gap-1.5">
            <button
              v-for="m in muscleFilters"
              :key="m.value"
              class="px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors"
              :class="activeM === m.value
                ? 'bg-primary text-slate-900'
                : 'bg-background-muted text-text-secondary hover:bg-primary-light hover:text-primary'"
              @click="activeM = activeM === m.value ? 'all' : m.value"
            >{{ m.label }}</button>
          </div>

          <!-- Results -->
          <div class="flex-1 overflow-y-auto custom-scrollbar px-3 pb-4 space-y-1">
            <div
              v-for="ex in filtered"
              :key="ex.id"
              class="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-border-default hover:bg-background-muted cursor-pointer transition-all"
              @click="select(ex.id)"
            >
              <div class="w-11 h-11 rounded-lg bg-background-muted flex items-center justify-center text-xl shrink-0">
                {{ ex.emoji }}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-text-primary">{{ ex.name }}</p>
                <p class="text-[11px] text-text-muted mt-0.5">{{ ex.meta }}</p>
              </div>
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold shrink-0"
                :class="DIFF_STYLES[ex.diff]?.bg + ' ' + DIFF_STYLES[ex.diff]?.text"
              >{{ ex.diff }}</span>
              <button class="w-8 h-8 rounded-lg bg-primary text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                <span class="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>

            <div v-if="!filtered.length" class="flex flex-col items-center py-10 gap-2 text-text-muted">
              <span class="material-symbols-outlined text-4xl opacity-40">search_off</span>
              <p class="text-sm">Sin resultados para "{{ query }}"</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { EXERCISES, DIFF_STYLES } from '@/data/exercises'

const props = defineProps<{
  show: boolean
  sessionName: string
}>()

const emit = defineEmits<{
  close: []
  add: [exId: number]
}>()

const query = ref('')
const activeM = ref('all')
const inputRef = ref<HTMLInputElement | null>(null)

watch(() => props.show, async (val) => {
  if (val) {
    query.value = ''
    activeM.value = 'all'
    await nextTick()
    inputRef.value?.focus()
  }
})

const muscleFilters = [
  { value: 'all',       label: 'Todos'    },
  { value: 'chest',     label: 'Pecho'    },
  { value: 'back',      label: 'Espalda'  },
  { value: 'legs',      label: 'Piernas'  },
  { value: 'shoulders', label: 'Hombros'  },
  { value: 'arms',      label: 'Brazos'   },
  { value: 'core',      label: 'Core'     },
]

const filtered = computed(() => {
  const q = query.value.toLowerCase().trim()
  return EXERCISES.filter((e) => {
    const mMatch = activeM.value === 'all' || e.muscle === activeM.value
    const sMatch = !q || e.name.toLowerCase().includes(q) || e.meta.toLowerCase().includes(q)
    return mMatch && sMatch
  })
})

function select(exId: number) {
  emit('add', exId)
  emit('close')
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active { transition: all 0.2s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from > div { transform: scale(0.96) translateY(8px); }
.modal-fade-leave-to > div { transform: scale(0.96) translateY(8px); }
</style>
