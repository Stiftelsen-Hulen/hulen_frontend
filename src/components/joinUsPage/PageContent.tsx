'use client'

import { hulen_black, hulen_yellow } from '@/styles'
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

export const JoinUsPageContent = ({ content }: { content: JoinUsSanityContent }) => {
  const { language } = useLanguage()
  console.log(content.positions)

  return (
    <Stack>
      <Typography variant='h1'>{content.pageTitle[language]}</Typography>
      <Box display='flex' justifyContent={'space-between'}>
        <Link href='#positions'>Stillinger</Link>
        <Link href='#benefits'>fordeler</Link>
        <Link href='#join'>bli med</Link>
      </Box>
      <Stack>
        <PortableText value={content.field[language]} />
      </Stack>

      <PositionButtons positions={content.positions} />
      <Stack>
        {content.positions.map((position, index) => (
          <PositionEntry position={position} key={index} />
        ))}
      </Stack>
      <BenefitsSection content={content.benefitsSection} />
      <JoinUsSection content={content.joinSection} />
    </Stack>
  )
}

const PositionEntry = ({ position }: { position: Position }) => {
  const { language } = useLanguage()

  return (
    <Box display='flex' id={`#${position.title[language]}`}>
      <Typography>{position.title[language]}</Typography>
      <PortableText value={position.description[language]} />
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
    <Stack>
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

const ButtonRow = ({ title, positions }: { title: string; positions: Position[] }) => {
  const { language } = useLanguage()

  return (
    <Stack>
      <Typography>{title}</Typography>
      <Box>
        {positions.map((position, index) => (
          <Button href={`#${position.title[language]}`} key={index}>
            {position.title[language]}
          </Button>
        ))}
      </Box>
    </Stack>
  )
}

const BenefitsSection = ({ content }: { content: BenefitsSectionContent }) => {
  const { language } = useLanguage()

  return (
    <Box display='flex' id='benefits'>
      <Box>
        <Typography variant='h3'>{content.header[language]}</Typography>
      </Box>
      <Stack>
        <PortableText value={content.content[language]} />
      </Stack>
    </Box>
  )
}

const JoinUsSection = ({ content }: { content: JoinSanitySection }) => {
  const { language } = useLanguage()

  return (
    <Paper sx={{ backgroundColor: hulen_yellow }}>
      <Stack id='join'>
        <Typography sx={{ color: hulen_black }}>{content.header[language]}</Typography>
        <PortableText value={content.content[language]} />
        <Box display='flex'>
          <Typography sx={{ color: hulen_black }}>{content.emailPreface[language]}</Typography>
          <Link href={`mailto:${content.email}`}>{content.email}</Link>
        </Box>
      </Stack>
    </Paper>
  )
}
