import { Link } from "react-router-dom";
import { Book } from "../../models/book";

type PropsType = {
  item: Book;
};

export function BookCard({ item }: PropsType) {
  return (
    <Link to={"/detail/" + item.id}>
      <li key={item.id}>
        <img src={item.image.url} alt={item.title} width="150" height="250" />
        <span>{item.title}</span>
      </li>
    </Link>
  );
}
