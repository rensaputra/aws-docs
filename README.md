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

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Gzip Pre-Compression

During the build process, the configuration leverages `compression-webpack-plugin` to generate pre-compressed `.gz` versions of your text-based assets (e.g., `.html`, `.css`, `.js`).

This pre-compression works on a file-by-file basis rather than creating a single massive zip file. The output directory will contain both the original files and their `.gz` equivalents. When hosting these static assets, if a user's browser requests a file and signals that it supports Gzip (via the `Accept-Encoding: gzip` HTTP header), the web server can serve the pre-compressed `.gz` file directly, significantly reducing response times and bandwidth usage without CPU overhead on the server.

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

### Wayback Machine Integration

The deployment pipeline automatically submits the website to the [Internet Archive's Wayback Machine](https://web.archive.org/) after a successful deployment to ensure older versions of the notes are preserved.

This is performed asynchronously via a fire-and-forget `curl` request to the [Wayback Machine Save Page API](https://gist.github.com/regstuff/82e690db2f1d91ba59f6681c1abad6cf) to prevent the deployment workflow from blocking or failing due to rate limits.

To avoid heavy rate limiting from the Internet Archive, the request will conditionally authenticate using the [SPN2 API](https://archive.org/account/s3.php) if keys are provided. To enable this, add the following secrets to your GitHub repository:
- `IA_ACCESS_KEY`
- `IA_SECRET_KEY`

### IndexNow Integration

The deployment pipeline is configured to automatically submit updated URLs to search engines via the IndexNow protocol whenever a successful deployment occurs.

To enable this feature, you must configure a repository secret:
1. Generate an IndexNow key (e.g., using an online generator or creating a random UUID).
2. Go to your GitHub repository **Settings** > **Secrets and variables** > **Actions**.
3. Create a new repository secret named `INDEXNOW_KEY` and paste your key as the value.

If the secret is not set, the IndexNow submission steps in the deployment workflow will simply be skipped.
