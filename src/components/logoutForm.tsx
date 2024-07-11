import { logout } from '@/actions'
import React from 'react'

export default function logoutForm() {
  return (
    <form action={logout}>
      <button>Logout</button>
    </form>
  )
}
