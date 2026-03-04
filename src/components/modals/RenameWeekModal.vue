<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="show"
        class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        @click.self="$emit('close')"
      >
        <div class="bg-background-dark border border-border-default rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.3)] w-full max-w-md flex flex-col overflow-hidden">
          <div class="flex items-center justify-between px-6 py-4 border-b border-border-default">
            <h3 class="font-bold text-text-primary">Cambiar nombre de la semana</h3>
            <button
              class="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-background-muted hover:text-text-primary transition-colors"
              @click="$emit('close')"
            >
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <div class="px-6 py-4 space-y-4">
            <div>
              <label class="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-2">Nombre actual</label>
              <input
                ref="inputRef"
                v-model="localValue"
                type="text"
                placeholder="ej. Semana 1, Fase de volumen..."
                class="w-full px-4 py-3 rounded-xl border border-border-default bg-background-muted text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                maxlength="60"
                @keydown.enter="handleSave"
              />
            </div>
          </div>
          <div class="flex gap-3 px-6 py-4 border-t border-border-default bg-background-muted/30">
            <button
              class="flex-1 px-4 py-2.5 rounded-xl border border-border-default text-sm font-semibold text-text-secondary hover:bg-background-muted transition-colors"
              @click="$emit('close')"
            >
              Cancelar
            </button>
            <button
              class="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-primary text-slate-900 hover:bg-primary-hover shadow-button transition-colors"
              @click="handleSave"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{
  show: boolean
  currentName: string
}>()

const emit = defineEmits<{
  close: []
  save: [name: string]
}>()

const localValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

watch(
  () => props.show,
  async (open) => {
    if (open) {
      localValue.value = props.currentName
      await nextTick()
      inputRef.value?.focus()
    }
  },
)

function handleSave() {
  const name = localValue.value.trim() || ''
  emit('save', name)
  emit('close')
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from > div,
.modal-fade-leave-to > div {
  transform: scale(0.96) translateY(8px);
}
</style>
