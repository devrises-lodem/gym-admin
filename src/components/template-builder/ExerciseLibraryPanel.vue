<template>
  <aside class="w-80 border-r border-border-default bg-background-dark flex flex-col overflow-hidden shrink-0">
    <!-- Header -->
    <div class="px-5 py-4 border-b border-border-default">
      <h2 class="text-text-primary font-bold text-sm mb-3">Biblioteca de ejercicios</h2>
      <div class="relative">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[18px]">search</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar por nombre o músculo..."
          class="w-full pl-9 pr-8 py-2 text-sm bg-background-muted border border-border-default rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
        />
        <button
          v-if="searchQuery"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
          @click="searchQuery = ''"
        >
          <span class="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </div>

    <!-- Muscle filters -->
    <div class="px-4 py-3 border-b border-border-soft space-y-2">
      <p class="text-[10px] font-bold text-text-muted uppercase tracking-wider">Músculo</p>
      <div class="flex flex-wrap gap-1.5">
        <button
          v-for="m in muscleFilters"
          :key="m.value"
          class="px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors"
          :class="activeMuscle === m.value
            ? 'bg-primary text-slate-900'
            : 'bg-background-muted text-text-secondary hover:bg-primary-light hover:text-primary'"
          @click="activeMuscle = activeMuscle === m.value ? 'all' : m.value"
        >{{ m.label }}</button>
      </div>
    </div>

    <!-- Equipment filters -->
    <div class="px-4 py-3 border-b border-border-soft space-y-2">
      <p class="text-[10px] font-bold text-text-muted uppercase tracking-wider">Equipo</p>
      <div class="flex flex-wrap gap-1.5">
        <button
          v-for="eq in eqFilters"
          :key="eq.value"
          class="px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors"
          :class="activeEq === eq.value
            ? 'bg-primary text-slate-900'
            : 'bg-background-muted text-text-secondary hover:bg-primary-light hover:text-primary'"
          @click="activeEq = activeEq === eq.value ? 'all' : eq.value"
        >{{ eq.label }}</button>
      </div>
    </div>

    <!-- Results count + clear -->
    <div class="px-4 py-2 flex items-center justify-between border-b border-border-soft">
      <span class="text-[11px] text-text-muted">{{ filtered.length }} ejercicio{{ filtered.length !== 1 ? 's' : '' }}</span>
      <button
        v-if="hasActiveFilters"
        class="text-[11px] font-semibold text-primary hover:underline"
        @click="clearFilters"
      >Limpiar filtros</button>
    </div>

    <!-- Exercise list -->
    <div class="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1.5">
      <div
        v-for="ex in filtered"
        :key="ex.id"
        class="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-border-default hover:bg-background-muted cursor-grab active:cursor-grabbing transition-all"
        draggable="true"
        @dragstart="handleDragStart($event, ex.id)"
        @click="$emit('quick-add', String(ex.id))"
      >
        <!-- Thumb -->
        <div class="w-11 h-11 rounded-lg bg-background-muted flex items-center justify-center text-xl shrink-0 relative overflow-hidden">
          <span>{{ ex.emoji }}</span>
          <div class="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="material-symbols-outlined text-white text-[14px]">play_arrow</span>
          </div>
        </div>
        <!-- Info -->
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-text-primary truncate">{{ ex.name }}</p>
          <p class="text-[11px] text-text-muted mt-0.5">{{ ex.meta }}</p>
          <span
            class="inline-block mt-1 px-1.5 py-0.5 rounded text-[10px] font-bold"
            :class="DIFF_STYLES[ex.diff]?.bg + ' ' + DIFF_STYLES[ex.diff]?.text"
          >{{ ex.diff }}</span>
        </div>
        <!-- Drag handle -->
        <span class="material-symbols-outlined text-border-default text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
      </div>

      <!-- Empty -->
      <div v-if="!filtered.length" class="flex flex-col items-center py-10 gap-2 text-text-muted">
        <span class="material-symbols-outlined text-4xl opacity-40">search_off</span>
        <p class="text-sm">Sin resultados</p>
        <button class="text-xs font-semibold text-primary hover:underline" @click="clearFilters">Limpiar filtros</button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { EXERCISES, DIFF_STYLES } from '@/data/exercises'

const emit = defineEmits<{
  'lib-drag-start': [exId: string]
  'quick-add': [exId: string]
}>()

const searchQuery = ref('')
const activeMuscle = ref('all')
const activeEq = ref('all')

const muscleFilters = [
  { value: 'chest',     label: 'Pecho'    },
  { value: 'back',      label: 'Espalda'  },
  { value: 'legs',      label: 'Piernas'  },
  { value: 'shoulders', label: 'Hombros'  },
  { value: 'arms',      label: 'Brazos'   },
  { value: 'core',      label: 'Core'     },
]

const eqFilters = [
  { value: 'barbell',    label: 'Barra'      },
  { value: 'dumbbell',   label: 'Mancuernas' },
  { value: 'machine',    label: 'Máquina'    },
  { value: 'bodyweight', label: 'Peso Corp.' },
]

const hasActiveFilters = computed(
  () => activeMuscle.value !== 'all' || activeEq.value !== 'all' || searchQuery.value.trim() !== '',
)

const filtered = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()
  return EXERCISES.filter((e) => {
    const mMatch = activeMuscle.value === 'all' || e.muscle === activeMuscle.value
    const eqMatch = activeEq.value === 'all' || e.eq === activeEq.value
    const sMatch = !q || e.name.toLowerCase().includes(q) || e.meta.toLowerCase().includes(q)
    return mMatch && eqMatch && sMatch
  })
})

function clearFilters() {
  searchQuery.value = ''
  activeMuscle.value = 'all'
  activeEq.value = 'all'
}

function handleDragStart(event: DragEvent, exId: number) {
  const id = String(exId)
  event.dataTransfer?.setData('exerciseId', id)
  if (event.dataTransfer) event.dataTransfer.effectAllowed = 'copy'
  emit('lib-drag-start', id)
}
</script>
