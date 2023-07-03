import { Book } from "../../models/book";
import { useParams } from "react-router-dom";

export default function DetailCard() {
  const { id } = useParams();

  const item: Book = book.find((item) => item._id === id) as Book;

  return (
    <>
      <section className="">
        <ul>
          <img src={item.image} alt={item.title} width={100} height={200} />
          <li>Title:{item.title}</li>
          <li>Author:{item.author}</li>
          <li>Year:{item.year}</li>
          <li>Genre:{item.genre}</li>
          <li>Synopsis{item.synopsis}</li>
        </ul>
      </section>
    </>
  );
}
