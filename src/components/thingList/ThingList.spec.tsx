import React from "react";
import { render } from "@testing-library/react";
import {
  Thing,
  createThing,
  getStringNoLocale,
  addStringNoLocale,
} from "@inrupt/solid-client";

import { ThingList, IRowComponent } from "./ThingList";

const mockName = "Test Name";
const mockProperty = `http://xmlns.com/foaf/0.1/name`;
let things = [
  addStringNoLocale(createThing(), mockProperty, mockName),
  addStringNoLocale(createThing(), mockProperty, mockName),
];

it("renders", () => {
  let selectThing: (thing: Thing) => void = (thing) => {
    return null;
  };

  let MockRowComponent = function Character({
    thing,
    selectHandler,
  }: IRowComponent): React.ReactElement {
    return <p>{getStringNoLocale(thing, mockProperty)}</p>;
  };

  const { asFragment, queryAllByText } = render(
    <ThingList
      things={things}
      selectThing={selectThing}
      rowComponent={MockRowComponent}
    />
  );

  expect(queryAllByText(mockName).length).toBe(2);
  expect(asFragment()).toMatchSnapshot();
});
