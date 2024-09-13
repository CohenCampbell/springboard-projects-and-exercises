import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("renders without crashing", function() {
  render(<NewBoxForm />);
});

test("matches snapshot", function() {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
