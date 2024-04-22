import type { TaskForm } from '@/types/task'

export const fetchTasks = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tasks`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.json()
}

export const createTask = async (values: TaskForm) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.json()
}

export const deleteTask = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/task/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
}

export const updateTaskStatus = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/task/${id}`, {
    method: 'PUT'
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
}
