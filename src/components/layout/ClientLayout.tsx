'use client'

import type { SanityNavBarContent } from '@/types/sanity'
import type { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import type { TranslationObject } from '@/types/sanity/translationObject'
import { LanguageProvider } from '@/util/LanguageContext/LanguageContext'
import { Stack } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { Footer } from '../footer/Footer'
import NavigationBar from '../navigation/Navbar'
import { SkipLink } from '../navigation/SkipLink'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs'

/**
 * Defines the client-side layout(code run on end-user´s device).
 * Navigationbar at the top
 * Main content in the middle
 * Footer at the bottom
 */
export const ClientLayout = ({
  headerData,
  footerData,
  skipLinkData,
  children,
}: PropsWithChildren<{
  headerData: SanityNavBarContent
  footerData: SanityFooterElements[]
  skipLinkData: TranslationObject
}>) => {
  return (
    <LanguageProvider>
      <Stack
        sx={{
          flexGrow: '1', //flex-grow to ensure children fills available space
          marginTop: { xs: '1rem', md: '4rem' },
          justifyContent: 'start',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <SkipLink translationContent={skipLinkData} />
        <NavigationBar navbarElements={headerData} />
        <Stack
          component={'main'}
          id='maincontent'
          sx={{
            marginTop: { xs: '2rem', md: '4rem' },
            width: '100%',
            marginX: 'auto',
            maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
            marginBottom: '1rem',
            padding: '2rem',
            height: '100%',
            alignItems: 'center',
            gap: '2rem',
            wordBreak: 'break-word',
          }}
          tabIndex={-1}
        >
          {children}
        </Stack>
        <Footer footerElements={footerData} />
      </Stack>
    </LanguageProvider>
  )
}
