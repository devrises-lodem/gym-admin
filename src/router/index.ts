import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DashboardLayout from '@/views/DashboardLayout.vue'

// Dashboard (FMS) views
import TrainerDashboard1 from '@/views/trainer/TrainerDashboard1.vue' 
import TrainerDashboard2 from '@/views/trainer/TrainerDashboard2.vue' 
import TrainerDashboard3 from '@/views/trainer/TrainerDashboard3.vue' 
import ClientProfile1 from '@/views/client/ClientProfile1.vue' 
import ClientProfile2 from '@/views/client/ClientProfile2.vue' 
import ClientProgress from '@/views/client/ClientProgress.vue' 
import ClientSchedule from '@/views/client/ClientSchedule.vue' 
import MealPlanCreator from '@/views/meal/MealPlanCreator.vue' 
import ExerciseLibrary1 from '@/views/exercise/ExerciseLibrary1.vue' 
import ExerciseLibrary2 from '@/views/exercise/ExerciseLibrary2.vue'
import WorkoutBuilder from '@/views/workout/WorkoutBuilder.vue' 
import ClientChat from '@/views/client/ClientChat.vue' 
import Analytics from '@/views/dashboard/Analytics.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import RecoveryPasswordView from '@/views/RecoveryPasswordView.vue'
import MeasurementsView from '@/views/MeasurementsView.vue'

export interface RouteConfig {
  path: string
  label: string
  icon: string
  component: object
}

export const appRoutes: RouteConfig[] = [
  { path: '/login', label: 'Login', icon: 'login', component: LoginView },
  { path: '/register', label: 'Register', icon: 'register', component: RegisterView },
  { path: '/recovery-password', label: 'Recovery Password', icon: 'recovery-password', component: RecoveryPasswordView },
  { path: '/measurements', label: 'Measurements', icon: 'measurements', component: MeasurementsView },
  { path: '/dashboard', label: 'Dashboard', icon: 'dashboard', component: DashboardLayout },
  { path: '/', label: 'Nutrition Dashboard', icon: 'nutrition', component: TrainerDashboard1 },
  { path: '/trainer-dashboard', label: 'Trainer Dashboard', icon: 'dashboard', component: TrainerDashboard2 },
  { path: '/client-john', label: 'Client - John Doe', icon: 'person', component: TrainerDashboard3 },
  { path: '/client-profile', label: 'Client Profile', icon: 'group', component: ClientProfile1 },
  { path: '/routine-builder', label: 'Routine Builder', icon: 'fitness_center', component: ClientProfile2 },
  { path: '/progress-reports', label: 'Progress Reports', icon: 'bar_chart', component: ClientProgress },
  { path: '/schedule', label: 'Schedule & Calendar', icon: 'calendar_today', component: ClientSchedule },
  { path: '/meal-plan', label: 'Meal Plan Creator', icon: 'restaurant', component: MealPlanCreator },
  { path: '/exercise-library', label: 'Exercise Library', icon: 'exercise', component: ExerciseLibrary1 },
  { path: '/exercise-library-2', label: 'Exercise Library 2', icon: 'sports_gymnastics', component: ExerciseLibrary2 },
  { path: '/workout-builder', label: 'Workout Builder', icon: 'construction', component: WorkoutBuilder },
  { path: '/chat', label: 'Client Chat', icon: 'chat', component: ClientChat },
  { path: '/analytics', label: 'Business Analytics', icon: 'insights', component: Analytics },
]

const dashboardChildren: RouteRecordRaw[] = appRoutes.map(({ path, component }) => ({
  path: path === '/' ? '' : path.slice(1),
  component,
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/recovery-password',
      name: 'recovery-password',
      component: () => import('@/views/RecoveryPasswordView.vue'),
    },
    {
      path: '/measurements',
      name: 'measurements',
      component: () => import('@/views/MeasurementsView.vue'),
    },
    {
      path: '/',
      component: DashboardLayout,
      children: dashboardChildren,
    },
  ],
})

export default router
