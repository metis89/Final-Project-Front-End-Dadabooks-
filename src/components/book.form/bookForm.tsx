import { SyntheticEvent } from "react";

// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Header } from "../header/header";
import "./bookForms.scss";
import { UseBooks } from "../../hooks/use.books";

export default function BookForm() {
  const navigate = useNavigate();
  const { handleAddBook } = UseBooks();

  const SubmitNewBook = async (event: SyntheticEvent) => {
    const bookForm: HTMLFormElement = event.target as HTMLFormElement;
    event.preventDefault();
    console.log("SubmitBook");

    const data = new FormData(bookForm);
    await handleAddBook(data);
    console.log("handle book");

    navigate("/home");
  };

  return (
    <>
      <Header></Header>
      <form
        className="book_form"
        id="form"
        onSubmit={SubmitNewBook}
        aria-label="form"
      >
        <h1 className="title_form">Please register a new book</h1>
        <input type="text" placeholder="Title" name="title"></input>
        <input type="text" placeholder="Author" name="author"></input>
        <input type="text" placeholder="Year" name="year"></input>
        <input type="text" placeholder="Genre" name="genre"></input>
        <input type="text" placeholder="Synopsis" name="synopsis"></input>
        <input type="file" placeholder="Image" name="image"></input>
        <button type="submit" className="submit_book_button">
          SUBMIT
        </button>
      </form>
    </>
  );
}
