import React from "react";
import { render } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";

it("greets the user", () => {
  const { getByText } = render(<HelloWorld name="Matt" />);

  getByText("Hello Matt");
});
