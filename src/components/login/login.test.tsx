import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "./login";
import { store } from "../../redux/store";

describe("Given Login component", () => {
  describe("When the component is rendered", () => {
    beforeEach(async () => {
      render(
        <Provider store={store}>
          <Router>
            <Login></Login>
          </Router>
        </Provider>
      );
    });

    test("Then the <button> should be used", async () => {
      const element = screen.getByRole("button");
      await fireEvent.click(element);
    });
  });
});
