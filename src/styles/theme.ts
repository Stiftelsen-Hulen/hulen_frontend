import { createTheme } from '@mui/material/styles' //this sometimes complains, ignore it.
import { Sunflower } from 'next/font/google'

//We use google fonts for the simple reason that they are free. You can easily add more fonts by doing as below, then inserting them to font families in the places you need them
//Note that if someone ask you to add an adobe font, slap them.
const sunflower = Sunflower({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

//Define all colours in project here. Aspire to not use them globally
export const hulen_black = '#000000'
export const hulen_yellow = '#F7BD13'
export const hulen_yellow_text = '#FFD000'

/** This is the global theme. Put styles that are global, i.e. stuff you want everywhere here.
 *  If adding new options (such as a new typography option, button variant), you will need to extend
 *  the mui.d.ts for typescript to allow it. If you want to access the theme directly to read the values,
 *  use the hook "const theme = useTheme()" import from MATERIAL UI (NOT emoticon).
 */
const theme = createTheme({
  //Palette is a predefined global "this are the colour settings" that MuI inherits from. Note that these values
  //are used by many MuI components as default values. We don't really use any of the fancy ones right now, but worth keeping in mind if adding later.
  palette: {
    background: {
      default: hulen_black,
    },
    secondary: {
      main: hulen_yellow,
    },
    text: {
      primary: hulen_yellow_text,
    },
  },
  //Typography is all text elements
  typography: {
    fontFamily: [sunflower.style.fontFamily, 'sans-serif'].join(','),
    h1: {
      fontSize: '3.313rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.625rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '2rem',
    },
    h5: { fontSize: '1.813rem' },
    body1: {
      fontSize: '1.375rem',
      fontWeight: '300',
      '&>a': {
        color: 'white',
        textDecorationColor: hulen_yellow_text,
      },
    },
    link: {
      color: 'white',
      textDecorationColor: hulen_yellow_text,
    },
    menuLink: {
      transition: '0.3s',
      padding: '0.25rem',
      fontSize: '1.5rem',
      lineHeight: 1.334,
      fontWeight: 300,
      textAlign: 'center',
      textWrap: 'nowrap',
      '&:hover': {
        backgroundColor: hulen_yellow,
        color: hulen_black,
      },
    },
  },

  //If overriding specific components insert them here
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: '0.3s',
          '&:hover': {
            backgroundColor: hulen_yellow,
            svg: {
              fill: hulen_black,
            },
          },
          svg: {
            fill: hulen_yellow_text,
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'positionButton' },
          style: {
            color: hulen_black,
            backgroundColor: hulen_yellow_text,
            borderRadius: '1.563rem',
            transition: '0.4s',
            boxSizing: 'border-box',
            fontSize: '1.438rem',
            padding: '0.5rem 1rem',
            '&:hover': {
              color: hulen_black,
              backgroundColor: hulen_yellow_text,
              transform: 'scale(1.2)',
              transitionTimingFunction: ' cubic-bezier(0.47,2.02,.31,-.36)',
            },
          },
        },
        {
          props: { variant: 'linkButton' },
          style: {
            unset: 'all',
            color: hulen_yellow_text,
            backgroundColor: 'transparent',
            textDecoration: 'underline',
            fontSize: '1.5rem',
            '&:hover': {
              color: hulen_yellow,
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: { variant: 'menuLinkButton', disableRipple: true },
          style: {
            textDecoration: 'none',
            textTransform: 'none',
            color: hulen_yellow_text,
            transition: '0.3s',
            padding: '0.25rem',
            fontSize: '1.5rem',
            lineHeight: 1.334,
            fontWeight: 300,
            borderRadius: 0,
            width: '100%',
            justifyContent: 'flex-start',
            '&:focus-visible': {
              outline: 'revert',
            },
            '&:hover': {
              backgroundColor: hulen_yellow,
              color: hulen_black,
            },
          },
        },
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'menuDrawer' },
          style: {
            backgroundColor: hulen_black,
            borderLeft: '1.188rem',
            borderLeftStyle: 'double',
            borderLeftColor: hulen_yellow_text,
            minWidth: '18.75rem',
            maxWidth: '80%',
          },
        },
      ],
    },
    MuiLink: {
      variants: [
        {
          props: { variant: 'menuLink' },
          style: {
            textDecoration: 'none',
            color: hulen_yellow_text,
            transition: '0.3s',
            padding: '0.25rem',
            fontSize: '1.5rem',
            lineHeight: 1.334,
            fontWeight: 300,
          },
        },
      ],
    },
  },
})

export default theme
