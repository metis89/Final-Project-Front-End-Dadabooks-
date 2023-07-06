import { BookCard } from "../book.card/book.card";
import { UseBooks } from "../../hooks/use.books";
import { useEffect } from "react";
import { Header } from "../header/header";

export default function Home() {
  const { books, handleLoadBooks } = UseBooks();

  useEffect(() => {
    handleLoadBooks();
  }, [handleLoadBooks]);

  return (
    <>
      <Header></Header>
      <h1>New Books</h1>
      <ul>
        {books.map((book) => (
          <BookCard item={book} key={book.id}></BookCard>
        ))}
      </ul>
    </>
  );
}
