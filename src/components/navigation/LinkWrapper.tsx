import type { LinkProps } from 'next/link'
import type { LinkProps as MuiLinkProps } from '@mui/material'
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { PropsWithChildren } from 'react'

export const LinkWrapper = ({
  children,
  isActive,
  ...rest
}: PropsWithChildren<LinkProps & MuiLinkProps & { isActive?: boolean }>) => {
  const theme = useTheme()

  return (
    <MuiLink
      component={Link}
      {...rest}
      sx={{
        background: isActive ? theme.palette.secondary.main : theme.palette.background.default,
        color: isActive ? theme.palette.background.default : theme.palette.text.primary,
      }}
    >
      {children}
    </MuiLink>
  )
}
