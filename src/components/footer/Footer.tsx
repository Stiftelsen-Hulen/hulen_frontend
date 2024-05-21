'use client'
import { hulen_yellow_text } from '@/styles'
import { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack } from '@mui/material'
import { styled } from '@mui/system'
import { PortableText } from '@portabletext/react'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'

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
  paddingBottom: '2rem',
  display: 'flex',
  gap: '2rem',
  width: '100%',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
})
const StyledFooterBorder = styled(Stack)({
  paddingTop: '2rem',
  marginTop: 'auto',
  paddingBottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  borderTop: '0.188rem',
  borderTopStyle: 'double',
  borderTopColor: hulen_yellow_text,
})
/**
 * A Footer is located at the bottom of a webpage, containing information such as contact details, or links to important pages.
 * For accessibility purposes, defined by the HTML <footer> tag.
 * @param param0 
 * @returns 
 */
export const Footer = ({ footerElements }: { footerElements: SanityFooterElements[] }) => {
  const { language } = useLanguage()

  return (
    <StyledFooterBorder>
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
    </StyledFooterBorder>
  )
}
