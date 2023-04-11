# Готовая сборка Turborepo

<p align="center">
  <a href="https://turbo.build">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/4060187/196936123-f6e1db90-784d-4174-b774-92502b718836.png">
      <img src="https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png" height="128">
    </picture>
    <h1 align="center">Turbo</h1>
  </a>
</p>

## Utilities

* Used by [Vite](https://vitejs.dev/) Fast build time
* Used by [Mock Service Worker](https://mswjs.io/docs/getting-started) 
Imitation back
* Supports [TypeScript](https://www.typescriptlang.org/) out of the box and makes project installation easy
* Integration [Storybook](https://storybook.js.org/) Tool for developing UI components
* Used by [Turborepo](https://turbo.build/) TuroRepo part of code management since each component is in a separate repository
* [ESlint](https://eslint.org/) Error and problem detection: ESLint can detect many errors
* [Prettier](https://prettier.io/) simplify the formatting process and use a consistent code style across the project.


### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
