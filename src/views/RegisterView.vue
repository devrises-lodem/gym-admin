<template>
  <div class="min-h-screen flex items-center justify-center p-4 sm:p-5">
    <div class="bg-gray-50 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="flex flex-col items-center mb-2">
          <div class="mb-4">
            <FontAwesomeIcon icon="fa-solid fa-dumbbell fa-lg" />
          </div>
          <h1 class="text-xl sm:text-2xl font-bold text-black mb-0">Crear Cuenta</h1>
        </div>
        <p class="text-sm mt-2 text-gray-800">Regístrate para gestionar el gimnasio</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 mb-6">
        <button type="button" class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-black bg-green-400 hover:bg-green-700">
          <FontAwesomeIcon icon="fa-brands fa-google" />
          <span class="text-sm font-medium text-black">Google</span>
        </button>
        <button type="button" class="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-black bg-green-400 hover:bg-green-700">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <span class="text-sm font-medium text-black">Facebook</span>
        </button>
      </div>

      <div class="relative my-6 space-y-4 sm:space-y-5">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-indigo-400"></div>
        </div>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4 sm:space-y-5">
        <p class="text-sm mb-2 mt-2 text-gray-800 text-center">Crea tu cuenta de administrador</p>

        <div class="space-y-2">
          <label for="name" class="text-sm font-bold text-gray-800">Nombre completo</label>
          <div class="relative">
            <FontAwesomeIcon icon="fa-regular fa-user" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Enter your full name"
              required
              :class="[
                'w-full pl-10 sm:pl-11 pr-3 py-2.5 sm:py-3 border rounded-lg text-sm transition-all duration-200 bg-indigo-50 text-gray-900',
                errors.name ? 'border-red-500' : 'border-indigo-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-20'
              ]"
            />
          </div>
          <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
        </div>

        <div class="space-y-2">
          <label for="email" class="text-sm font-bold text-gray-800">Correo electrónico</label>
          <div class="relative">
            <FontAwesomeIcon icon="fa-regular fa-envelope" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              required
              :class="[
                'w-full pl-10 sm:pl-11 pr-3 py-2.5 sm:py-3 border rounded-lg text-sm transition-all duration-200 bg-indigo-50 text-gray-900',
                errors.email ? 'border-red-500' : 'border-indigo-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-20'
              ]"
            />
          </div>
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <div class="space-y-2">
          <label for="password" class="text-sm font-bold text-gray-800">Contraseña</label>
          <div class="relative">
            <FontAwesomeIcon icon="fa-solid fa-lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="**********"
              required
              :class="[
                'w-full pl-10 sm:pl-11 pr-10 py-2.5 sm:py-3 border rounded-lg text-sm transition-all duration-200 bg-indigo-50 text-gray-900',
                errors.password ? 'border-red-500' : 'border-indigo-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-20'
              ]"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <FontAwesomeIcon icon="fa-regular fa-eye-slash" v-if="showPassword" />
              <FontAwesomeIcon icon="fa-regular fa-eye" v-else />
            </button>
          </div>
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
        </div>

        <div class="space-y-2">
          <label for="confirmPassword" class="text-sm font-bold text-gray-800">Confirmar contraseña</label>
          <div class="relative">
            <FontAwesomeIcon icon="fa-solid fa-lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="**********"
              required
              :class="[
                'w-full pl-10 sm:pl-11 pr-10 py-2.5 sm:py-3 border rounded-lg text-sm transition-all duration-200 bg-indigo-50 text-gray-900',
                errors.confirmPassword ? 'border-red-500' : 'border-indigo-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-20'
              ]"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <FontAwesomeIcon icon="fa-regular fa-eye-slash" v-if="showConfirmPassword" />
              <FontAwesomeIcon icon="fa-regular fa-eye" v-else />
            </button>
          </div>
          <p v-if="errors.confirmPassword" class="text-red-500 text-xs mt-1">{{ errors.confirmPassword }}</p>
        </div>

        <div class="space-y-2">
          <div class="relative w-full">
            <input
              id="confirmPassword"
              v-model="form.termConditions"
              type="checkbox"
              required
            />
            Al registrarte, aceptas nuestros
            <RouterLink to="/termConditions">Términos y Condiciones</RouterLink>
            y la
            <RouterLink to="/privacyPolicy">Política de Privacidad</RouterLink>
          </div>
        </div>


        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-green-400 hover:bg-green-700 font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center min-h-[44px]"
        >
          <FontAwesomeIcon icon="fa-solid fa-user-plus" />
          <span v-if="!isLoading" class="text-sm font-medium text-gray-900 px-1">Registrarse</span>
          <div v-else class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </button>
      </form>

      <p class="text-center text-sm text-gray-800 m-0 mt-5">
        ¿Ya tienes una cuenta? <RouterLink to="/login" class="hover:text-white font-medium transition-colors">Inicia sesión aquí</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  termConditions: ''
})

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  termConditions: ''
})

const isLoading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const validateForm = () => {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  errors.termConditions = ''

  if (!form.name) {
    errors.name = 'Name is required'
  } else if (form.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!form.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
  }

  if (!form.password) {
    errors.password = 'Password is required'
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return !errors.name && !errors.email && !errors.password && !errors.confirmPassword
}

const handleRegister = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // For demo purposes, accept any valid registration
    console.log('Registration successful:', form)

    // Redirect to login or dashboard
    router.push('/login')
  } catch (error) {
    console.error('Registration failed:', error)
    errors.email = 'Registration failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
