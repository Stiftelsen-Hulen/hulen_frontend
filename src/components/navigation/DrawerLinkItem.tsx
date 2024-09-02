import { SupportedLanguageTypes } from '@/configs'
import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'
import { SanityNavElement } from '@/types/sanity'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEventHandler } from 'react'

/** Drawer link item used in DropDown and in MenuDrawer on mobile
 */
export const DrawerLinkItem = ({
  navElement,
  onClick,
  language,
}: {
  navElement: SanityNavElement
  onClick?: MouseEventHandler<HTMLAnchorElement>
  language: SupportedLanguageTypes
}) => {
  const currentPath = usePathname()

  return (
    <Link
      href={navElement.subUrl}
      passHref
      style={{
        textDecoration: 'none',
        cursor: 'pointer',
        width: '100%',
      }}
      onClick={onClick}
      role='link'
    >
      <Typography
        variant='menuLink'
        sx={{
          minWidth: '100%',
          padding: '0.25rem',
          display: 'block',
          textAlign: 'left',
          background: navElement.subUrl === currentPath ? hulen_yellow : hulen_black,
          color: navElement.subUrl === currentPath ? hulen_black : hulen_yellow_text,
        }}
      >
        {navElement.title[language]}
      </Typography>
    </Link>
  )
}
