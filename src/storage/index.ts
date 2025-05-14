import pg from 'pg'
import { POSTGRES_URL } from '../constants.js'

export const db = new pg.Pool({
  connectionString: POSTGRES_URL,
  max: 50,
  allowExitOnIdle: true,
})
