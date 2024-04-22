import { z } from 'zod'

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE'])
})

export const taskFormSchema = z.object({
  title: z.string().min(2).max(50),
  status: z.enum(['ACTIVE', 'INACTIVE'])
})

export type Task = z.infer<typeof taskSchema>
export type TaskForm = z.infer<typeof taskFormSchema>
