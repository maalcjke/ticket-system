import { z } from 'zod'

export const ticketCancelSchema = z.object({
  id: z.string(),
  reason: z.string().optional(),
})
