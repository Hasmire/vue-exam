import { z } from 'zod'

export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE'])
})

export type Task = z.infer<typeof taskSchema>
