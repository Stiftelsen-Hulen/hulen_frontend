import { Position, PositionShiftType } from '@/types/sanity/joinUsPage/position'
import { Stack, Typography } from '@mui/material'
import { useMemo } from 'react'
import { ButtonRow } from './ButtonRow'

export const PositionButtons = ({ positions }: { positions: Position[] }) => {
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
