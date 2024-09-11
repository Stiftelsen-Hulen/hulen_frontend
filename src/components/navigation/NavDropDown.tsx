import type { SanityNavElement } from '@/types/sanity'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { ArrowDownward, ArrowDropDown } from '@mui/icons-material'
import { Button, ClickAwayListener, List, ListItem, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { usePathname } from 'next/navigation'
import type { MouseEvent, MouseEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'
import { DrawerLinkItem } from './DrawerLinkItem'

/**
 * Navigation Dropdown component used in navigation and on mobile devices in MenuDrawer
 */
export const NavDropDown = ({
  navElement,
  isMobile = false,
  onClick,
}: {
  navElement: SanityNavElement
  isMobile?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}) => {
  const dropdownRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const currentPath = usePathname()
  const { language } = useLanguage()
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const isCurrentParentPath = currentPath.startsWith(navElement.subUrl)

  function toggleOpen() {
    setIsOpen((prev) => !prev)
  }

  function onDrawerLinkClick(e: MouseEvent<HTMLAnchorElement>) {
    toggleOpen()
    onClick?.(e)
  }

  //ids for HTML elements used in aria-tags
  const buttonId = navElement.title[language].replace(' ', '').toLowerCase() + '-btn'
  const menuId = navElement.title[language].replace(' ', '').toLowerCase() + '-menu'

  //Close dropdown if escape key is pressed and the dropdown is in focus
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key == 'Escape' && containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', close)
    }

    return () => window.removeEventListener('keydown', close)
  }, [isOpen])

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Stack sx={{ position: 'relative', alignItems: 'center' }} ref={containerRef}>
        {!isMobile && (
          //Only show arrow on desktop navigation menu
          <ArrowDownward sx={{ visibility: isCurrentParentPath ? 'visible' : 'hidden' }} />
        )}
        <Button
          id={buttonId}
          ref={buttonRef}
          variant='menuLinkButton'
          onClick={toggleOpen}
          disableRipple
          aria-controls={menuId}
          aria-expanded={isOpen}
          sx={{
            background: isCurrentParentPath && isMobile ? theme.palette.secondary.main : undefined,
            color: isCurrentParentPath && isMobile ? theme.palette.background.default : undefined,
          }}
        >
          {navElement.title[language]}
          <ArrowDropDown />
        </Button>
        <List
          id={menuId}
          ref={dropdownRef}
          sx={{
            backgroundColor: theme.palette.background.default,
            position: isMobile ? 'relative' : 'absolute',
            top: isMobile ? '0' : '100%',
            left: '0',
            overflow: 'hidden',
            minWidth: '100%',
            transformOrigin: 'top',
            transition: 'height .2s ease',
            visibility: isOpen ? 'visible' : 'hidden',
            height: isOpen ? dropdownRef.current?.scrollHeight : '0px',
          }}
          disablePadding
        >
          {navElement.subNavElements.map((subElement, i) => (
            <ListItem disableGutters key={i}>
              <DrawerLinkItem navElement={subElement} onClick={onDrawerLinkClick} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </ClickAwayListener>
  )
}
