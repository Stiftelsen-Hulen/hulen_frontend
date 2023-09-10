import * as React from 'react'
import Box from '@mui/material/Box'
import ThemeRegistry from '@/util/ThemeRegistry/ThemeRegistry'

export const metadata = {
  title: 'Hulen',
  description: 'Hulen',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <Box>{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
