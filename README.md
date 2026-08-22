# AWS Study Notes

[![CI](https://github.com/rensaputra/aws-docs/actions/workflows/ci.yml/badge.svg)](https://github.com/rensaputra/aws-docs/actions/workflows/ci.yml) [![pages-build-deployment](https://github.com/rensaputra/aws-docs/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/rensaputra/aws-docs/actions/workflows/pages/pages-build-deployment)

This website is a collection of my notes, summaries, and exam tips for the AWS Certified Developer Associate (DVA-C02) exam. The content is intended to be for my personal use, but I hope it can also be a helpful resource for others preparing for the same certification.

## Installation

Check out the code and install dependencies:

```bash
gh repo clone rensaputra/aws-docs
cd aws-docs
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

> **Note on Search functionality:** The local search plugin (`@easyops-cn/docusaurus-search-local`) only generates its search index during the production build. Therefore, search will **not** work when running `npm start`. To test search locally, you must run `npm run build` followed by `npm run serve`.

## Testing

This project uses Playwright for end-to-end testing. The testing framework is configured to spin up the local server and verify key interactions across Chromium, Firefox, and WebKit browsers.

To run tests locally, you must first build the site:

```bash
npm run build
```

Then you can run tests with:

```bash
npm run test:e2e
```

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### IndexNow Integration

The deployment pipeline is configured to automatically submit updated URLs to search engines via the IndexNow protocol whenever a successful deployment occurs.

To enable this feature, you must configure a repository secret:
1. Generate an IndexNow key (e.g., using an online generator or creating a random UUID).
2. Go to your GitHub repository **Settings** > **Secrets and variables** > **Actions**.
3. Create a new repository secret named `INDEXNOW_KEY` and paste your key as the value.

If the secret is not set, the IndexNow submission steps in the deployment workflow will simply be skipped.
