import { defineStore } from 'pinia'
import type { Task } from 'vitest'
import { ref, type Ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const tasks: Ref<Task[]> = ref([])
  function update(updatedTasks: Task[]) {
    tasks.value = updatedTasks
  }

  return { tasks, update }
})
