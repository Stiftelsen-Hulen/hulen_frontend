import type { Position } from '@/types/sanity/joinUsPage/position'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { scrollToSection } from '@/util/helpers'
import { getTranslationObject } from '@/util/sanity'
import { Box, Button, Stack, Typography } from '@mui/material'

/**
 * ButtonRow displays positions as a row of buttons under one title
 * The button row adapts by wrapping onto the next line on smaller screens.
 * @param title type string
 * @param positions type array of job positions
 */
export const ButtonRow = async ({ title, positions }: { title: string; positions: Position[] }) => {
  const { language } = useLanguage()
  const titleTranslation = await getTranslationObject(title)

  return (
    <Stack sx={{ alignItems: 'center', gap: '1rem' }}>
      <Typography variant='h4'>{titleTranslation.content[language]}</Typography>
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
