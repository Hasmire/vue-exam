export const fetchTasks = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tasks`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.json()
}

export const deleteTask = async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/task/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
}

export const updateTaskStatus = async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/task/${id}`, {
    method: 'PUT'
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
}
