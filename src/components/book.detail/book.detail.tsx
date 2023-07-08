import { Book } from "../../models/book";
import { UseBooks } from "../../hooks/use.books";
import { useParams } from "react-router-dom";
import { Header } from "../header/header";

export default function BookDetail() {
  const { bookList } = UseBooks();
  const { id } = useParams();
  const item: Book = bookList.find((item) => item.id === id) as Book;

  return (
    <>
      <Header></Header>
      <li className="books-card">
        <img src={item.image.url} width={"200"} alt="book-image" />
        <p className={item.title}>{item.title}</p>
        <p className={item.author}>{item.author}</p>
        <p className={`${item.year}`}>{item.year}</p>
        <p className={item.genre}>{item.genre}</p>
        <p className={item.synopsis}>{item.synopsis}</p>
      </li>
    </>
  );
}
