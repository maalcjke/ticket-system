import * as dotenv from 'dotenv'
dotenv.config()

export const POSTGRES_URL = process.env.POSTGRES_URL
export const TODAY_DATE = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
export const START_DATE = `01.01.1970` //Либо просто исправить sql запрос
