import * as tickets from './queries/create.queries.js'
import { db } from '@core/storage/index.js'
import { TicketStatus } from '@core/enums.js'

export const create = async (param: Omit<tickets.ICreateParams, 'status'>) => {
  const { title, body, reason = '' } = param

  return await tickets.create
    .run(
      {
        title,
        body,
        reason,
        status: TicketStatus.NEW,
      },
      db,
    )
    .catch(err => console.error(`Ticket create failed: ${err}`))
}
