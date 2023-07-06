import { Book } from "../../models/book";
import { UseBooks } from "../../hooks/use.books";
import { useParams } from "react-router-dom";

export default function BookCard() {
  const { books } = UseBooks();
  const { id } = useParams();
  const item: Book = books.find((item) => item.id === id) as Book;

  return (
    <li className="books-card">
      <img src={item.image.url} width={"200"} alt="book-image" />
      <p className={item.title}>{item.title}</p>
      <p className={item.author}>{item.author}</p>
      <p className={`${item.year}`}>{item.year}</p>
      <p className={item.genre}>{item.genre}</p>
      <p className={item.synopsis}>{item.synopsis}</p>
    </li>
  );
}
