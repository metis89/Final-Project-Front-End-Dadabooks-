import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import BookDetail from "./book.detail";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { UseBooks } from "../../hooks/use.books";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: "1" }),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

jest.mock("../../hooks/use.books", () => ({
  UseBooks: jest.fn().mockReturnValue({
    bookList: [
      {
        id: "1",
        image: {
          url: "walden.jpg",
        },
      },
      {
        id: "2",
        title: "Alice",
        image: {
          url: "alice.jpg",
        },
      },
    ],
  }),
}));

jest.mock("../../config.ts", () => ({
  url: "",
}));

jest.mock("../../hooks/use.users", () => ({
  useUsers: jest.fn().mockReturnValue({
    token: "123",
  }),
}));

describe("Given a BookDetail component", () => {
  beforeEach(() => {
    (UseBooks as jest.Mock).mockReturnValue({
      handleLoadBooks: jest.fn(),
    });
    render(
      <Router initialEntries={["/detail/1"]}>
        <Provider store={store}>
          <BookDetail />
        </Provider>
      </Router>
    );
  });
  describe("When it is intstantiate", () => {
    test("Then it should show book details on the screen", () => {
      const bookDetail = screen.getByText("Walden");
      expect(bookDetail).toBeInTheDocument();
    });

    test("Then the handleDeleteBook should be called when delete_button is clicked", async () => {
      const deleteButton = screen.getAllByRole("button");
      await userEvent.click(deleteButton[1]);
      expect(UseBooks().handleDelete).toHaveBeenCalled();
    });
  });
});
