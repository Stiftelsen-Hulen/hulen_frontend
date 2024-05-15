import { Position } from '@/types/sanity/joinUsPage/position'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { scrollToSection } from '@/util/helpers'
import { Box, Button, Stack, Typography } from '@mui/material'

/**
 * ButtonRow displays positions as a row of buttons under one title
 * The button row adapts by wrapping onto the next line on smaller screens.
 * @param title type string
 * @param positions type array of job positions
 */
export const ButtonRow = ({ title, positions }: { title: string; positions: Position[] }) => {
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
    <Stack sx={{ alignItems: 'center', gap: '1rem' }}>
      <Typography variant='h4'>{getTranslatedTitle()}</Typography>
      <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {positions.map((position, index) => (
          <Button
            variant='positionButton'
            onClick={() => scrollToSection(position.title[language])}
            key={index}
          >
            {position.title[language]}
          </Button>
        ))}
      </Box>
    </Stack>
  )
}
