# AWS Study Notes

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
