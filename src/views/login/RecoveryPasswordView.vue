<template>
  <div class="min-h-screen flex items-center justify-center p-4 sm:p-5">
    <div class="bg-gray-50 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="flex flex-col items-center mb-2">
          <div class="mb-4">
            <FontAwesomeIcon icon="fa-solid fa-dumbbell fa-lg" />
          </div>
          <h1 class="text-xl sm:text-2xl font-bold text-black mb-0">{{ $t('auth.password_recovery') }}</h1>
        </div>
        <p class="text-sm mt-2 text-gray-800">{{ $t('auth.recover_password') }}</p>
      </div>

      <form @submit.prevent="handleRecovery" class="space-y-4 sm:space-y-5">
        <p class="text-sm mb-2 mt-2 text-gray-800 text-center">{{ $t('auth.enter_email_for_recovery') }}</p>
        
        <div class="space-y-2">
          <label for="email" class="text-sm font-bold text-gray-800">{{ $t('auth.email_address') }}</label>
          <div class="relative">
            <FontAwesomeIcon icon="fa-regular fa-envelope" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="email"
              v-model="form.email"
              type="email"
              :placeholder="$t('auth.enter_email')"
              required
              :class="[
                'w-full pl-10 sm:pl-11 pr-3 py-2.5 sm:py-3 border rounded-lg text-sm transition-all duration-200 bg-indigo-50 text-gray-900',
                errors.email ? 'border-red-500' : 'border-indigo-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-20'
              ]"
            />
          </div>
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-green-400 hover:bg-green-700 font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center min-h-[44px]"
        >
          <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
          <span v-if="!isLoading" class="text-sm font-medium text-gray-900 px-1">{{ $t('auth.send_recovery_email') }}</span>
          <div v-else class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </button>

        <div class="text-center text-sm py-2">
          <RouterLink to="/login" class="text-sm text-indigo-200 hover:text-white transition-colors">← {{ $t('auth.back_to_login') }}</RouterLink>
        </div>
      </form>

      <div v-if="successMessage" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <p class="text-sm text-center">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"

const router = useRouter()

const form = reactive({
  email: ''
})

const errors = reactive({
  email: ''
})

const isLoading = ref(false)
const successMessage = ref('')

const validateForm = () => {
  errors.email = ''

  if (!form.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
  }

  return !errors.email
}

const handleRecovery = async () => {
  if (!validateForm()) return

  isLoading.value = true
  successMessage.value = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // For demo purposes, accept any valid email
    console.log('Recovery email sent to:', form.email)
    
    successMessage.value = 'Se han enviado las instrucciones de recuperación a tu correo electrónico.'
    
    // Clear form
    form.email = ''
    
    // Optionally redirect after a delay
    setTimeout(() => {
      router.push('/login')
    }, 3000)
    
  } catch (error) {
    console.error('Recovery failed:', error)
    errors.email = 'No se pudo enviar el correo de recuperación. Intenta nuevamente.'
  } finally {
    isLoading.value = false
  }
}
</script>
