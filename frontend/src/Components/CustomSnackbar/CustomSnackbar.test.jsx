import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CustomSnackbar from "./CustomSnackbar";

const SNACKBAR_MESSAGE = "TEST MESSAGE";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders without crashing', () => {
    act(() => {
      render(<CustomSnackbar />,container)
    });
});

it("Renders correctly with provided props (open snackbar)", () => {
    act(() => {
        render(<CustomSnackbar openSnackbar={true} message={SNACKBAR_MESSAGE}/>, container);
    });
    expect(container.querySelector("div .MuiAlert-message").textContent).toBe(SNACKBAR_MESSAGE);
});

it("Renders correctly with provided props (closed snackbar)", () => {
    act(() => {
        render(<CustomSnackbar openSnackbar={false} message={SNACKBAR_MESSAGE}/>, container);
    });
    expect(container.querySelector("div .MuiAlert-message")).toBe(null);
});