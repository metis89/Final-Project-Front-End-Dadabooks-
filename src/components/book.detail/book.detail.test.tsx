import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import BookDetail from "./book.detail";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: "1" }),
}));

jest.mock("../../hooks/use.books", () => ({
  useBook: jest.fn().mockReturnValue({
    books: [
      {
        id: "1",
        title: "Walden",
        author: "Thoreau",
        year: 1854,
        genre: "None-fiction",
        synopsis: "blabla",
        image: {
          url: "walden.jpg",
        },
      },
      {
        id: "2",
        title: "Alice",
        author: "Carroll",
        year: 1954,
        genre: "None-fiction",
        synopsis: "blabla",
        image: {
          url: "alice.jpg",
        },
      },
    ],
    handleDeleteBook: jest.fn(),
  }),
}));

jest.mock("../../hooks/use.users", () => ({
  useUsers: jest.fn().mockReturnValue({
    token: "testtoken",
  }),
}));

jest.mock("../../config", () => ({
  url: "",
}));

describe("Given a BookDetail component", () => {
  describe("When it is intstantiate", () => {
    beforeEach(() => {
      render(
        <Router initialEntries={["/detail/1"]}>
          <Provider store={store}>
            <BookDetail />
          </Provider>
        </Router>
      );
    });
    test("Then it should show film details on the screen", () => {
      const bookDetail = screen.getByText("Walden");
      expect(bookDetail).toBeInTheDocument();
    });

    // describe("When it is instantiate", () => {
    //   test("Then it should be in the document", () => {
    //     const element = screen.getByRole("img");
    //     expect(element).toBeInTheDocument();
    //   });
    // });
  });
});
