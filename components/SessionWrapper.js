"use client"

import { SessionProvider } from "next-auth/react"
import { Children } from "react"

export default function Sessionwraper({Children})
{
  return (
    <SessionProvider >
      {Children}
    </SessionProvider>
  )
}