import * as React from 'react'
import { Stack, Box } from '@mui/material'
import ThemeRegistry from '@/util/ThemeRegistry/ThemeRegistry'
import NavigationBar from '@/components/Navbar'
import { getSanityNavigationElements, getFooterElements } from '@/util/sanity'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/util/LanguageContext/LanguageContext'

export async function getData() {
  const headerData = await getSanityNavigationElements()
  const footerData = await getFooterElements()

  return { headerData: headerData, footerData: footerData }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { headerData, footerData } = await getData()

  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <LanguageProvider>
            <Stack padding={'4rem'} justifyContent={'space-between'} height='100%'>
              <NavigationBar navbarElements={headerData} />
              <Box sx={{ padding: '4rem' }}>{children}</Box>
              <Footer footerElements={footerData} />
            </Stack>
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
export const metadata = {
  title: 'Hulen',
  description: 'Hulen',
}
