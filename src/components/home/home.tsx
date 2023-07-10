import { BookCard } from "../book.card/book.card";
import { UseBooks } from "../../hooks/use.books";
import { useEffect } from "react";
import { Header } from "../header/header";
import "./home.scss";

export default function Home() {
  const { bookList, handleLoadBooks } = UseBooks();

  useEffect(() => {
    handleLoadBooks();
  }, [handleLoadBooks]);

  // const handleSelect = (event: SyntheticEvent) => {
  //   const element = event.target as HTMLSelectElement;
  //   const book = element.value;
  //   if (element.value === "Non-Fiction") handleLoadFiltered(book);
  //   if (element.value === "Novel") handleLoadFiltered(book);
  //   if (element.value === "Poetry") handleLoadFiltered(book);
  //   if (element.value === "Horror") handleLoadFiltered(book);
  //   if (element.value === "Fantasy") handleLoadFiltered(book);
  //   if (element.value === "Thrillern") handleLoadFiltered(book);
  // };

  return (
    <>
      <Header></Header>
      {/* <section className="filter-container">
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
            <option role="option" value="Non-Fiction">
              Non-Fiction
            </option>
            <option role="option" value="Novel">
              Novel
            </option>
            <option role="option" value="Poetry">
              Poetry
            </option>
            <option role="option" value="Horror">
              Horror
            </option>
            <option role="option" value="Fantasy">
              Fantasy
            </option>
            <option role="option" value="Thrillern">
              Thrillern
            </option>
          </select>
        </form>
      </section> */}

      <div className="home_page">
        <h1>New Books</h1>
        <ul className="book_list">
          {bookList.map((book) => (
            <BookCard item={book} key={book.id}></BookCard>
          ))}
        </ul>
      </div>
    </>
  );
}
