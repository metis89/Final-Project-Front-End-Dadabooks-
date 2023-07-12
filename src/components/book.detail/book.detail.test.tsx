import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import BookDetail from "./book.detail";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
// import { UseBooks } from "../../hooks/use.books";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: "1" }),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

jest.mock("../../hooks/use.books", () => ({
  UseBooks: jest.fn().mockReturnValue({
    books: [
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

// jest.mock("../../hooks/use.users", () => ({
//   useUsers: jest.fn().mockReturnValue({
//     token: "123",
//   }),
// }));

// beforeEach(() => {
//   (UseBooks as jest.Mock).mockReturnValue({
//     handleLoadBooks: jest.fn(),
//   });
// });

describe("Given a BookDetail component", () => {
  describe("When it is intstantiate", () => {
    test("Then it should show book details on the screen", () => {
      render(
        <Router initialEntries={["/detail/1"]}>
          <Provider store={store}>
            <BookDetail />
          </Provider>
        </Router>
      );
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
//
