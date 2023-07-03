import { Book } from "../../models/book";
import { Link } from "react-router-dom";

type PropsType = {
  item: Book;
};

export function BookCard({ item }: PropsType) {
  return (
    <Link to={"/details/" + item.id}>
      <li className="books-list">
        <p className={item.title}>{item.title}</p>
        <p className={item.author}>{item.author}</p>
        {/* <p className={item.year}>{item.year}</p> */}
        <p className={item.genre}>{item.genre}</p>
        <p className={item.synopsis}>{item.synopsis}</p>
      </li>
    </Link>
  );
}
