import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Header } from "../header/header";

describe("Given the MyCourses component", () => {
  describe("When it is instantiated", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <Header></Header>

            <ul></ul>
          </Router>
        </Provider>
      );
    });

    test("Then the Header should be in the document", () => {
      const headerElement = screen.getByRole("banner");
      expect(headerElement).toBeInTheDocument();
    });

    test("Then the a div component is rendered", () => {
      const bookImageElement = screen.getByRole("img");
      expect(bookImageElement).toBeInTheDocument();
    });
  });
});
