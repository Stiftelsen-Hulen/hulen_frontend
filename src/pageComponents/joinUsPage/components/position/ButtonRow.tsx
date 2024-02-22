import { Position } from '@/types/sanity/joinUsPage/position'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { scrollToSection } from '@/util/helpers'
import { Box, Button, Stack, Typography } from '@mui/material'

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
    <Stack alignItems={'center'} gap='1rem'>
      <Typography variant='h4'>{getTranslatedTitle()}</Typography>
      <Box display='flex' gap='0.5rem'>
        {positions.map((position, index) => (
          <Button
            variant='positionButton'
            onClick={() => scrollToSection(position.title[language])}
            key={index}
            sx={{}}
          >
            {position.title[language]}
          </Button>
        ))}
      </Box>
    </Stack>
  )
}
