'use client'
import type { TechInfoPageContent } from '@/types/sanity/infoPages/techInfoPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Grid, Typography } from '@mui/material'
import { TechCategory } from './components'

/**
 * Renders the content for the Tech Info page, includes:
 * Title and contact info
 * Categories section
 */
export const TechSection = ({ content }: { content: TechInfoPageContent }) => {
  const { language } = useLanguage()

  return (
    <>
      <Box sx={{ width: '100%', alignSelf: 'start', textAlign: 'center' }}>
        <Typography variant='h1' fontWeight={700} width={'100%'}>
          {content.header[language]}
        </Typography>
        <Typography variant='body1'>{content.emailDescription[language]}</Typography>
        <Typography variant='link' component={'a'} href={`mailto:${content.email}`}>
          {content.email}
        </Typography>
      </Box>
      <Grid container spacing='2rem' paddingY='4rem' maxWidth={'45rem'} margin={'auto'}>
        {content.categories.map((category, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <TechCategory category={category}></TechCategory>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
