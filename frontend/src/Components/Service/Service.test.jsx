import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Service from "./Service";

const SERVICE_TITLE = "TEST TITLE";
const SERVICE_CONTENT = "TEST CONTENT";

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
      render(<Service />,container)
    });
});

it("Renders correctly with provided props", () => {
    act(() => {
        render(<Service title={SERVICE_TITLE} content={SERVICE_CONTENT} />, container);
    });
    expect(container.querySelector("h2").textContent).toBe(SERVICE_TITLE);
    expect(container.querySelector("p").textContent).toBe(SERVICE_CONTENT);
});