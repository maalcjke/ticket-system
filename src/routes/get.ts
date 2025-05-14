import { Request, Response } from 'express'
import { get } from '@core/tickets/index.js'
import { TODAY_DATE } from '@core/constants.js'

export const getTicket = async (req: Request, res: Response) => {
  const { dateFrom, dateTo, limit = 10, offset = 0 } = req.query

  const result = await get({
    dateFrom: String(dateFrom ?? TODAY_DATE),
    dateTo: String(dateTo ?? TODAY_DATE),
    limit: Number(limit),
    offset: Number(offset),
  })

  res.json(result)
}
