'use client'

import type { GenericPageProps } from '@/types/sanity/genericPage/genericPageProps'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import {
  PortableText,
  PortableTextComponentProps,
  PortableTextReactComponents,
} from '@portabletext/react'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from '@portabletext/types'

export const GenericPagePropsRenderer = ({
  genericSanityPageProps,
}: {
  genericSanityPageProps: GenericPageProps
}) => {
  const { language } = useLanguage()
  const serializers: Partial<PortableTextReactComponents> = {
    types: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      localeImage: (localeImageProps: any) => (
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
      {genericSanityPageProps.locale[language].map((sanityBlock) => (
        <PortableText key={sanityBlock._key} value={sanityBlock} components={serializers} />
      ))}
    </Stack>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SanityLocaleImageComponent = ({ imageProps }: { imageProps: any }) => {
  if (imageProps?.value == undefined || imageProps.value?.Image?.asset.metadata == undefined) {
    return <p>error rendering image, wrong config</p>
  }

  if (imageProps.value.linkUrl === undefined) {
    return (
      <Box
        sx={{
          width: imageProps.value.Image.asset.metadata.dimensions.width ?? '6.25rem',
          height: imageProps.value.Image.asset.metadata.dimensions.height ?? '625rem',
        }}
      >
        <Image
          layout='responsive'
          src={imageProps.value.Image.asset.url ?? ''}
          alt={imageProps.value.altText ?? ''}
          width={imageProps.value.Image.asset.metadata.dimensions.width ?? 100}
          height={imageProps.value.Image.asset.metadata.dimensions.height ?? 100}
        />
      </Box>
    )
  }

  return (
    <Link href={imageProps.value.linkUrl}>
      <Image
        style={{
          width: '100%',
          height: 'auto',
        }}
        src={imageProps.value.Image.asset.url ?? ''}
        alt={imageProps.value.altText ?? ''}
        width={imageProps.value.Image.asset.metadata.dimensions.width ?? 100}
        height={imageProps.value.Image.asset.metadata.dimensions.height ?? 100}
      />
    </Link>
  )
}
