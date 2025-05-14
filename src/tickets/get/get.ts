import * as tickets from './queries/get.queries.js'
import { db } from '@core/storage/index.js'

export const get = async (param: tickets.IGetParams) => {
  return await tickets.get
    .run(param, db)
    .catch(err => console.error(`Ticket get failed: ${err}`))
}
