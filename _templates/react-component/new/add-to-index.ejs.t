---
inject: true
to: src/index.ts
append: true
skip_if: export { <%= h.inflection.camelize(name) %> }
---
export { <%= h.inflection.camelize(name) %> } from './components/<%= h.inflection.dasherize(name) %>/<%= h.inflection.camelize(name) %>'