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
import ExerciseLibrary from '@/views/exercise/ExerciseLibrary.vue'
import WorkoutBuilder from '@/views/workout/WorkoutBuilder.vue'
import ClientChat from '@/views/client/ClientChat.vue'
import Analytics from '@/views/dashboard/Analytics.vue'
import ExerciseDetail from '@/views/exercise/ExerciseDetail.vue'



export interface RouteConfig {
  path: string
  label: string
  icon: string
  component: object
}

export const appRoutes: RouteConfig[] = [

  { path: '/', label: 'Nutrition Dashboard', icon: 'nutrition', component: TrainerDashboard1 },
  { path: '/trainer-dashboard', label: 'Trainer Dashboard', icon: 'dashboard', component: TrainerDashboard2 },
  { path: '/client-john', label: 'Client - John Doe', icon: 'person', component: TrainerDashboard3 },
  { path: '/client-profile', label: 'Client Profile', icon: 'group', component: ClientProfile1 },
  { path: '/routine-builder', label: 'Routine Builder', icon: 'fitness_center', component: ClientProfile2 },
  { path: '/progress-reports', label: 'Progress Reports', icon: 'bar_chart', component: ClientProgress },
  { path: '/schedule', label: 'Schedule & Calendar', icon: 'calendar_today', component: ClientSchedule },
  { path: '/meal-plan', label: 'Meal Plan Creator', icon: 'restaurant', component: MealPlanCreator },
  { path: '/exercise-library', label: 'Exercise Library', icon: 'exercise', component: ExerciseLibrary },
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
      component: () => import('@/views/login/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/login/RegisterView.vue'),
    },
    {
      path: '/recovery-password',
      name: 'recovery-password',
      component: () => import('@/views/login/RecoveryPasswordView.vue'),
    },
    {
      path: '/measurements',
      name: 'measurements',
      component: () => import('@/views/MeasurementsView.vue'),
    },
    {
      path: '/exercise-details/create',
      name: 'exercise-details',
      component: () => import('@/views/exercise/ExerciseDetail.vue'),
    },
    {
      path: '/exercise-details/edit/:id',
      name: 'exercise-details-edit',
      component: () => import('@/views/exercise/ExerciseDetail.vue'),
    },
    {
      path: '/',
      component: DashboardLayout,
      children: dashboardChildren,
    },
  ],
})

export default router
