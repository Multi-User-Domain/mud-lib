import React from "react";
import { render } from "@testing-library/react";
import { createThing, addUrl } from "@inrupt/solid-client";
import { FOAF } from "@inrupt/lit-generated-vocab-common";
import { ThingDepiction } from "./ThingDepiction";

const mockUrl = "http://test.url/image.png";
const mockThingWithDepiction = addUrl(createThing(), FOAF.depiction, mockUrl);

it("renders image when present", () => {
  const { asFragment } = render(
    <ThingDepiction thing={mockThingWithDepiction} />
  );
  expect(asFragment()).toMatchSnapshot();
});

const mockThingWithoutDepiction = createThing();

it("renders placeholder when no image present", () => {
  const { asFragment } = render(
    <ThingDepiction thing={mockThingWithoutDepiction} />
  );
  expect(asFragment()).toMatchSnapshot();
});
