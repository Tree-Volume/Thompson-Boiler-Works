import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Project from "./Project";

const PROJECT_TITLE = "Test Project";
const PROJECT_BODY = "Test Body";

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
      render(<Project />,container)
    });
});

// to-do: test image path, and image
it("Renders correctly with provided props", () => {
  act(() => {
    render(<Project title={PROJECT_TITLE} body={PROJECT_BODY} />, container);
  });
  expect(container.querySelector("h2").textContent).toBe(PROJECT_TITLE);
  expect(container.querySelector("p").textContent).toBe(PROJECT_BODY);
});
