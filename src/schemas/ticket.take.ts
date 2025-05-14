import { z } from 'zod'

export const ticketTakeSchema = z.object({
  id: z.string(),
})
