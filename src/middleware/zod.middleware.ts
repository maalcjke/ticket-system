import { Request, Response, NextFunction } from 'express'
import { z, ZodError } from 'zod'

export function zodValidate(schema: z.ZodObject<any, any>, query = false) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(query ? req.query : req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }))
        res.status(401).json({ error: 'Invalid data', details: errorMessages })
      } else {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }
}
