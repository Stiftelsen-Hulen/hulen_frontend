import { SupportedLanguageTypes } from '@/configs'
import { hulen_yellow, hulen_yellow_text } from '@/styles'
import { SanityNavElement } from '@/types/sanity'
import { ArrowDownward } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

export const NavLink = ({
  navElement,
  language,
  isCurrentPath,
  onClick,
}: {
  navElement: SanityNavElement
  language: SupportedLanguageTypes
  isCurrentPath: boolean
  onClick: MouseEventHandler
}) => {
  return (
    <Link
      href={navElement.subUrl}
      passHref
      style={{
        transition: '0.3s',
        padding: '0.25rem',
        fontSize: '1.5rem',
        lineHeight: 1.334,
        fontWeight: 300,
        cursor: 'pointer',
        color: hulen_yellow_text,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ArrowDownward style={{ color: isCurrentPath ? hulen_yellow : 'initial' }} />
      <Typography variant='menuLink' onClick={onClick}>
        {navElement.title[language]}
      </Typography>
    </Link>
  )
}
