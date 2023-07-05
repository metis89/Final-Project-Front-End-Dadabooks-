import { Book } from "../../models/book";
import { UseBooks } from "../../hooks/use.books";
import { useEffect } from "react";

type PropsType = {
  item: Book;
};

export function BookCard({ item }: PropsType) {
  const { books: books, handleLoadBooks } = UseBooks();
  useEffect(() => {
    handleLoadBooks();
  }, [handleLoadBooks]);

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
