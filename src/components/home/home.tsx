import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BookCard } from "../book.detail/book.detail";
import { UseBooks } from "../../hooks/use.books";
import { useEffect } from "react";
import { Header } from "../header/header";

export default function Home() {
  const { books, handleLoadBooks } = UseBooks();

  useEffect(() => {
    handleLoadBooks();
  }, [handleLoadBooks]);

  const { handleLogout } = useUsers();
  const navigate = useNavigate();
  const { token, currentUser } = useSelector((state: RootState) => state.users);

  const handleUser = () => {
    if (token) {
      runLogout();
    } else {
      navigate("/login");
    }
  };

  const handleRegister = () => {
    console.log("Register");
    navigate("/register");
  };

  const runLogout = () => {
    handleLogout();
  };

  return (
    <>
      <Header></Header>
      <div>
        {books.map((item) => (
          <BookCard item={item} key={item.id}></BookCard>
        ))}
      </div>
    </>
  );
}
