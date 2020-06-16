import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PageHeader from "./PageHeader";

const PAGE_TITLE = "Test Header";
const IMAGE_PATH = "Assets/images/contact-page-header.jpg";

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
      render(<PageHeader />,container)
    });
});

// to-do: test image path, and image
it("Renders correctly with provided props", () => {
  act(() => {
    render(<PageHeader pageTitle={PAGE_TITLE} imagePath={IMAGE_PATH} />, container);
  });
  expect(container.querySelector("h1").textContent).toBe(PAGE_TITLE);
  expect(container.querySelector("div").style.backgroundImage).toEqual(expect.stringContaining(IMAGE_PATH));
});
