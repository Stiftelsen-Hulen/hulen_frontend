import * as React from 'react'
import Box from '@mui/material/Box'
import ThemeRegistry from '@/util/ThemeRegistry/ThemeRegistry'
import NavigationBar from '@/components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <Box padding={'4rem'}>
            <NavigationBar />
            <Box sx={{ padding: '4rem' }}>{children}</Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
export const metadata = {
  title: 'Hulen',
  description: 'Hulen',
}
