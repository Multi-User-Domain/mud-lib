# mud-lib

This is a collection of shared front-end components for multi-user-domain projects.

![npm bundle size](https://img.shields.io/bundlephobia/min/@multi-user-domain/mud-lib)
![npm (scoped)](https://img.shields.io/npm/v/@multi-user-domain/mud-lib)

## Tech used

- React
- Rollup
- Husky
- Prettier
- Jest
- Hygen
- Semantic Release
- Commitizen

## Getting Started

Install: `npm install @multi-user-domain/mud-lib` or `yarn add @multi-user-domain/mud-lib`

## Contributing

### Adding a new component

Run this hygen command:

```
npx hygen react-component new <component-name>
```

### Testing local changes in another project

To test local changes in another project using this library (e.g. in [mud-react](https://github.com/Multi-User-Domain/mud-react)), you can use `npm link` or `yarn link`, commands which create an operating system link to the local version of the library:

```
cd /path/to/mud-lib/
yarn link
cd /path/to/other/project/
yarn link "@multi-user-domain/mud-lib"
```

Sometimes this can lead to an error `Invalid Hook Call` in the project using mud-lib. If this happens and when you run `npm ls react` it displays more than one version of React, the issue is because the bundler "sees" two Reacts - one in the library folder and one in the application folder. The [React docs describe this problem](https://reactjs.org/warnings/invalid-hook-call-warning.html), one possible fix is to run `yarn link` from `/path/to/mud-lib/node_modules/react` (and then `yarn link react` from your application folder) to make the library use the application's React copy.

### Releasing

Releases are automated via semantic release, which runs on all pushes to the master and next branches. If you push to master, the release will go out as a proper release in npm under the 'latest' tag. If you push to next, it goes out under the 'next' tag.
