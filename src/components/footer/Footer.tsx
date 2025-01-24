'use client'
import { hulen_yellow_text } from '@/styles'
import type { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack } from '@mui/material'
import { styled } from '@mui/system'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs'
import type {
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from '@portabletext/react'
import { PortableText } from '@portabletext/react'
import { SanityLocaleImageComponent } from '../sanity'
import type { LocaleImage } from '@/types/sanity'

const StyledStack = styled(Stack)({
  p: {
    color: 'white',
  },
  '&>*': {
    margin: 0,
  },
  '& h2': {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
  },
  '& img': {
    maxWidth: '8rem',
  },
  a: { color: 'white' },
})

const StyledFooterWrapper = styled(Box)({
  padding: '2rem 1rem',
  display: 'flex',
  gap: '2rem',
  width: '100%',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
})
const StyledFooterBorder = styled(Box)({
  padding: '2rem 1rem',
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
 */
export const Footer = ({ footerElements }: { footerElements: SanityFooterElements[] }) => {
  const { language } = useLanguage()

  /**
   * To be able to use the LocaleImage component, we must declare how PortableText should serialize it.
   * @see HulenPortableText for better description.
   */
  const serializers: Partial<PortableTextReactComponents> = {
    types: {
      localeImage: (localeImageProps: PortableTextTypeComponentProps<LocaleImage>) => (
        <SanityLocaleImageComponent imageProps={localeImageProps} />
      ),
    },
  }

  return (
    <StyledFooterBorder component={'footer'}>
      <StyledFooterWrapper
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        {footerElements.map((footerElement) => (
          <StyledStack key={footerElement.sortOrder}>
            <PortableText value={footerElement.footerElement[language]} components={serializers} />
          </StyledStack>
        ))}
      </StyledFooterWrapper>
    </StyledFooterBorder>
  )
}
