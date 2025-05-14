import * as tickets from '@status/queries/status.queries.js'
import { db } from '@core/storage/index.js'

export const status = async (param: tickets.IStatusParams) => {
  return await tickets.status
    .run(param, db)
    .catch(err => console.error(`Ticket status failed: ${err}`))
}

export const statusAll = async (param: tickets.IStatusAllParams) => {
  return await tickets.statusAll
    .run(param, db)
    .catch(err => console.error(`Ticket statusAll failed: ${err}`))
}
