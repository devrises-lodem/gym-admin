<template>
  <div class="bg-gray-50 min-h-screen flex flex-col align-center w-full">
    <!-- Header -->
    <nav class="bg-white w-full p-2 shadow-xl">
      <div class="grid grid-cols-10 items-center">
        <div class="align-center items-center align-center cursor-pointer">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </div>
        <div class="text-center col-span-8">
          <div class="flex flex-col items-center mb-2">
            <h1 class="text-xl sm:text-2xl font-bold text-black mb-0">Agregar Medidas</h1>
          </div>
        </div>
        <div class="items-center align-end cursor-pointer">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
      </div>
    </nav>

    <!-- Body Section -->
    <div class="w-full align-items-center">
      <!-- Customer Section -->
      <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-500/50 p-6 m-4 mb-6">
        <div class="grid grid-cols-3 space-y-4">
          <!-- Avatar Column -->
          <div class="items-center">
            <div class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon="fa-solid fa-user" class="text-gray-600 text-xl" />
            </div>
          </div>

          <!-- Customer Info Column -->
          <div class="col-span-2">
            <div class="space-y-2 font-bold">
              <label class="text-sm font-bold text-green">CLIENTE</label>
              <div class="text-sm font-semibold text-gray-900">Juan Pérez</div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">ID #001234 · Plan Premium</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Metrics Section -->
      <div class="m-4 mb-1">
        <h6 class="font-bold mb-2">MÉTRICAS BÁSICAS</h6>
        <div class="grid grid-cols-2 text-sm">
          <!-- Weight Section -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-500/50 p-5 mb-6 mr-3">
            <span><FontAwesomeIcon icon="fa-solid fa-weight-scale" /> Peso</span>
            <div class="grid grid-cols-2 pt-1">
              <span class="text-4xl">0.0</span>
              <span class="inline-block">kg</span>
            </div>
          </div>

          <!-- Height Section -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-500/50 p-5 mb-6">
            <span><FontAwesomeIcon icon="fa-solid fa-arrows-up-down" /> Altura</span>
            <div class="grid grid-cols-2 pt-1">
              <span class="text-4xl">0</span>
              <span class="inline-block">cm</span>
            </div>
          </div>

          <!-- Blubber Section -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-500/50 p-5 mb-6 mr-3">
            <span><FontAwesomeIcon icon="fa-solid fa-weight-scale" /> % Grasa</span>
            <div class="grid grid-cols-2 pt-1">
              <span class="text-4xl">0.0</span>
              <span class="inline-block">%</span>
            </div>
          </div>

          <!-- Height Section -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-500/50 p-5 mb-6">
            <span><FontAwesomeIcon icon="fa-solid fa-dumbbell" /> Músculo</span>
            <div class="grid grid-cols-2 pt-1">
              <span class="text-4xl">0.0</span>
              <span class="inline-block">kg</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Corporal metrics Section -->
      <div class="m-4 mb-1">
        <h6 class="font-bold mb-2">MÉDIDAS CORPORALES (CM)</h6>
        <div class="bg-white grid grid-cols-3 gap-2 text-sm rounded-2xl shadow-lg border-2 border-gray-500/50">
          <!-- Chest Section -->
          <div class="bg-transparent p-5">
            <span>Pecho</span>
            <div class="pt-1">
              <span class="text-4xl">0.0</span>
            </div>
          </div>

          <!-- Back Section -->
          <div class="bg-transparent p-5">
            <span>Espalda</span>
            <div class="pt-1">
              <span class="text-4xl">0.0</span>
            </div>
          </div>

          <!-- Waist Section -->
          <div class="bg-transparent p-5">
            <span>Cintura</span>
            <div class="pt-1">
              <span class="text-4xl">0.0</span>
            </div>
          </div>

          <!-- Biceps Section -->
          <div class="bg-transparent p-5">
            <span>Bíceps</span>
            <div class="pt-1">
              <span class="text-4xl">0.0</span>
            </div>
          </div>

          <!-- Hip Section -->
          <div class="bg-transparent p-5">
            <span>Cadera</span>
            <div class="pt-1">
              <span class="text-4xl">0.0</span>
            </div>
          </div>

          <!-- Quadricep Section -->
          <div class="bg-transparent p-5">
            <span>Muslo</span>
            <div class="pt-1">
              <span class="text-4xl">0.0</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Info Section -->
      <div class="m-4 mb-1">
        <h6 class="font-bold mb-2">NOTAS ADICIONALES</h6>
        <div class="space-y-2">
          <div class="bg-white rounded-2xl p-2 border-2 border-gray-500/50">
            <textarea
              placeholder="Escribe observaciones sobre el progreso..."
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-white grid grid-cols-2 p-4 mb-6">
      <button class="bg-gray-200 font-bold mr-3">Cancelar</button>
      <button type="submit" class="w-full bg-green-400 hover:bg-green-700 font-medium items-center justify-center min-h-[44px]">
        <span class="font-bold text-gray-900 px-1">
          <FontAwesomeIcon icon="fa-solid fa-save" />
          Guardar Registro
        </span>
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
</script>
