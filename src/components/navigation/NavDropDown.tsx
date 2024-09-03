import type { SanityNavElement } from '@/types/sanity'
import { ArrowDownward, ArrowDropDown } from '@mui/icons-material'
import { Button, ClickAwayListener, List, ListItem, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { usePathname } from 'next/navigation'
import type { MouseEventHandler } from 'react'
import { useRef, useState, useEffect } from 'react'
import { DrawerLinkItem } from './DrawerLinkItem'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'

/** Navigation Dropdown component used in navigation and on mobile devices in MenuDrawer
 *
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
  const currentPath = usePathname()
  const { language } = useLanguage()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const isCurrentParentPath = currentPath.startsWith(navElement.subUrl)

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  //ids for HTML elements used in aria-tags
  const buttonId = navElement.title[language].replace(' ', '').toLowerCase() + '-btn'
  const menuId = navElement.title[language].replace(' ', '').toLowerCase() + '-menu'

  //Close dropdown if escape key is pressed
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key == 'Escape') {
        setOpen(false)
      }
    }
    if (open) {
      window.addEventListener('keydown', close)
    }

    return () => window.removeEventListener('keydown', close)
  }, [open])

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Stack sx={{ position: 'relative', alignItems: 'center' }}>
        {!isMobile && (
          //Only show arrow on desktop navigation menu
          <ArrowDownward sx={{ visibility: isCurrentParentPath ? 'visible' : 'hidden' }} />
        )}
        <Button
          id={buttonId}
          variant='menuLinkButton'
          onClick={toggleOpen}
          disableRipple
          aria-controls={menuId}
          aria-expanded={open}
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
          aria-labelledby={buttonId}
          sx={{
            backgroundColor: theme.palette.background.default,
            position: isMobile ? 'relative' : 'absolute',
            top: isMobile ? '0' : '100%',
            left: '0',
            overflow: 'hidden',
            minWidth: '100%',
            transformOrigin: 'top',
            transition: 'height .2s ease',
            visibility: open ? 'visible' : 'hidden',
            height: open ? dropdownRef.current?.scrollHeight : '0px',
          }}
          disablePadding
        >
          {navElement.subNavElements.map((subElement, i) => (
            <ListItem disableGutters key={i}>
              <DrawerLinkItem navElement={subElement} onClick={onClick} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </ClickAwayListener>
  )
}
