# mud-lib

This is a collection of shared front-end components for multi-user-domain projects.

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

### Releasing

Releases are automated via semantic release, which runs on all pushes to the master and next branches. If you push to master, the release will go out as a proper release in npm under the 'latest' tag. If you push to next, it goes out under the 'next' tag.
