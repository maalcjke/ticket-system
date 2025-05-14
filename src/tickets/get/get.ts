import * as tickets from './queries/get.queries.js'
import { db } from '@core/storage/index.js'
import { START_DATE, TODAY_DATE } from '@core/constants.js'

export const get = async (param: tickets.IGetParams) => {
  const { dateFrom, dateTo, offset, limit } = param

  const toMode = String(dateTo) && String(dateFrom) === TODAY_DATE

  console.log(dateFrom)

  return await tickets.get
    .run(
      {
        dateFrom: toMode ? START_DATE : dateFrom,
        dateTo,
        offset,
        limit,
      },
      db,
    )
    .catch(err => console.error(`Ticket get failed: ${err}`))
}
