import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import { App } from "./components/App";

describe("Given a mainPage", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App></App>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should return", () => {
      expect(App).toBeInTheDocument;
    });
  });
});
