# Hulen Frontend

This is an improved version of the frontend for [hulen.no](https://www.hulen.no). The content is from [Hulen Studio (sanity)](https://github.com/Daedalusish/hulen_sanity).


## Getting Started
1. Install Node Version Manager (NVM) Version 20. (Recommend not to do this directly but through NVM [guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).
2. Clone the repository
   ```bash
   git clone https://github.com/Daedalusish/hulen_frontend.git
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Run the project
   ```bash
   npm run dev
   ```
5. Open (http://localhost:XXXX) with your browser to see the result.  

## Technologies used
- [Next.js](https://nextjs.org) with [Typescript](https://www.typescriptlang.org)
- [Material UI](https://mui.com/material-ui/)

## Infrastructure
Descriptions of some of the important folders:
- src/app: The main source code containing the different pages
- src/components: Reusable UI components
- src/pageComponents: Page specific components
- src/styles: Global styles
- src/types: Typescript definitions
- src/utils: Helper funcions

## Deployment
The project is deployed in [Vercel](https://vercel.com). 

[Link to webpage](https://hulen-frontend-hl7e-ps05all6b-daedalusishs-projects.vercel.app).



## Contact
Maintainer: [XXXX](mailto:XXXXX)




## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Typescript basics

Typescript is an extension of Javascript. The purpose of this is to introduce type safety to typescript. You might notice that it says that variables can be undefined in a moment, that attributes does not exist and so on. These warnings are there to make sure you properly null check and do not attempt to do something entirely stupid.

However, Typescript is not the be all and end all - we are not operating in a completely type based system, but rather have extended javascript with extra rules that helps us. This is because we often denote types in Interfaces, Enums or Types and are subject to human failures when entering info. Data received from API's might change, or we denote something as the wrong type (or abuse any. Try to only use any as a value if you really have no other option.). Always consider typescript a guiding hand that you'll never try to violate, but never trust it completely to cover for you.

### index.ts

You'll find all over the project "index.ts" files. These are to bundle togheter the exports of different files. We do this to declutter our import statements and make things a little more prettier. They aren't required, but they do help in maintaining the project.

## Material UI basics

Material UI is a wonderful, but sometimes daunting and confusing CSS framework.

## What tags to use

Normally in html, you use <div> for containers, <p> for text and so on. While you can technically still do it, it is anti pattern and
you do not inherit much of the base styling from specific components. So instead of using these, here is a handy short guide to the Mui Variants:

### <Typography>

<Typography> is a text component. Changing the variant changes the styling and semantic tag. F.eks, setting variant='h1' changes it to a h1 tag with the styling from the theme.typography.h1 and so on. Use this for all texts

### <Box>

<Box> is your standard <div>. It does not do anything more special by default, but we use this as we have access to the SX prop and other styling

### <Stack>

<Stack> is a box with some default styling, namely display='flex' and flexDirection:'column'

### <Paper>

<Paper> is a <div> with more styling. Think of it as a "styled container" and typically comes with some default styling such as background, rounded borders, box shadow etc.

## Avoid CSS confusion:

There are different ways of styling elements in this project.
Normal inline styling with the style attribute (meaning directly inside the tsx file (not a css/scss/sass file), or the Material UI way with styled component or sx attribute.

MUI, the component library Material UI, normally use styled components and the sx-attribute. (You can use style, but shouldn't normally)
A styled component is a wrapper on another component, but adds styling. It's used as a normal React component.
If you want the technical name, it's a "higher order component", since it extends another component.

```
export const StyledMenuItem = styled(MenuItem)({
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
```

You can also style Material UI component through the sx attribute. This is the recommended way when using MUI. You still can use the style prop in rare circumstances, see: https://stackoverflow.com/questions/72527461/when-should-i-use-style-instead-of-sx-prop-in-material-ui

It takes an object with the styles as an argument
`<MenuItem sx={{color:hulen_black}}/>`

For other React components, like Next.js components or those you make yourself, use the style attribute like normal, or stylesheets. Try to keep things consistent though. Don't write inline css in one place, and use a style sheet for another. Here we're using inline styling.

Like this:
`<SomeComponent style={{color:hulen_yellow}}>`
