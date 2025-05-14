import express from 'express'
import { zodValidate } from '@core/middleware/zod.middleware.js'
import {
  cancelAllTicket,
  cancelTicket,
  createTicket,
  getTicket,
  resolveTicket,
  takeTicket,
} from '@routes/index.js'
import {
  ticketCancelSchema,
  ticketCreateSchema,
  ticketGetSchema,
  ticketResolveSchema,
  ticketTakeSchema,
} from '@schemas/index.js'
import { errorHandler } from '@core/middleware/error.middleware.js'

function bootstrap() {
  const app = express()
  app.use(express.json())

  app.get('/get', zodValidate(ticketGetSchema, true), getTicket)

  app.post('/create', zodValidate(ticketCreateSchema), createTicket)
  app.post('/take', zodValidate(ticketTakeSchema), takeTicket)
  app.post('/resolve', zodValidate(ticketResolveSchema), resolveTicket)
  app.post('/cancel', zodValidate(ticketCancelSchema), cancelTicket)
  app.post('/cancel/all', cancelAllTicket)

  app.use(errorHandler)

  app.listen(8080)
}

bootstrap()
