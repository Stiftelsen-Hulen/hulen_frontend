'use client'

import { LanguageProvider } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack } from '@mui/material'
import NavigationBar from '../navigation/Navbar'
import { Footer } from '../footer/Footer'
import { SanityNavBarContent } from '@/types/sanity'
import { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import { PropsWithChildren } from 'react'

/**
 * Defines the client-side layout(code run on end-user´s device).
 * Navigationbar at the top
 * Main content in the middle
 * Footer at the bottom
 */
export const ClientLayout = ({
  headerData,
  footerData,
  children,
}: PropsWithChildren<{ headerData: SanityNavBarContent; footerData: SanityFooterElements[] }>) => {
  return (
    <LanguageProvider>
      <Stack
        flexGrow='1' //flex-grow to ensure children fills available space
        marginTop={{ xs: '1rem', md: '4rem' }}
        padding={{ xs: '0 4rem', md: '0 4rem' }}
        justifyContent='start'
        alignItems={'center'}
        height='100%'
        width='100%'>
        <NavigationBar navbarElements={headerData} />
        <Box component={"main"} marginTop={{ xs: '2rem', md: '4rem' }} width={'100%'} marginBottom={'1rem'}>{children}</Box>
        <Footer footerElements={footerData} />
      </Stack>
    </LanguageProvider>
  )
}
