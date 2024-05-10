'use client'
import { hulen_yellow_text } from '@/styles'
import { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack } from '@mui/material'
import { styled } from '@mui/system'
import { PortableText } from '@portabletext/react'

const StyledStack = styled(Stack)({
  p: {
    color: 'white',
  },
  '&>*': {
    margin: 0,
  },
})

const StyledFooterWrapper = styled(Box)({
  paddingTop: '2rem',
  marginTop: 'auto',
  display: 'flex',
  gap: '2rem',
  justifyContent: 'space-around',
  borderTop: '0.188rem',
  borderTopStyle: 'double',
  borderTopColor: hulen_yellow_text,
  flexWrap: 'wrap',
})

export const Footer = ({ footerElements }: { footerElements: SanityFooterElements[] }) => {
  const { language } = useLanguage()

  return (
    <StyledFooterWrapper
      component={"footer"}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'default' },
      }}
    >
      {footerElements.map((footerElement) => (
        <StyledStack key={footerElement.sortOrder}>
          <PortableText value={footerElement.footerElement[language]} />
        </StyledStack>
      ))}
    </StyledFooterWrapper>
  )
}
