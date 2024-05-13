'use client'
import { SanityNavBarContent } from '@/types/sanity'
import { Box, IconButton, Typography, useMediaQuery, SvgIcon } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { LanguageSelector } from '../language/LanguageSelector'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { useTheme } from '@mui/material/styles'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { useState } from 'react'
import { MenuDrawer } from '.'
import { usePathname } from 'next/navigation'
import { hulen_yellow } from '@/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import LanguageIcon from '@mui/icons-material/Language'

const LOGO_HEIGHT_BASE = 120
const LOGO_WIDTH_BASE = 143

/** The navbar handles all the global navigation. This means rendering the hulen logo and menu elements.
 *  It will render a row of navigation buttons and language selector  if window width above md (900px (56.25rem) if i remember correctly)
 *  if not, it will render only the logo and a button for accessing a side drawer.
 *
 * @param param0
 * @returns
 */
const NavigationBar = ({ navbarElements }: { navbarElements: SanityNavBarContent }) => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false)
  const { language } = useLanguage()
  const theme = useTheme()
  // MuI has an easy accessible tool for doing media queries. This can also be done in the SX prop as {width: {xs: value, md: value}}
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const currentPath = usePathname()

  const renderNavBarElements = navbarElements.navElements.map((element, idx) => {
    const isCurrentPath = element.subUrl === currentPath

    return (
      <Link
        href={element.subUrl}
        key={idx}
        passHref
        style={{
          all: 'unset',
          cursor: 'pointer',
        }}
        role='link'
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ArrowDownwardIcon style={{ color: isCurrentPath ? hulen_yellow : 'initial' }} />
          <Typography variant='menuLink' onClick={() => setIsMenuDrawerOpen(false)}>
            {element.title[language]}
          </Typography>
        </Box>
      </Link>
    )
  })

  return (
    <Box
      component={'nav'}
      display='flex'
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent={'center'}
      alignItems={'center'}
      gap='2rem'
    >
      <Link href={'/'}>
        <Image
          src={navbarElements.navbarLogo.asset.url}
          alt={navbarElements.navbarLogo.altText.no}
          width={isMobile ? LOGO_WIDTH_BASE * 2 : LOGO_WIDTH_BASE}
          height={isMobile ? LOGO_HEIGHT_BASE * 2 : LOGO_HEIGHT_BASE}
        />
      </Link>
      {isMobile ? (
        <IconButton
          onClick={() => setIsMenuDrawerOpen(true)}
          sx={{ fontSize: '3rem' }}
          aria-label='Open menu button'
        >
          <SvgIcon fontSize='inherit' component={MenuRoundedIcon} />
        </IconButton>
      ) : (
        <>
          {renderNavBarElements}
          <Box
            sx={{
              paddingTop: '1.5rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LanguageIcon />
            <LanguageSelector />
          </Box>
        </>
      )}
      <MenuDrawer
        navElements={navbarElements.navElements}
        isOpen={isMenuDrawerOpen}
        language={language}
        onClose={() => setIsMenuDrawerOpen(false)}
      />
    </Box>
  )
}

export default NavigationBar
