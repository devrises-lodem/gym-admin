<template>
  <div class="flex flex-col h-full bg-background-page">

    <!-- Page Topbar (inside the DashboardLayout main area) -->
    <div class="shrink-0 bg-background-dark border-b border-border-default px-6 py-3 flex items-center gap-3">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-1.5 text-sm text-text-muted">
        <RouterLink to="/" class="hover:text-text-primary transition-colors">Templates</RouterLink>
        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
        <span class="text-text-primary font-semibold truncate max-w-xs">
          {{ templateMeta.name || 'Nueva plantilla' }}
        </span>
      </div>

      <div class="flex-1" />

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5 text-xs text-text-muted mr-2">
          <span class="w-1.5 h-1.5 rounded-full bg-primary" />
          Guardado
        </div>
        <button
          class="px-4 h-9 rounded-lg border border-border-default text-sm font-semibold text-text-secondary hover:bg-background-muted transition-colors"
          @click="resetBuilder"
        >Descartar</button>
        <button
          class="px-4 h-9 rounded-lg text-sm font-bold transition-colors flex items-center gap-1.5"
          :class="isValid
            ? 'bg-primary text-slate-900 hover:bg-primary-hover shadow-button'
            : 'bg-background-muted text-text-muted cursor-not-allowed'"
          :disabled="!isValid"
          @click="publishTemplate"
        >
          <span class="material-symbols-outlined text-[16px]">publish</span>
          Publicar plantilla
        </button>
      </div>
    </div>

    <!-- Main layout: Library | Canvas | Insights -->
    <div class="flex flex-1 overflow-hidden">

      <!-- Left: Exercise Library -->
      <ExerciseLibraryPanel
        @lib-drag-start="onLibDragStart"
        @quick-add="onQuickAddFromLibrary"
      />

      <!-- Center: Canvas -->
      <main class="flex-1 overflow-y-auto custom-scrollbar flex flex-col">

        <!-- Template meta form -->
        <div class="shrink-0 bg-background-dark border-b border-border-default px-6 py-4 space-y-3">
          <div>
            <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">
              Nombre de la plantilla
            </label>
            <input
              v-model="templateMeta.name"
              type="text"
              placeholder="ej. Hipertrofia Avanzada 4x semana..."
              class="w-full text-xl font-black bg-transparent border-none outline-none placeholder:text-border-default text-text-primary focus:border-b-2 focus:border-primary pb-1 transition-colors"
              maxlength="80"
            />
          </div>

          <div class="flex flex-wrap items-end gap-4">
            <!-- Category -->
            <div>
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">Categoría</label>
              <select
                v-model="templateMeta.category"
                class="h-9 px-3 rounded-lg border border-border-default bg-background-muted text-sm text-text-primary focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>Elegir…</option>
                <option v-for="cat in TEMPLATE_CATEGORIES" :key="cat.id" :value="cat.id">
                  {{ cat.icon }} {{ cat.label }}
                </option>
              </select>
            </div>

            <!-- Difficulty -->
            <div>
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">Nivel</label>
              <div class="flex gap-1">
                <button
                  v-for="d in ['Principiante','Intermedio','Avanzado']"
                  :key="d"
                  class="px-3 h-9 rounded-lg border text-xs font-bold transition-colors"
                  :class="templateMeta.difficulty === d
                    ? d === 'Principiante' ? 'bg-green-100 text-green-700 border-green-300'
                      : d === 'Intermedio' ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                      : 'bg-red-100 text-red-600 border-red-300'
                    : 'border-border-default text-text-muted hover:bg-background-muted'"
                  @click="templateMeta.difficulty = d"
                >{{ d }}</button>
              </div>
            </div>

            <!-- Days/week -->
            <div>
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">Días / semana</label>
              <div class="flex gap-1">
                <button
                  v-for="n in [2,3,4,5,6]"
                  :key="n"
                  class="w-9 h-9 rounded-lg border font-mono text-sm font-bold transition-colors"
                  :class="templateMeta.daysPerWeek === n
                    ? 'bg-primary text-slate-900 border-primary'
                    : 'border-border-default text-text-muted hover:border-primary hover:text-primary hover:bg-primary-light'"
                  @click="templateMeta.daysPerWeek = n"
                >{{ n }}</button>
              </div>
            </div>

            <!-- Description -->
            <div class="flex-1 min-w-48">
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">Descripción breve</label>
              <input
                v-model="templateMeta.description"
                type="text"
                placeholder="Objetivos, metodología, a quién va dirigida..."
                class="w-full h-9 px-3 rounded-lg border border-border-default bg-background-muted text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                maxlength="280"
              />
            </div>
          </div>
        </div>

        <!-- Sessions area -->
        <div class="flex-1 p-5">
          <TransitionGroup name="session-list" tag="div">
            <SessionCard
              v-for="s in sessions"
              :key="s.id"
              :session="s"
              @rename="renameSession(s.id, $event)"
              @remove="removeSession(s.id)"
              @update-block="(bid, f, v) => updateBlock(s.id, bid, f, v)"
              @remove-block="(bid) => removeBlock(s.id, bid)"
              @move-block="(bid, d) => moveBlock(s.id, bid, d)"
              @toggle-group="(bid, t) => toggleGroup(s.id, bid, t)"
              @drop-exercise="(exId) => addBlock(s.id, exId)"
              @open-picker="openPicker(s.id)"
            />
          </TransitionGroup>

          <!-- Empty state -->
          <div v-if="sessions.length === 0" class="flex flex-col items-center justify-center py-20 gap-3 text-text-muted">
            <span class="material-symbols-outlined text-6xl opacity-20">assignment</span>
            <p class="text-base font-semibold text-text-secondary">Empieza tu plantilla</p>
            <p class="text-sm text-center max-w-sm">Agrega una sesión y arrastra ejercicios desde la biblioteca lateral</p>
            <button
              class="mt-2 px-5 h-10 rounded-xl bg-primary text-slate-900 font-bold text-sm hover:bg-primary-hover transition-colors shadow-button flex items-center gap-2"
              @click="addSession"
            >
              <span class="material-symbols-outlined text-[18px]">add</span>
              Primera sesión
            </button>
          </div>

          <!-- Add session button -->
          <div v-else class="flex justify-center mt-2">
            <button
              class="flex items-center gap-2 px-5 h-10 rounded-xl border-2 border-dashed border-primary-border text-sm font-semibold text-text-secondary hover:border-primary hover:text-primary hover:bg-primary-light transition-all"
              @click="addSession"
            >
              <span class="material-symbols-outlined text-[18px]">add</span>
              Agregar sesión
            </button>
          </div>
        </div>
      </main>

      <!-- Right: Insights -->
      <InsightsPanel :insights="insights" />
    </div>

    <!-- Picker modal -->
    <ExercisePickerModal
      :show="pickerVisible"
      :session-name="pickerSessionName"
      @close="pickerVisible = false"
      @add="onPickerAdd"
    />

    <!-- Toast -->
    <Transition name="toast">
      <div
        v-if="toastVisible"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-text-primary text-white text-sm font-semibold shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center gap-2"
      >
        <span class="material-symbols-outlined text-primary text-[18px]">check_circle</span>
        Plantilla publicada correctamente
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useTemplateBuilder } from '@/composables/useTemplateBuilder'
import { TEMPLATE_CATEGORIES } from '@/data/exercises'
import ExerciseLibraryPanel from '@/components/template-builder/ExerciseLibraryPanel.vue'
import SessionCard from '@/components/template-builder/SessionCard.vue'
import InsightsPanel from '@/components/template-builder/InsightsPanel.vue'
import ExercisePickerModal from '@/components/template-builder/ExercisePickerModal.vue'

