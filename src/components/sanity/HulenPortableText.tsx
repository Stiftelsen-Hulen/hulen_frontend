'use client'

import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import type {
  PortableTextComponentProps,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from '@portabletext/react'
import { PortableText } from '@portabletext/react'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import type { PortableTextBlock } from '@portabletext/types'
import type { LocaleImage } from '@/types/sanity'
import type { LocalePortableTextBlock } from '@/types/sanity/genericPage/genericPageProps'
import { type ComponentProps } from 'react'
import { SanityImageComponent } from '.'

/**
 * Serializes the rich text content from a Sanity Text Block into React components.
 * The content from sanity follows the PortableText specification (https://portabletext.org/).
 *
 * For more information on using PortableText with React,
 * see: https://github.com/portabletext/react-portabletext#portabletextreact
 */
export function HulenPortableText({
  genericSanityPageProps,
}: {
  genericSanityPageProps: LocalePortableTextBlock
}) {
  const { language } = useLanguage()

  /**
   * The serializers define the appropriate components for the different block types.
   *
   * We map the content into the appropriate MUI components so that the content styling
   * follows the defined theme.
   */
  const serializers: Partial<PortableTextReactComponents> = {
    types: {
      localeImage: (localeImageProps: PortableTextTypeComponentProps<LocaleImage>) => (
        <SanityLocaleImageComponent imageProps={localeImageProps} />
      ),
    },
    list: (props: PortableTextComponentProps<PortableTextBlock>) => (
      <Typography component='ul' variant='body1'>
        {props.children}
      </Typography>
    ),
    listItem: (props: PortableTextComponentProps<PortableTextBlock>) => (
      <Typography component='li' variant='body1'>
        {props.children}
      </Typography>
    ),
    block: {
      h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='h1'>{children}</Typography>
      ),
      h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='h2'>{children}</Typography>
      ),
      h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='h3'>{children}</Typography>
      ),
      h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='h4'>{children}</Typography>
      ),
      h5: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='h5'>{children}</Typography>
      ),
      h6: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='h6'>{children}</Typography>
      ),
      blockquote: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='body1' style={{ fontStyle: 'italic' }}>
          {children}
        </Typography>
      ),
      normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <Typography variant='body1' paragraph>
          {children}
        </Typography>
      ),
    },
  }

  return (
    <Stack alignItems={'center'}>
      {genericSanityPageProps[language].map((sanityBlock) => (
        <PortableText key={sanityBlock._key} value={sanityBlock} components={serializers} />
      ))}
    </Stack>
  )
}

/**
 * Converts a LocaleImage type defined in Sanity into a SanityImageComponent.
 */
export function SanityLocaleImageComponent({
  imageProps,
}: {
  imageProps: PortableTextTypeComponentProps<LocaleImage>
}) {
  if (imageProps?.value == undefined || imageProps.value?.Image?.asset.metadata == undefined) {
    return <p>error rendering image, wrong config</p>
  }

  const imageComponentProps: ComponentProps<typeof SanityImageComponent> = {
    alt: imageProps.value.altText ?? '',
    imageData: imageProps.value.Image,
  }

  if (imageProps.value.linkUrl === undefined) {
    return <SanityImageComponent {...imageComponentProps} />
  }

  return (
    <Link href={imageProps.value.linkUrl}>
      <SanityImageComponent {...imageComponentProps} />
    </Link>
  )
}
