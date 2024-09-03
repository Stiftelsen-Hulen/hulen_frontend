'use client'
import type { LanguageOptions } from '@/types/language'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { styled } from '@mui/system'
import Link from 'next/link'

const StyledLink = styled(Link)({
  color: 'white',
  position: 'absolute',
  textAlign: 'center',
  left: '50%',
  top: 0,
  transform: 'translateY(-100%)',
  transition: 'transform 0.2s',
  '&:focus': {
    transform: 'translateY(25%)',
  },
})
/**
 * The SkipLink component allows keyboard and screen reader users to skip directly to the main content.
 * Place it at the top of the <body> to ensure it's the first tabbable element on the page.
 */
export const SkipLink = () => {
  const { language } = useLanguage()

  const moveFocus = () => {
    //Move focus to #maincontent so tab indexing also moves
    const mainContent = document.getElementById('maincontent')
    mainContent?.focus()
  }

  const content: Record<LanguageOptions, string> = {
    en: 'Skip to main content',
    no: 'Hopp til hovedinnhold',
  }

  return (
    <StyledLink href='#maincontent' onClick={moveFocus}>
      {content[language]}
    </StyledLink>
  )
}
