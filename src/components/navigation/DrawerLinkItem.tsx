import type { SanityNavElement } from '@/types/sanity'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { usePathname } from 'next/navigation'
import type { MouseEventHandler } from 'react'
import { LinkWrapper } from './LinkWrapper'
import { useTheme } from '@mui/material/styles'

/**
 * Link item used in NavDropDown and in the mobile MenuDrawer
 */
export const DrawerLinkItem = ({
  navElement,
  onClick,
}: {
  navElement: SanityNavElement
  onClick: MouseEventHandler<HTMLAnchorElement>
}) => {
  const currentPath = usePathname()
  const { language } = useLanguage()
  const theme = useTheme()

  const isCurrentPath = currentPath == navElement.subUrl

  return (
    <LinkWrapper
      href={navElement.subUrl}
      variant='menuLink'
      passHref
      sx={{
        width: '100%',
        textAlign: 'left',
        //Set background and text color when this is the current active path
        background: isCurrentPath ? theme.palette.secondary.main : undefined,
        color: isCurrentPath ? theme.palette.background.default : undefined,
      }}
      onClick={onClick}
      role='link'
      aria-current={isCurrentPath ? 'page' : undefined}
    >
      {navElement.title[language]}
    </LinkWrapper>
  )
}
