'use client'
import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'
import type { LanguageOptions } from '@/types/language'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import LanguageIcon from '@mui/icons-material/Language'
import type { SelectChangeEvent } from '@mui/material'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { styled } from '@mui/system'

const StyledSelect = styled(Select)({
  minHeight: '0rem!important',
  height: '2rem!important',
  display: 'flex',
  alignItems: 'flex-start',
  paddingLeft: '0.25rem',
  svg: {
    fill: hulen_yellow_text,
    padding: 0,
    height: '1.4rem',
    minHeight: '1.4rem',
  },
  fieldSet: {
    display: 'none',
  },
  '.MuiSelect-select': {
    fontWeight: 300,
    fontSize: '1.5rem',
    minHeight: '0rem!important',
    padding: 0,
    height: '1.4rem!important', //Race condition defines CSS priority order, some sinning required
    overflow: 'visible!important',
    '&:focus-visible': {
      outline: 'revert',
    },
  },
  input: {
    display: 'none',
  },
})

const StyledMenuItem = styled(MenuItem)({
  transition: '0.2s',
  '&:hover': {
    backgroundColor: hulen_yellow,
    color: hulen_black,
  },
  '&:focus-visible': {
    outline: 'revert',
  },
  fontWeight: 300,
  '&.Mui-selected': {
    fontWeight: 'bold',
    backgroundColor: `${hulen_black}!important`,
    '&:hover': {
      backgroundColor: `${hulen_yellow}!important`,
      color: `${hulen_black}!important`,
    },
  },
})

const StyledLanguageWrapper = styled(Box)({
  paddingBottom: '0.5rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '0.25rem',
})

/**
 * The Language selector is a dropdown menu for changing the language of the entire website.
 * As of now we have the language options norwegian and English
 * Learn more about localizing content here: https://www.sanity.io/docs/localization
 */
export const LanguageSelector = () => {
  const { changeLanguage, language } = useLanguage()

  const labels: Record<LanguageOptions, string> = { en: 'Language', no: 'Språk' }

  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    const newLanguage = event.target.value as LanguageOptions
    changeLanguage(newLanguage)
  }

  return (
    <StyledLanguageWrapper>
      <LanguageIcon />
      <FormControl>
        <InputLabel id='language-select-label' style={{ display: 'none' }}>
          {labels[language]}
        </InputLabel>
        <StyledSelect
          onChange={handleLanguageChange}
          value={language ?? 'en'}
          MenuProps={{ PaperProps: { sx: { backgroundColor: 'black' } } }}
          labelId='language-select-label'
        >
          <StyledMenuItem value='no'>Norsk</StyledMenuItem>
          <StyledMenuItem value='en'>English</StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </StyledLanguageWrapper>
  )
}
