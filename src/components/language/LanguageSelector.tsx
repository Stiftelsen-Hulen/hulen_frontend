'use client'
import { MenuItem, Select } from '@mui/material'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'
import { styled } from '@mui/system'

const StyledSelect = styled(Select)({
  minHeight: '0px!important',
  height: '2rem!important',
  display: 'flex',
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
    fontWeight: 400,
    fontSize: '1.5rem',
    minHeight: '0px!important',
    padding: 0,
    height: '1.4rem!important', //Race condition defines CSS priority order, some sinning required
    overflow: 'visible!important',
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
  fontWeight: 700,
  '&.Mui-selected': {
    fontWeight: 'bold',
    backgroundColor: `${hulen_black}!important`,
    '&:hover': {
      backgroundColor: `${hulen_yellow}!important`,
      color: `${hulen_black}!important`,
    },
  },
})

export const LanguageSelector = () => {
  const { changeLanguage, language } = useLanguage()

  return (
    <StyledSelect
      onChange={changeLanguage}
      value={language ?? 'en'}
      MenuProps={{ PaperProps: { sx: { backgroundColor: 'black' } } }}
    >
      <StyledMenuItem value='no'>Norsk</StyledMenuItem>
      <StyledMenuItem value='en'>English</StyledMenuItem>
    </StyledSelect>
  )
}
