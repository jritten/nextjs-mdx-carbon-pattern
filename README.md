This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Steps to Build this Project

Next.js Setup:  
`npx create-next-app@latest`  
https://nextjs.org/learn/foundations/about-nextjs  
https://nextjs.org/docs/getting-started/installation  
https://nextjs.org/docs/getting-started/react-essentials  
https://nextjs.org/docs/app/building-your-application  

Graphql Apollo Client Setup:
`npm install @apollo/client graphql`
https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
https://www.apollographql.com/tutorials/

Graphql Apollo Server Setup:
`npm install apollo-server graphql --save`

TypeScript Setup: (optional)
install typescript
`npm install typescript ts-node @types/node --save-dev`

initialize TypeScript
`npx tsc --init`

Prisma Setup:
install the Prisma CLI as a development dependency in the project
`npm install prisma --save-dev`

set up Prisma with the init command of the Prisma CLI
`npx prisma init --datasource-provider sqlite`

MDX Setup:
`npm install @next/mdx @mdx-js/loader @mdx-js/react`
https://nextjs.org/docs/pages/building-your-application/configuring/mdx

Carbon Setup:
`npm install --save @carbon/react`

RMDX Set Up (may need to npm update first):
`npm i @carbon-platform/rmdx`

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