const {
  templateMeta, sessions, insights, isValid,
  addSession, removeSession, renameSession,
  addBlock, removeBlock, updateBlock, toggleGroup, moveBlock,
  onLibDragStart: _onLibDragStart,
} = useTemplateBuilder()

function onLibDragStart(exId: number) {
  _onLibDragStart(exId)
}

function onQuickAddFromLibrary(exId: number) {
  if (sessions.value.length === 0) addSession()
  const last = sessions.value[sessions.value.length - 1]
  addBlock(last.id, exId)
}

const pickerVisible = ref(false)
const pickerSessionId = ref<string | null>(null)
const pickerSessionName = computed(
  () => sessions.value.find((s) => s.id === pickerSessionId.value)?.name ?? '',
)

function openPicker(sid: string) {
  pickerSessionId.value = sid
  pickerVisible.value = true
}

function onPickerAdd(exId: number) {
  if (pickerSessionId.value) addBlock(pickerSessionId.value, exId)
}

function resetBuilder() {
  if (!confirm('¿Descartar todos los cambios?')) return
  templateMeta.value = { name: '', category: '', difficulty: 'Intermedio', description: '', daysPerWeek: 3 }
  sessions.value = []
}

const toastVisible = ref(false)
function publishTemplate() {
  if (!isValid.value) return
  console.log('Published:', { template: templateMeta.value, sessions: sessions.value })
  toastVisible.value = true
  setTimeout(() => (toastVisible.value = false), 3500)
}
</script>

<style scoped>
.session-list-enter-active { animation: slideUp 0.2s ease-out; }
.session-list-leave-active { animation: slideUp 0.15s ease-in reverse; }
@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.toast-enter-active, .toast-leave-active { transition: all 0.25s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(-50%) translateY(12px); }
</style>
