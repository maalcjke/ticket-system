import { z } from 'zod'
import { isNotFutureDate } from '@core/utils/index.js'

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/

export const ticketGetSchema = z.object({
  dateFrom: z
    .string()
    .regex(dateRegex, 'Date format (dd.nn.yyyy)')
    .refine(isNotFutureDate, { message: 'dateFrom cannot be in the future' })
    .optional(),
  dateTo: z
    .string()
    .regex(dateRegex, 'Date format (dd.nn.yyyy)')
    .refine(isNotFutureDate, { message: 'dateFrom cannot be in the future' })
    .optional(),
  limit: z.string().regex(/^\d+$/).transform(Number).optional(),
  offset: z.string().regex(/^\d+$/).transform(Number).optional(),
})
