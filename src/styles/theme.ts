import { Karla } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const karla = Karla({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const hulen_black = '#000000'
const hulen_yellow = '#F7BD13'
const hulen_yellow_text = '#FFD000'

const theme = createTheme({
  palette: {
    background: {
      default: hulen_black,
    },
    text: {
      primary: hulen_yellow_text,
    },
  },
  typography: {
    fontFamily: karla.style.fontFamily,
  },
})

export default theme
