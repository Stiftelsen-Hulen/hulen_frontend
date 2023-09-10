import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const hulen_black = '#130F0C'
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
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
})

export default theme
