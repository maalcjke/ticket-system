import * as tickets from './queries/resolve.queries.js'
import { db } from '../../storage/index.js'
import { TicketStatus } from '../../enums.js'

export const resolve = async (
  param: Omit<tickets.IResolveParams, 'newStatus'>,
) => {
  const { ticketId, reason = '' } = param

  return await tickets.resolve
    .run(
      {
        ticketId,
        reason,
        newStatus: TicketStatus.COMPLETED,
      },
      db,
    )
    .catch(err => console.error(`Ticket resolve failed: ${err}`))
}
