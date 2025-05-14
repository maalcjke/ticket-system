import * as tickets from './queries/take.queries.js'
import { db } from '../../storage/index.js'

export const take = async (param: tickets.ITakeParams) => {
  return await tickets.take
    .run(param, db)
    .catch(err => console.error(`Ticket take failed: ${err}`))
}
