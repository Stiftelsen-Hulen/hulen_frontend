import { LanguageOptions } from '@/types/language'
import { SanityNavElement } from '@/types/sanity'
import { Box, Drawer, IconButton, Stack, SvgIcon, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Link from 'next/link'
import { LanguageSelector } from '../language'
import { usePathname } from 'next/navigation'
import { hulen_black, hulen_yellow } from '@/styles'

/** The menu drawer is the side menu we use for navigation when on mobile/small screens
 */
export const MenuDrawer = ({
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
  const currentPath = usePathname()

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
          <Link
            href={element.subUrl}
            key={idx}
            passHref
            style={{
              all: 'unset',
              cursor: 'pointer',
              background: element.subUrl === currentPath ? hulen_yellow : hulen_black,
              color: element.subUrl === currentPath ? hulen_black : hulen_yellow,
            }}
            onClick={onClose}
            role='link'
          >
            <Typography variant='menuLink'>{element.title[language]}</Typography>
          </Link>
        ))}
        <LanguageSelector />
      </Stack>
    </Drawer>
  )
}
