import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import { UseBooks } from "../../hooks/use.books";
import BookForm from "./bookForm";

jest.mock("../../hooks/use.books", () => ({
  UseBooks: jest.fn().mockReturnValue({
    handleAddBook: jest.fn(),
  }),
}));

describe("Given the bookForm component", () => {
  describe("When it is instantiated", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <BookForm></BookForm>
          </Router>
        </Provider>
      );
    });

    test("Then the form should be in the document", () => {
      const BookFormElement = screen.getByRole("form");
      expect(BookFormElement).toBeInTheDocument();
    });

    test("Then the handleAddBook function should be called", async () => {
      const form = screen.getByRole("form");
      await fireEvent.submit(form);
      expect(UseBooks().handleAddBook).toHaveBeenCalled();
    });
  });
});
