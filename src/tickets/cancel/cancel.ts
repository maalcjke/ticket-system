import * as tickets from '@status/queries/status.queries.js'
import { status } from '@status/status.js'
import { TicketStatus } from '@core/enums.js'

export const cancel = async (
  param: Omit<tickets.IStatusParams, 'newStatus'>,
) => {
  const { ticketId, reason = '' } = param

  return await status({
    ticketId,
    reason,
    newStatus: TicketStatus.CANCELLED,
  })
}
