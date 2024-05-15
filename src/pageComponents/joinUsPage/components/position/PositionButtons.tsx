import { Position, PositionShiftType } from '@/types/sanity/joinUsPage/position'
import { Stack, Typography } from '@mui/material'
import { useMemo } from 'react'
import { ButtonRow } from './ButtonRow'
import { PositionDescriptionSection } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { PortableText } from '@portabletext/react'

/**
 * PositionButtons generates buttons for different job positions, and organizing them based on their shift type.
 * It also displays introductory text related to the positions.
 * @param param0 
 * @returns 
 */
export const PositionButtons = ({
  positions,
  introductoryText,
}: {
  positions: Position[]
  introductoryText: PositionDescriptionSection
}) => {
  const { language } = useLanguage()

  const organized = useMemo(() => {
    const byType: Record<PositionShiftType, Position[]> = { night_shift: [], outside_regular: [] }

    //Categorize positions based on shift type
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
      <Typography variant='h3'>{introductoryText.header[language]}</Typography>
      <Stack>
        <PortableText value={introductoryText.content[language]} />
      </Stack>

      {Object.entries(organized).map(([key, value]) => (
        <ButtonRow key={key} title={key} positions={value} />
      ))}
    </Stack>
  )
}
