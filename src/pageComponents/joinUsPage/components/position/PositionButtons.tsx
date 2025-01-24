import type { Position, PositionShiftType } from '@/types/sanity/joinUsPage/position'
import { Stack } from '@mui/material'
import { useMemo } from 'react'
import { ButtonRow } from './ButtonRow'

/**
 * PositionButtons generates buttons for different job positions, and organizing them based on their shift type.
 */
export const PositionButtons = ({ positions }: { positions: Position[] }) => {
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
    <Stack sx={{ alignItems: 'center', gap: '2rem' }}>
      {Object.entries(organized).map(([key, value]) => (
        <ButtonRow key={key} title={key} positions={value} />
      ))}
    </Stack>
  )
}
