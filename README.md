This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

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
