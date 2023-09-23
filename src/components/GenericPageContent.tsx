'use client'

import type { GenericPageProps } from '@/types/sanity/genericPage/genericPageProps'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { PortableText } from '@portabletext/react'
import { Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export const GenericPagePropsRenderer = ({
  genericSanityPageProps,
}: {
  genericSanityPageProps: GenericPageProps
}) => {
  const { language } = useLanguage()
  const customPortableTextComponents = {
    types: {
      localeImage: (localeImageProps: any) => (
        <SanityLocaleImageComponent imageProps={localeImageProps} />
      ),
    },
  }

  return (
    <Stack alignItems={'center'}>
      {genericSanityPageProps.locale[language].map((sanityBlock) => (
        <PortableText
          key={sanityBlock._key}
          value={sanityBlock}
          components={customPortableTextComponents}
        />
      ))}
    </Stack>
  )
}

const SanityLocaleImageComponent = ({ imageProps }: { imageProps: any }) => {
  if (imageProps?.value == undefined || imageProps.value?.Image?.asset.metadata == undefined) {
    return <p>error rendering image, wrong config</p>
  }

  if (imageProps.value.linkUrl === undefined) {
    return (
      <Image
        layout='responsice'
        src={imageProps.value.Image.asset.url ?? ''}
        alt={imageProps.value.altText ?? ''}
        width={imageProps.value.Image.asset.metadata.dimensions.width ?? 100}
        height={imageProps.value.Image.asset.metadata.dimensions.height ?? 100}
      />
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
