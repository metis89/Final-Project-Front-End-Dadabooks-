import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./mainPage";
import { store } from "../../redux/store";

describe("Given Home component", () => {
  render(
    <Router>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </Router>
  );
  describe("When it is instantiate", () => {
    test("Then it should render the Home component", async () => {
      const element = await screen.findAllByRole("link");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
