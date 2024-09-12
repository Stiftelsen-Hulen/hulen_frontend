/**  This file is for extending and overriding the global Material Ui typescript declarations.
 *  In laymen terms, extend the classes for when we want extra attributes or change some inherit behaviour.
 */

/** ***************************************
 *  Typography overrides
 *  For extending typography (p, h1, or custom styling)
 */

declare module '@mui/material/styles' {
  interface TypographyVariants {
    link?: CSSProperties
    menuLink?: CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    link: CSSProperties
    menuLink: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    link: true
    menuLink: true
  }
}

/** ***************************************
 *  Paper overrides
 *  For extending Buttons
 */

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true
    secondary: true
    tertiary: true
    positionButton: true
    linkButton: true
    menuLinkButton: true
  }
}

/** ***************************************
 *  Paper overrides
 *  For extending typography (p, h1, or custom styling)
 */
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    menuDrawer: true
  }
}

//Sometimes, the typescript engine suck at picking up these files so we export "anything" for it to notice
// eslint-disable-next-line import/no-anonymous-default-export
export default ''
