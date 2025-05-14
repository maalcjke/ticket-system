import { Request, Response } from 'express'
import { create } from '@core/tickets/index.js'

export const createTicket = async (req: Request, res: Response) => {
  const { title, body } = req.body

  const result = await create({
    title: String(title),
    body: String(body),
  })

  res.json(result)
}
