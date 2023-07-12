import { SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Book } from "../../models/book";

import { UseBooks } from "../../hooks/use.books";
import { Header } from "../header/header";
import "./book.detail.scss";

export default function BookDetail() {
  const { bookList, handleDelete } = UseBooks();
  const { id } = useParams();
  const navigate = useNavigate();

  const item: Book = bookList.find((item) => item.id === id) as Book;

  const handleDeleteBook = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("deleting...", id);
    if (id) {
      handleDelete(id);
      console.log("Book deleted");
      navigate("/home");
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <Header></Header>
      <li className="book_detail">
        <img src={item.image.url} width={"200"} alt="book-image" />
        <p className={item.title}>{item.title}</p>
        <p className={item.author}>{item.author}</p>
        <p className={`${item.year}`}>{item.year}</p>
        <p className={item.genre}>{item.genre}</p>
        <p className={item.synopsis}>{item.synopsis}</p>
        <button
          aria-label="delete"
          className="delete_button"
          onClick={handleDeleteBook}
        ></button>
      </li>
    </>
  );
}
