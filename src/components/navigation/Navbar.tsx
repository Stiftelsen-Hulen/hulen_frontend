'use client'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs'
import type { SanityNavBarContent } from '@/types/sanity'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Box, IconButton, SvgIcon, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useState } from 'react'
import { MenuDrawer } from '.'
import { LanguageSelector } from '../language/LanguageSelector'
import { SanityImageComponent } from '../sanity'
import { NavDropDown } from './NavDropDown'
import { NavLink } from './NavLink'
const LOGO_WIDTH_BASE = 143

const StyledNavbarWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '1rem',
  maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
})
const StyledNavLinksWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  gap: '1rem',
  marginBottom: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'end',
})

/** The navbar handles all the global navigation. This means rendering the hulen logo and menu elements.
 *  It will render a row of navigation buttons and language selector if window width above md (900px (56.25rem) if i remember correctly)
 *  if not, it will render only the logo and a button for accessing a side drawer.
 */
const NavigationBar = ({ navbarElements }: { navbarElements: SanityNavBarContent }) => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false)
  const theme = useTheme()
  // MuI has an easy accessible tool for doing media queries. This can also be done in the SX prop as {width: {xs: value, md: value}}
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const currentPath = usePathname()
  const { language } = useLanguage()

  const renderNavBarElements = navbarElements.navElements.map((element, idx) => {
    const isCurrentPath = element.subUrl === currentPath

    return (
      <Fragment key={idx}>
        {element.subNavElements?.length ? (
          <NavDropDown navElement={element} />
        ) : (
          <NavLink
            navElement={element}
            isCurrentPath={isCurrentPath}
            onClick={() => setIsMenuDrawerOpen(false)}
          ></NavLink>
        )}
      </Fragment>
    )
  })

  return (
    <StyledNavbarWrapper
      component={'nav'} //Enhances accessibility with semantic HTML structure.
      flexDirection={isMobile ? 'column' : 'row'}
    >
      <Link
        href={'/'}
        style={{
          width: isMobile ? LOGO_WIDTH_BASE * 2 : LOGO_WIDTH_BASE * 2.3,
          flexShrink: 0,
        }}
        aria-hidden
      >
        <SanityImageComponent
          imageData={navbarElements.navbarLogo}
          alt={navbarElements.navbarLogo.altText[language]}
        />
      </Link>
      <StyledNavLinksWrapper sx={{ justifyContent: { xs: 'center', md: 'end' } }}>
        {isMobile ? (
          <IconButton
            onClick={() => setIsMenuDrawerOpen(true)}
            sx={{
              fontSize: '3rem',
              '&:focus-visible': {
                outline: 'revert',
              },
            }}
            aria-label='Open menu button'
          >
            <SvgIcon fontSize='inherit' component={MenuRoundedIcon} />
          </IconButton>
        ) : (
          <>
            {renderNavBarElements}
            <LanguageSelector />
          </>
        )}
      </StyledNavLinksWrapper>
      <MenuDrawer
        navElements={navbarElements.navElements}
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
      />
    </StyledNavbarWrapper>
  )
}

export default NavigationBar
