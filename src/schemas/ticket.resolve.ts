import { z } from 'zod'

export const ticketResolveSchema = z.object({
  id: z.string(),
  reason: z.string().optional(),
})
