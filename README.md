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

### Adding a new component

Run this hygen command:

```
npx hygen react-component new <component-name>
```

### Releasing

Releases are automated via semantic release, which runs on all pushes to the master and next branches. If you push to master, the release will go out as a proper release in npm under the 'latest' tag. If you push to next, it goes out under the 'next' tag.
