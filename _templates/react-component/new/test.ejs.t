---
to: src/components/<%= h.inflection.dasherize(name) %>/<%= h.inflection.camelize(name) %>.spec.tsx
---
import React from 'react';
import { render } from '@testing-library/react';

import { <%= h.inflection.camelize(name) %> } from './<%= h.inflection.camelize(name) %>';

it('renders', () => {
  render(<<%= h.inflection.camelize(name) %> />);
})