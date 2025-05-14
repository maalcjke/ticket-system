import * as tickets from '@status/queries/status.queries.js'
import { db } from '@core/storage/index.js'

export const status = async (param: tickets.IStatusParams) => {
  return await tickets.status
    .run(param, db)
    .catch(err => console.error(`Ticket resolve failed: ${err}`))
}
