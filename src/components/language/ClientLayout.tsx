'use client'

import { LanguageProvider } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack } from '@mui/material'
import NavigationBar from '../navigation/Navbar'
import { Footer } from '../footer/Footer'
import { SanityNavBarContent } from '@/types/sanity'
import { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import { PropsWithChildren } from 'react'

export const ClientLayout = ({
  headerData,
  footerData,
  children,
}: PropsWithChildren<{ headerData: SanityNavBarContent; footerData: SanityFooterElements[] }>) => {
  return (
    <LanguageProvider>
      {/*flex-grow to ensure children fills available space */}
      <Stack flexGrow='1' margin={{ xs: '1rem', md: '4rem' }} justifyContent={'start'} height='100%'>
        <NavigationBar navbarElements={headerData} />
        <Box component={"main"} marginTop={{ xs: '2rem', md: '4rem' }}>{children}</Box>
        <Footer footerElements={footerData} />
      </Stack>
    </LanguageProvider>
  )
}
