import { Request, Response } from 'express'
import { resolve } from '@core/tickets/index.js'

export const resolveTicket = async (req: Request, res: Response) => {
  const { id, reason = '' } = req.body

  const result = await resolve({
    ticketId: String(id),
    reason: String(reason),
  })

  res.json(result)
}
