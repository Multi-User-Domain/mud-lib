import React from "react";
import { render } from "@testing-library/react";

import { LoginForm } from "./LoginForm";

it("renders", () => {
  const { asFragment } = render(<LoginForm />);
  expect(asFragment()).toMatchSnapshot();
});
