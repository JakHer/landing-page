# Jakub Hermyt - Developer Portfolio

A responsive developer portfolio built with React and TypeScript. It presents
selected frontend work using live repository data from GitHub and provides a
clear path for potential clients to get in touch.

## Live site

[jakubhermyt.netlify.app](https://jakubhermyt.netlify.app/)

## Features

- Responsive, mobile-first layout
- Live project data fetched from the GitHub API
- Automatic project filtering and ranking
- Loading, empty, and error states for repository data
- Accessible keyboard focus and reduced-motion support
- SEO, Open Graph, and Twitter card metadata
- Optimized social sharing image
- Direct email and copy-to-clipboard contact actions

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- TanStack Query
- GitHub REST API

## Getting started

Requirements:

- Node.js 20 or newer
- npm

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

The local URL will be printed in the terminal, usually
`http://localhost:5173`.

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Type-check and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Project data

Projects are loaded from the public repositories of
[JakHer](https://github.com/JakHer). Repository names, descriptions, languages,
dates, source links, and live-demo URLs come directly from GitHub.

To update a project card, edit the repository details on GitHub. The portfolio
will pick up the changes automatically after its query cache refreshes.

## Project structure

```text
src/
|-- components/
|   |-- Contact/
|   |-- Footer/
|   |-- Hero/
|   |-- Projects/
|   |-- hooks/
|   `-- lib/
|-- App.tsx
|-- index.css
`-- main.tsx
```

## Deployment

The project is configured as a standard Vite application and can be deployed
to Netlify or another static hosting provider.

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

## License

This is a personal portfolio project. The source is available for reference,
but the design, branding, and personal content belong to Jakub Hermyt.
