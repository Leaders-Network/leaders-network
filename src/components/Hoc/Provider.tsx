import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

interface ProviderProps {
  children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="dark"
      forcedTheme={undefined}
    >
      {children}
    </ThemeProvider>
  )
}

export default Provider