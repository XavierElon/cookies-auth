'use server'

import { cookies } from 'next/headers'
import { getIronSession } from 'iron-session'
import { sessionOptions, SessionData } from './lib'

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  return session
}

export const login = async () => {}

export const logout = async () => {}
