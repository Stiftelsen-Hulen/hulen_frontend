import { SupportedLanguageTypes } from '@/configs'
import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'
import { SanityNavElement } from '@/types/sanity'
import { ArrowDownward, ArrowDropDown } from '@mui/icons-material'
import { Box, Button, ClickAwayListener, List, ListItem, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { MouseEventHandler, useRef, useState, useEffect } from 'react'
import { DrawerLinkItem } from './DrawerLinkItem'

/** Navigation Dropdown component used in navigation and on mobile devices in MenuDrawer
 *
 */
export const NavDropDown = ({
  navElement,
  language,
  isMobile = false,
  onClick,
}: {
  navElement: SanityNavElement
  language: SupportedLanguageTypes
  isMobile?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}) => {
  const dropdownRef = useRef<HTMLUListElement>(null)
  const currentPath = usePathname()
  const [open, setOpen] = useState(false)

  const isCurrentParentPath = currentPath.startsWith(navElement.subUrl)

  const handleBtnClick = () => {
    setOpen((prev) => !prev)
  }

  const ariaBtnId = navElement.title[language].replace(' ', '').toLowerCase() + '-btn'
  const ariaMenuId = navElement.title[language].replace(' ', '').toLowerCase() + '-menu'

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
      <Box sx={{ position: 'relative' }}>
        <Button
          id={ariaBtnId}
          sx={{
            color: hulen_yellow_text,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.25rem',
            textTransform: 'none',
            width: '100%',
            '&:focus-visible': {
              outline: 'revert',
            },
          }}
          onClick={handleBtnClick}
          disableRipple
          aria-controls={ariaMenuId}
          aria-expanded={open}
        >
          <ArrowDownward
            style={{
              color: isCurrentParentPath ? hulen_yellow : 'initial',
              display: isMobile ? 'none' : 'block',
            }}
          />
          <Typography
            variant='menuLink'
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isMobile && isCurrentParentPath ? hulen_yellow : hulen_black,
              color: isMobile && isCurrentParentPath ? hulen_black : 'inherit',
              width: '100%',
            }}
          >
            {navElement.title[language]}
            <ArrowDropDown />
          </Typography>
        </Button>
        <List
          id={ariaMenuId}
          ref={dropdownRef}
          aria-labelledby={ariaBtnId}
          sx={{
            backgroundColor: hulen_black,
            position: isMobile ? 'relative' : 'absolute',
            top: isMobile ? '0' : '100%',
            left: '0',
            minWidth: '100%',
            visibility: open ? 'visible' : 'hidden',
            height: open ? dropdownRef.current?.scrollHeight : '0px',
            transformOrigin: 'top',
            transition: 'height .2s ease',
            overflow: 'hidden',
          }}
          disablePadding
        >
          {navElement.subNavElements.map((subElement, i) => (
            <ListItem disableGutters key={i}>
              <DrawerLinkItem navElement={subElement} onClick={onClick} language={language} />
            </ListItem>
          ))}
        </List>
      </Box>
    </ClickAwayListener>
  )
}
