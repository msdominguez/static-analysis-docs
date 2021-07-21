# React Static Analysis Working Group Documentation

## How to run
1. Clone the repo
2. Run `npm run start`
3. Navigate to `http://localhost:3000/docs/intro`

OR view at https://msdominguez.github.io/static-analysis-docs/docs/intro

## Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
