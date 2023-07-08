import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import BookDetail from "./book.detail";
// import { Book } from "../../models/book";

// const mockBook = {
//   id: "1",
//   title: "Walden",
//   author: "Thoreau",
//   year: 1854,
//   genre: "None-fiction",
//   synopsis: "blabla",
//   image: {
//     url: "walden.jpg",
//   },
// };

describe("Given BookDetail component", () => {
  beforeEach(() => {
    render(
      <Router>
        <BookDetail></BookDetail>
      </Router>
    );
  });

  describe("When it is instantiate", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
