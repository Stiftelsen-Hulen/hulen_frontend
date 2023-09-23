'use client'

import { LanguageProvider } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack } from '@mui/material'
import NavigationBar from './Navbar'
import { Footer } from './Footer'
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
      <Stack padding={{ xs: '1rem', md: '4rem' }} justifyContent={'space-between'} height='100%'>
        <NavigationBar navbarElements={headerData} />
        <Box>{children}</Box>
        <Footer footerElements={footerData} />
      </Stack>
    </LanguageProvider>
  )
}
