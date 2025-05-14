import { Request, Response } from 'express'
import { take } from '@core/tickets/index.js'

export const takeTicket = async (req: Request, res: Response) => {
  const { id } = req.body

  await take({
    ticketId: String(id),
  }).then(result => res.json(result))
}
