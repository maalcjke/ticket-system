import { Request, Response } from 'express'
import { cancel, cancelAll } from '@core/tickets/index.js'

export const cancelTicket = async (req: Request, res: Response) => {
  const { id, reason = '' } = req.body

  const result = await cancel({
    ticketId: String(id),
    reason: String(reason),
  })

  res.json(result)
}

export const cancelAllTicket = async (req: Request, res: Response) => {
  const result = await cancelAll()

  res.json(result)
}
