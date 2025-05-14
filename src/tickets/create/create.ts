import * as tickets from './queries/create.queries.js'
import { db } from '../../storage/index.js'

export const create = async (param: tickets.ICreateParams) => {
  return await tickets.create
    .run(param, db)
    .catch(err => console.error(`Ticket create failed: ${err}`))
}
