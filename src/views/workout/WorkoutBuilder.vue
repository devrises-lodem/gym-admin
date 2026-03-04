<template>
  <div class="flex flex-col h-full bg-background-page">

    <!-- ── Topbar ──────────────────────────────────────────── -->
    <div class="shrink-0 bg-background-dark border-b border-border-default px-6 py-3 flex items-center gap-3">
      <div class="flex items-center gap-1.5 text-sm text-text-muted">
        <RouterLink to="/" class="hover:text-text-primary transition-colors">Templates</RouterLink>
        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
        <span class="text-text-primary font-semibold truncate max-w-xs">
          {{ templateMeta.name || 'Nueva plantilla' }}
        </span>
      </div>

      <div class="flex-1" />

      <div class="flex items-center gap-2">
        <!-- Save status -->
        <div class="flex items-center gap-1.5 text-xs mr-2 transition-colors"
          :class="{
            'text-text-muted':   saveStatus === 'saved',
            'text-amber-400':    saveStatus === 'saving' || saveStatus === 'unsaved',
            'text-red-400':      saveStatus === 'error',
          }">
          <span class="w-1.5 h-1.5 rounded-full transition-colors"
            :class="{
              'bg-primary':                saveStatus === 'saved',
              'bg-amber-400 animate-pulse': saveStatus === 'saving',
              'bg-amber-400':              saveStatus === 'unsaved',
              'bg-red-400':                saveStatus === 'error',
            }" />
          <span v-if="saveStatus === 'saved'">Guardado</span>
          <span v-else-if="saveStatus === 'saving'">Guardando…</span>
          <span v-else-if="saveStatus === 'unsaved'">Sin guardar</span>
          <span v-else>Error al guardar</span>
        </div>

        <button
          class="px-4 h-9 rounded-lg border border-border-default text-sm font-semibold text-text-secondary hover:bg-background-muted transition-colors"
          @click="handleReset"
        >Descartar</button>

        <button
          class="px-4 h-9 rounded-lg text-sm font-bold transition-colors flex items-center gap-1.5"
          :class="canPublish
            ? 'bg-primary text-slate-900 hover:bg-primary-hover shadow-button'
            : 'bg-background-muted text-text-muted cursor-not-allowed'"
          :disabled="!canPublish"
          @click="handlePublish"
        >
          <span v-if="isPublishing" class="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
          <span v-else class="material-symbols-outlined text-[16px]">publish</span>
          Publicar plantilla
        </button>
      </div>
    </div>

    <!-- ── Main layout ─────────────────────────────────────── -->
    <div class="flex flex-1 overflow-hidden">

      <!-- Left: Library -->
      <!-- <ExerciseLibraryPanel
        @lib-drag-start="onLibDragStart"
        @quick-add="handleQuickAdd"
      />*/
