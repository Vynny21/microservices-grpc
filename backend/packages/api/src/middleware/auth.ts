import { Request,  Response, NextFunction } from 'express'
import HidraService from '../services/hidra'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express{
    interface Request {
      userId?: string | null;
    }
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await HidraService.authenticate({
      token: req.headers.authorization
    })
    
    if (response.error) throw new Error(response.error)

    req.userId = response.user?.is

    next()

  } catch({ message }) {
    return res.status(401).json({ error: message })
  }
}