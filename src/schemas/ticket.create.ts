import { z } from 'zod'

export const ticketCreateSchema = z.object({
  title: z.string(),
  body: z.string(),
})
