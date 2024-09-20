import type { SanityNavElement } from '@/types/sanity'
import { Box, Drawer, IconButton, Stack, SvgIcon } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { LanguageSelector } from '../language'
import { NavDropDown } from './NavDropDown'
import { Fragment } from 'react'
import { DrawerLinkItem } from './DrawerLinkItem'

/**
 * The menu drawer is the side menu we use for navigation when on mobile/small screens
 */
export const MenuDrawer = ({
  isOpen,
  onClose,
  navElements,
}: {
  isOpen: boolean
  onClose: () => void
  navElements: SanityNavElement[]
}) => {
  return (
    <Drawer
      onClose={onClose}
      open={isOpen}
      anchor='right'
      PaperProps={{
        variant: 'menuDrawer',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton size='large' onClick={onClose}>
          <SvgIcon fontSize='large' component={CloseRoundedIcon} />
        </IconButton>
      </Box>
      <Stack gap='1rem' padding='2rem'>
        {navElements.map((element, idx) => (
          <Fragment key={idx}>
            {element.subNavElements?.length ? (
              <NavDropDown navElement={element} onClick={onClose} isMobile />
            ) : (
              <DrawerLinkItem navElement={element} onClick={onClose} />
            )}
          </Fragment>
        ))}
        <LanguageSelector />
      </Stack>
    </Drawer>
  )
}
