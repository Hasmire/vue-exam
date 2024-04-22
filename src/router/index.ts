import { createRouter, createWebHistory } from 'vue-router'
import TaskManagerView from '@/views/TaskManagerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task-manager',
      component: TaskManagerView
    }
  ]
})

export default router
