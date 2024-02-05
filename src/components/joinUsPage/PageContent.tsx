'use client'

import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'
import {
  BenefitsSectionContent,
  JoinSanitySection,
  JoinUsSanityContent,
} from '@/types/sanity/joinUsPage'
import { Position, PositionShiftType } from '@/types/sanity/joinUsPage/position'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Button, Link, Paper, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { useMemo } from 'react'
import Image from 'next/image'
import { SanityImage } from '@/types/sanity'
import { styled } from '@mui/system'

function scrollToSection(elementId: string) {
  const matchingElement = document.getElementById(elementId)
  console.log(matchingElement, elementId)
  if (matchingElement) {
    matchingElement.scrollIntoView({ behavior: 'smooth' })
  }
}

const LinkButton = styled(Button)({
  unset: 'all',
  color: hulen_yellow_text,
  backgroundColor: 'transparent',
  textDecoration: 'underline',
  fontSize: '24px',
  '&:hover': {
    color: hulen_yellow,
    backgroundColor: 'transparent',
  },
})

export const JoinUsPageContent = ({ content }: { content: JoinUsSanityContent }) => {
  const { language } = useLanguage()
  console.log(content.positions)

  return (
    <Box display='flex' justifyContent={'center'} width={'100%'}>
      <Stack maxWidth={'1040px'} textAlign={'center'} alignItems={'center'}>
        <Typography variant='h2' fontWeight={700}>
          {content.pageTitle[language]}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
          display='flex'
          justifyContent={'space-between'}
          gap='1rem'
          width='100%'
        >
          <LinkButton onClick={() => scrollToSection('positions')}>Stillinger</LinkButton>
          <LinkButton onClick={() => scrollToSection('benefits')}>Fordeler</LinkButton>
          <LinkButton onClick={() => scrollToSection('join')}>Bli med</LinkButton>
        </Box>
        <Stack>
          <PortableText value={content.field[language]} />
        </Stack>

        <PositionButtons positions={content.positions} />
        <Stack gap='2rem' margin='2rem 0rem' id='positions'>
          {content.positions.map((position, index) => (
            <PositionEntry position={position} key={index} />
          ))}
        </Stack>
        <BenefitsSection content={content.benefitsSection} />
        <JoinUsSection content={content.joinSection} />
      </Stack>
    </Box>
  )
}

const PositionEntry = ({ position }: { position: Position }) => {
  const { language } = useLanguage()
  console.log(position)

  const image = position.descImage

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '1rem', md: '4rem' },
        justifyContent: { xs: 'default', md: 'space-between' },
        alignItems: { xs: 'center', md: 'default' },
      }}
      id={`${position.title[language]}`}
    >
      <Stack sx={{ justifyContent: 'center', maxWidth: { xs: '100%', md: '60%' } }}>
        <Typography variant='h3' textAlign={'center'}>
          {position.title[language]}
        </Typography>
        <PortableText value={position.description[language]} />
      </Stack>
      {image && <PositionSanityImage imageData={image} width={368} />}
    </Box>
  )
}

const PositionSanityImage = ({ imageData, width }: { imageData: SanityImage; width?: number }) => {
  const calcWidth = () => {
    if (width) {
      return width
    }

    return imageData.asset.metadata.dimensions.width
  }

  const calcHeight = () => {
    if (width) {
      return width / imageData.asset.metadata.dimensions.aspectRatio
    }

    return imageData.asset.metadata.dimensions.height
  }

  return (
    <Box width='100%' height='100%' maxWidth={`${calcWidth()}px`} maxHeight={`${calcHeight()}px`}>
      <Image
        layout='responsive'
        placeholder='blur'
        blurDataURL={imageData.asset.metadata.blurHash}
        src={imageData.asset.url ?? ''}
        alt={'todo'}
        width={calcWidth()}
        height={calcHeight()}
      />
    </Box>
  )
}

