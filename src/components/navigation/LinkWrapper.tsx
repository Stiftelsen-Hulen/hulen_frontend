import type { LinkProps } from 'next/link'
import type { LinkProps as MuiLinkProps } from '@mui/material'
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'
import type { PropsWithChildren } from 'react'

/**
 * Applies MUI Link styling to a Next/Link
 */
export const LinkWrapper = ({ children, ...rest }: PropsWithChildren<LinkProps & MuiLinkProps>) => {
  return (
    <MuiLink component={Link} {...rest}>
      {children}
    </MuiLink>
  )
}
