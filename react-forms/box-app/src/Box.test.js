import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

test("renders without crashing", function() {
  render(<Box />);
});

test("matches snapshot", function() {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
