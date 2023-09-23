'use client'
import { SanityNavBarContent, SanityNavElement } from '@/types/sanity'
import { Box, IconButton, Typography, useMediaQuery, Drawer, Stack, SvgIcon } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { LanguageSelector } from './LanguageSelector'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { useTheme } from '@mui/material/styles'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { LanguageOptions } from '@/types/language'
import { useState } from 'react'
import { styled } from '@mui/system'
import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'

const LOGO_HEIGHT_BASE = 120
const LOGO_WIDTH_BASE = 143

const StyledTypography = styled(Typography)({
  transition: '0.3s',
  padding: '0.25rem',
  borderRadius: '0.5rem',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: hulen_yellow,
    color: hulen_black,
  },
})

const NavigationBar = ({ navbarElements }: { navbarElements: SanityNavBarContent }) => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false)
  const { language } = useLanguage()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
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
        <IconButton onClick={() => setIsMenuDrawerOpen(true)} sx={{ fontSize: '3rem' }}>
          <SvgIcon fontSize='inherit' component={MenuRoundedIcon} />
        </IconButton>
      ) : (
        <>
          {navbarElements.navElements.map((element, idx) => (
            <Link
              href={element.subUrl}
              key={idx}
              passHref
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              <StyledTypography variant='h5'>{element.title[language]}</StyledTypography>
            </Link>
          ))}
          <LanguageSelector />
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

const MenuDrawer = ({
  isOpen,
  onClose,
  language,
  navElements,
}: {
  isOpen: boolean
  language: LanguageOptions
  onClose: () => void
  navElements: SanityNavElement[]
}) => {
  return (
    <Drawer
      onClose={onClose}
      open={isOpen}
      anchor='right'
      PaperProps={{
        sx: {
          backgroundColor: hulen_black,
          borderLeft: '3px',
          borderLeftStyle: 'double',
          borderLeftColor: hulen_yellow_text,
          minWidth: '300px',
          maxWidth: '80%',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton size='large'>
          <SvgIcon fontSize='large' component={CloseRoundedIcon} />
        </IconButton>
      </Box>
      <Stack gap='1rem' padding='2rem'>
        {navElements.map((element, idx) => (
          <Link
            href={element.subUrl}
            key={idx}
            passHref
            style={{ all: 'unset', cursor: 'pointer' }}
          >
            <StyledTypography variant='h5'>{element.title[language]}</StyledTypography>
          </Link>
        ))}
        <LanguageSelector />
      </Stack>
    </Drawer>
  )
}

export default NavigationBar
