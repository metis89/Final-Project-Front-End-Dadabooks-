import { BookCard } from "../book.card/book.card";
import { UseBooks } from "../../hooks/use.books";
import { SyntheticEvent, useEffect } from "react";
import { Header } from "../header/header";
import "./home.scss";

export default function Home() {
  const { bookList, handleLoadBooks, handleLoadFiltered } = UseBooks();

  useEffect(() => {
    handleLoadBooks();
  }, [handleLoadBooks]);

  const handleSelect = (event: SyntheticEvent) => {
    const element = event.target as HTMLSelectElement;
    const book = element.value;
    if (element.value === "Non-Fiction") handleLoadFiltered(book);
    if (element.value === "Novel") handleLoadFiltered(book);
    if (element.value === "Poetry") handleLoadFiltered(book);
    if (element.value === "Horror") handleLoadFiltered(book);
    if (element.value === "Fantasy") handleLoadFiltered(book);
    if (element.value === "Thrillern") handleLoadFiltered(book);
  };

  return (
    <>
      <Header></Header>
      <section className="filter-container">
        <form>
          <label htmlFor="filter">filter</label>
          <select
            className="filter-region"
            onChange={handleSelect}
            name="filter"
            id="filter"
          >
            <option role="option" value="">
              --Please choose an option--
            </option>
            <option role="option" value="Europe">
              Europe
            </option>
            <option role="option" value="Africa">
              Africa
            </option>
            <option role="option" value="Asia">
              Asia
            </option>
            <option role="option" value="Oceania">
              Oceania
            </option>
            <option role="option" value="Americas">
              America
            </option>
            <option role="option" value="Antarctic">
              Antarctic
            </option>
          </select>
        </form>
      </section>
      <div className="home_page">
        <h1>New Books</h1>
        <ul>
          {bookList.map((book) => (
            <BookCard item={book} key={book.id}></BookCard>
          ))}
        </ul>
      </div>
    </>
  );
}
