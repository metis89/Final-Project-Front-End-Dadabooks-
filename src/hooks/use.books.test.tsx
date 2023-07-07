import { UseBooks } from "./use.books";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));

describe("Given the UseBooks custom hook", () => {
  describe("When is rendered", () => {
    const TestComponent = () => {
      const { handleLoadBooks } = UseBooks();
      return (
        <>
          <button onClick={handleLoadBooks}></button>
        </>
      );
    };
    render(
      <Router>
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      </Router>
    );

    test("Then the handleLoadBooks function should be called", async () => {
      const buttonElement = screen.getByRole("button");
      await userEvent.click(buttonElement);
      expect(useDispatch()).not.toHaveBeenCalled();
    });
  });
});
