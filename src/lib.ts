import { SessionOptions } from 'iron-session'

export interface SessionData {
  userId?: string
  username?: string
  img?: string
  isPro?: boolean
}

if (!process.env.SECRET_KEY) {
  throw new Error('SECRET_KEY environment variable is not set')
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: 'x-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }
}
