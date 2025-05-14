import * as tickets from '@status/queries/status.queries.js'
import { db } from '@core/storage/index.js'
import { TicketStatus } from '@core/enums.js'

export const take = async (
  param: Omit<tickets.IStatusParams, 'newStatus' | 'reason'>,
) => {
  const { ticketId } = param

  return await tickets.status.run(
    {
      ticketId,
      newStatus: TicketStatus.PROGRESS,
      reason: '',
    },
    db,
  )
}
