# Rsbuild project

## Setup

Install the dependencies:

```bash
npm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
npm dev
```

Build the app for production:

```bash
npm build
```

Preview the production build locally:

```bash
npm preview
```

## Recreate the bug

- On `@rsbuild/core` version 1.5.4 or later, run `npm run build` then open `dist/static/js/index.<hash>.js` and look for `new (null)("en-US")`. This is a bug.
- On `@rsbuild/core` version 1.5.3 or earlier, run `npm run build` then open `dist/static/js/index.<hash>.js` and the bad code won't be there.

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!
