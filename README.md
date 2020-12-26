## About

This project is a coding challenge fetching users on the Github API. You can find the instructions [here](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/GitHub-Profiles.md) and check the app.todo file to be acknowledged of what still needs to be done.

## Installation

Install dependencies listed on package.json:

```bash
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

For production, run:

```bash
npm run build
```

To run tests:

```bash
npm run test
```

## Technologies

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), which is a React framework for server side rendering and many other features. Main technologies used are:

- Typescript
- SWR to fetch the Github API
- Styled-components for easier styling through css-in-js solution
- Jest + React Testing Library for UI tests
- Babel
- Eslint + prettier to keep a standard and best practices
- Sweetalert2 in order to display styled alerts faster
- React-switch to save time when building the color theme switcher

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