-->
      <!-- Center: Canvas -->
      <main class="flex-1 overflow-y-auto custom-scrollbar flex flex-col">

        <!-- Template meta form -->
        <div class="shrink-0 bg-background-dark border-b border-border-default px-6 py-4 space-y-3">
          <div>
            <label for="templateName" class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">
              Nombre de la plantilla
            </label>
            <input
              id="templateName"
              v-model="templateMeta.name"
              type="text"
              placeholder="ej. Hipertrofia Avanzada 4x semana…"
              class="w-full text-xl font-black bg-transparent border-none outline-none placeholder:text-text-muted text-text-primary focus:border-b-2 focus:border-primary pb-1 transition-colors border-b-emerald-600"
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
                  v-for="d in DIFFICULTIES"
                  :key="d.value"
                  class="px-3 h-9 rounded-lg border text-xs font-bold transition-colors"
                  :class="templateMeta.difficulty === d.value ? d.activeClass : 'border-border-default text-text-muted hover:bg-background-muted'"
                  @click="templateMeta.difficulty = d.value"
                >{{ d.value }}</button>
              </div>
            </div>

            <!-- Days/week -->
            <div>
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">Días / semana</label>
              <div class="flex gap-1">
                <button
                  v-for="n in [1,2,3,4,5,6,7]"
                  :key="n"
                  class="w-9 h-9 rounded-lg border font-mono text-sm font-bold transition-colors"
                  :class="templateMeta.daysPerWeek === n
                    ? 'bg-primary text-slate-900 border-primary'
                    : 'border-border-default text-text-muted hover:border-primary hover:text-primary hover:bg-primary-light'"
                  @click="templateMeta.daysPerWeek = n"
                >{{ n }}</button>
              </div>
            </div>

            <!-- Duration -->
            <div>
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">Duración (semanas)</label>
              <div class="flex gap-1">                
                <select
                  v-model="templateMeta.duration_weeks"
                  class="h-9 px-3 rounded-lg border border-border-default bg-background-muted text-sm text-text-primary focus:outline-none focus:border-primary transition-colors w-full"
                >
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                </select>
              </div>
            </div>

            <!-- Description -->
            <div class="flex-1 min-w-48">
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">Descripción</label>
              <input
                v-model="templateMeta.description"
                type="text"
                placeholder="Objetivos, metodología, a quién va dirigida…"
                class="w-full h-9 px-3 rounded-lg border border-border-default bg-background-muted text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                maxlength="280"
              />
            </div>
          </div>
        </div>

        <!-- Week tabs -->
        <WeekTabBar
          :weeks="weeks"
          :active-index="activeWeekIndex"
          @select="activeWeekIndex = $event"
          @add="addWeek"
          @remove="removeWeek"
          @duplicate="duplicateWeek"
          @rename="(weekId, name) => renameWeek(weekId, name)"
        />

        <!-- Sessions area -->
        <div class="flex-1 p-5 space-y-4">
          <TransitionGroup name="session-list" tag="div" class="space-y-4">
            <SessionCard
              v-for="s in sessions"
              :key="s.id"
              :session="s"
              :dragged-id="draggedExId ? String(draggedExId) : null"
              @rename="renameSession(s.id, $event)"
              @remove="removeSession(s.id)"
              @add-block="(exId, type) => addBlock(s.id, exId, type)"
              @remove-block="bid => removeBlock(s.id, bid)"
              @move-block="(bid, dir) => moveBlock(s.id, bid, dir)"
              @toggle-group="(bid, type) => toggleGroup(s.id, bid, type)"
              @update-block="(bid, f, v) => updateBlock(s.id, bid, f, v)"
              @add-set="(bid, exId) => addSet(s.id, bid, exId)"
              @remove-set="(bid, exId, sid) => removeSet(s.id, bid, exId, sid)"
              @update-set="(bid, exId, sid, patch) => updateSet(s.id, bid, exId, sid, patch)"
              @add-exercise-to-block="(bid, exId) => addExerciseToBlock(s.id, bid, exId)"
              @remove-exercise="(bid, exId) => removeExerciseFromBlock(s.id, bid, exId)"
              @drop-exercise="exId => addBlock(s.id, exId)"
              @drop-to-block="(bid) => onDropToBlock(s.id, bid)"
              @open-picker="openPicker(s.id)"
            />
          </TransitionGroup>

          <!-- Empty state -->
          <div v-if="sessions.length === 0"
            class="flex flex-col items-center justify-center py-20 gap-3 text-text-muted">
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

          <div v-else class="flex justify-center pt-2">
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
        <span class="material-symbols-outlined text-[18px]"
          :class="toastType === 'success' ? 'text-primary' : 'text-red-400'">
          {{ toastType === 'success' ? 'check_circle' : 'error' }}
        </span>
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useTemplateBuilder } from '@/composables/useTemplateBuilder'
import { TEMPLATE_CATEGORIES } from '@/data/exercises'
import ExerciseLibraryPanel  from '@/components/template-builder/ExerciseLibraryPanel.vue'
import SessionCard            from '@/components/template-builder/SessionCard.vue'
import InsightsPanel          from '@/components/template-builder/InsightsPanel.vue'
import ExercisePickerModal    from '@/components/template-builder/ExercisePickerModal.vue'
import WeekTabBar             from '@/components/template-builder/WeekTabBar.vue'

const DIFFICULTIES = [
  { value: 'Principiante', activeClass: 'bg-green-100  text-green-700  border-green-300'  },
  { value: 'Intermedio',   activeClass: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
  { value: 'Avanzado',     activeClass: 'bg-red-100    text-red-600    border-red-300'    },
] as const

const {
  templateMeta, weeks, activeWeekIndex, sessions, insights, isValid,
  saveStatus, draggedExId,
  addWeek, removeWeek, duplicateWeek, renameWeek,
  addSession, removeSession, renameSession,
  addBlock, removeBlock, moveBlock, updateBlock, toggleGroup,
  addSet, removeSet, updateSet,
  addExerciseToBlock, removeExerciseFromBlock,
  onLibDragStart, onDropToBlock,
  publishTemplate, resetBuilder,
} = useTemplateBuilder()

// ── Quick add ─────────────────────────────────────────────────
function handleQuickAdd(exId: string) {
  if (sessions.value.length === 0) addSession()
  const last = sessions.value[sessions.value.length - 1]
  if (last) addBlock(last.id, exId)
}

// ── Picker ────────────────────────────────────────────────────
const pickerVisible   = ref(false)
const pickerSessionId = ref<string | null>(null)
const pickerSessionName = computed(
  () => sessions.value.find(s => s.id === pickerSessionId.value)?.name ?? '',
)

function openPicker(sid: string) {
  pickerSessionId.value = sid
  pickerVisible.value   = true
}
function onPickerAdd(exId: string) {
  if (pickerSessionId.value) addBlock(pickerSessionId.value, exId)
  pickerVisible.value = false
}

// ── Toast ─────────────────────────────────────────────────────
const toastVisible = ref(false)
const toastMessage = ref('')
const toastType    = ref<'success' | 'error'>('success')

function showToast(msg: string, type: 'success' | 'error' = 'success') {
  toastMessage.value = msg
  toastType.value    = type
  toastVisible.value = true
  setTimeout(() => (toastVisible.value = false), 3500)
}

// ── Publish ───────────────────────────────────────────────────
const isPublishing = ref(false)
const canPublish   = computed(() => isValid.value && !isPublishing.value)

async function handlePublish() {
  if (!canPublish.value) return
  isPublishing.value = true
  const ok = await publishTemplate()
  isPublishing.value = false
  ok
    ? showToast('Plantilla publicada correctamente ✓')
    : showToast('Error al publicar. Revisa los campos requeridos.', 'error')
}

// ── Reset ─────────────────────────────────────────────────────
function handleReset() {
  if (!confirm('¿Descartar todos los cambios?')) return
  resetBuilder()
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
.toast-enter-from,  .toast-leave-to  { opacity: 0; transform: translateX(-50%) translateY(12px); }
</style>
