import { Book } from "../../models/book";
import { Link } from "react-router-dom";

type PropsType = {
  item: Book;
};

export function BookCard({ item }: PropsType) {
  return (
    <Link to={"/details/" + item.id}>
      <li className="books-list">
        <img
          src={item.image}
          alt={item.title}
          width="140"
          height="250"
          className="book-image"
        />
        <p className={item.title}> {item.title}</p>
      </li>
    </Link>
  );
}
