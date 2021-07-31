---
to: src/components/<%= h.inflection.dasherize(name) %>/<%= h.inflection.camelize(name) %>.tsx
---
import React from 'react';

export const <%= h.inflection.camelize(name) %> = (props) => (
  <p>Hello {props.name}</p>
);

