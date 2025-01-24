# Hulen Frontend

This is an improved version of the frontend for [hulen.no](https://www.hulen.no). The content is from [Hulen Studio (sanity)](https://github.com/Daedalusish/hulen_sanity).


## Getting Started

1. Install Node Version 20. (Recommended to use NVM to do this, for more info on NVM see (https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

2. Clone the repository
   ```bash
   git clone https://github.com/Daedalusish/hulen_frontend.git
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Steps to create the .env file with environment variables.
   - Copy the `.env.example` file
      ```bash
         cp .env.example .env
      ```
   - Edit the `.env` file and replace the placeholders with the appropriate credentials.
        1. NEXT_PUBLIC_SANITY_PROJECT_ID: Log in to [Sanity.io](https://www.sanity.io), navigate to the **Projects**, select the **Hulen** project and copy the **PROJECT ID**.
        2. NEXT_PUBLIC_SANITY_DATASET: In the **Project Dashboard**, go to **Datasets** and use the title of the chosen dataset. 
6. Run the project
   ```bash
   npm run dev
   ```
7. Open http://localhost:3000 with your browser to see the result.  


## Technologies used

- [React](https://react.dev) version 18.2.21
- [Next.js](https://nextjs.org) version 13.4.19 with [Typescript](https://www.typescriptlang.org) version 5.2.2
- [Material UI](https://mui.com/material-ui/)


## Infrastructure

Descriptions of some of the main folders:
- `src/app/`: The main source code containing the different pages
- `src/components/`: Reusable UI components
- `src/pageComponents/`: Page specific components
- `src/styles/`: Global styles
- `src/types/`: Typescript definitions
- `src/utils/`: Helper funcions

### index.ts

You'll find all over the project `index.ts` files. These are to bundle together the exports of different files. We do this to declutter our import statements and make things a little prettier. They aren't required, but they do help in maintaining the project.


## Deployment

The project is deployed in [Vercel](https://vercel.com). 

[Link to the webpage](https://hulen-frontend.vercel.app).

## Technology descriptions

### Typescript basics

Typescript is an extension of JavaScript. The purpose of this is to introduce type safety to typescript. You might notice that it says that variables can be undefined in a moment, that attributes do not exist and so on. These warnings are there to make sure you properly null check and do not attempt to do something entirely stupid.

However, Typescript is not the be all and end all - we are not operating in a completely type based system, but rather have extended javascript with extra rules that helps us. This is because we often denote types in Interfaces, Enums or Types and are subject to human failures when entering info. Data received from API's might change, or we denote something as the wrong type (or abuse `any`. Try to only use `any` as a value if you really have no other option). Always consider typescript a guiding hand that you'll never try to violate, but never trust it completely to cover for you.

### Material UI basics

Material UI is a wonderful, but sometimes daunting and confusing CSS framework.

#### What tags to use

Normally in html, you use `<div>` for containers, `<p>` for text and so on. While you can technically still do it, it is antipattern and you do not inherit much of the base styling from specific components. So instead of using these, here is a handy short guide to the MUI variants:

* `<Typography>`

`<Typography>` is a text component. Changing the variant changes the styling and semantic tag. E.g., setting `variant='h1'` changes it to a h1 tag with the styling from the `theme.typography.h1` and so on. Use this for all text.

* `<Box>`

`<Box>` is your standard `<div>`. It does not do anything more special by default, but we use this as we have access to the SX prop and other styling.

* `<Stack>`

`<Stack>` is a box with some default styling, namely `display='flex'` and `flexDirection:'column'`.

* `<Paper>`

`<Paper>` is a `<div>` with more styling. Think of it as a "styled container" and typically comes with some default styling such as background, rounded borders, box shadow etc.

### Avoid CSS confusion:

There are different ways of styling elements in this project. Normal inline styling with the style attribute (meaning directly inside the tsx file (not a css/scss/sass file), or the Material UI way with styled component or sx attribute.

MUI, the component library Material UI, normally use styled components and the sx-attribute. (You can use `style`, but shouldn't normally). A styled component is a wrapper on another component, but adds styling. It's used as a normal React component. If you want the technical name, it's a "higher order component", since it extends another component.

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

You can also style Material UI component through the `sx` attribute. This is the recommended way when using MUI. You still can use the `style` prop in rare circumstances, see: https://stackoverflow.com/questions/72527461/when-should-i-use-style-instead-of-sx-prop-in-material-ui

This takes an object with the styles as an argument:
`<MenuItem sx={{color:hulen_black}} />`

For other React components, like Next.js components or those you make yourself, use the style attribute like normal, or stylesheets. Try to keep things consistent though. Don't write inline css in one place, and use a style sheet for another. Here we're using inline styling.

Like this:
`<SomeComponent style={{color:hulen_yellow}}>`

### Get content from Sanity
The data from Sanity Studio is accessed with [GROQ queries](https://www.sanity.io/docs/how-queries-work) in the `src/util/sanity/groqQueries.ts` file.
The queries are fetched in the `src/util/sanity/apiFunctions.ts` file.


## Contact
Maintained by:
* Nikolai Hansen Gangstø
* Erik Grunnaleite Ingebrigtsen
* Halvor Brunt

First developed by;
* Johnny Bjånesøy