const PositionButtons = ({ positions }: { positions: Position[] }) => {
  const organized = useMemo(() => {
    const byType: Record<PositionShiftType, Position[]> = { night_shift: [], outside_regular: [] }

    positions.forEach((position) => {
      const prevValue = byType[position.category]
      if (prevValue === undefined) {
        byType[position.category] = [position]
      } else {
        byType[position.category] = [...prevValue, position]
      }
    })

    return byType
  }, [positions])

  return (
    <Stack alignItems={'center'} gap='2rem'>
      {/*TODO: Add to sanity */}
      <Typography variant='h3'>Hva kan jeg jobbe som?</Typography>
      {/*TODO: Add to sanity */}
      <Typography>
        På Hulen har vi forskjellige stillinger som er nødvendige for å holde i gang fete konserter
        og arrangement hver uke. Hulen er drevet av frivillige, så vi er avhengig av våre interne!
        Nedenfor kan du lese mer om hver av stillingene vi tilbyr, og hva du kan få ut av dem.
      </Typography>
      {Object.entries(organized).map(([key, value]) => (
        <ButtonRow key={key} title={key} positions={value} />
      ))}
    </Stack>
  )
}

const StyledNavigationButton = styled(Button)({
  color: hulen_black,
  backgroundColor: hulen_yellow_text,
  borderRadius: '25px',
  transition: '0.4s',
  boxSizing: 'border-box',
  fontSize: '23px',
  padding: '0.5rem 1rem',
  '&:hover': {
    color: hulen_black,
    backgroundColor: hulen_yellow_text,
    transform: 'scale(1.2)',
    transitionTimingFunction: ' cubic-bezier(0.47,2.02,.31,-.36)',
  },
})

const ButtonRow = ({ title, positions }: { title: string; positions: Position[] }) => {
  const { language } = useLanguage()

  const getTranslatedTitle = () => {
    if (title === 'night_shift') {
      if (language == 'no') {
        return 'Kveldstid'
      }

      return 'Evening'
    } else if (language === 'no') {
      return 'Utenfor åpningstid'
    }

    return 'Outside regular hours'
  }

  return (
    <Stack alignItems={'center'} gap='1rem'>
      <Typography variant='h4'>{getTranslatedTitle()}</Typography>
      <Box display='flex' gap='0.5rem'>
        {positions.map((position, index) => (
          <StyledNavigationButton
            onClick={() => scrollToSection(position.title[language])}
            key={index}
            sx={{}}
          >
            {position.title[language]}
          </StyledNavigationButton>
        ))}
      </Box>
    </Stack>
  )
}

const BenefitsSection = ({ content }: { content: BenefitsSectionContent }) => {
  const { language } = useLanguage()

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '4rem',
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      id='benefits'
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
        <Typography variant='h4' fontWeight={700} textAlign={'center'}>
          {content.header[language]}
        </Typography>
      </Box>
      <Stack
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          'p, h1, h2, h3, h4, h5': { textAlign: 'center' },
          li: { textAlign: 'initial' },
        }}
      >
        <PortableText value={content.content[language]} />
      </Stack>
    </Box>
  )
}

const JoinUsSection = ({ content }: { content: JoinSanitySection }) => {
  const { language } = useLanguage()

  return (
    <Paper sx={{ backgroundColor: hulen_yellow_text, borderRadius: '0px', padding: '4rem' }}>
      <Stack id='join' sx={{ textAlign: 'center', alignItems: 'center', color: hulen_black }}>
        <Typography variant='h2' sx={{ color: hulen_black, fontWeight: 700 }}>
          {content.header[language]}
        </Typography>
        <PortableText value={content.content[language]} />
        <Box display='flex'>
          <Typography sx={{ color: hulen_black }}>{content.emailPreface[language]}</Typography>
          <Link
            href={`mailto:${content.email}`}
            sx={{ color: 'white', textDecorationColor: 'white', fontStyle: 'italic' }}
          >
            {content.email}
          </Link>
        </Box>
      </Stack>
    </Paper>
  )
}
