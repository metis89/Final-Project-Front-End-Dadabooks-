import { lazy } from "react";
import BookForm from "../book.form/bookForm";

const AdminMainPage = lazy(() => import("../admin.main.page/adminMain"));

export default function NewBook() {
  const handleNewBook = () => {
    console.log("Add new book");
    document.querySelector(".new_button")!.append();
  };

  return (
    <>
      <h1 className="home_title">Site Administration</h1>
      <div className="loaded-route">
        <button className="new_button" onClick={handleNewBook}>
          Add new book to the database
        </button>
        <BookForm></BookForm>
      </div>
      <div className="loaded-route">
        <button className="modify_button" onClick={handleModifyBook}>
          Modify book from the data base
        </button>
        <BookForm></BookForm>
      </div>
      <div className="loaded-route">
        <button className="delete_button" onClick={handleDeleteBook}>
          Delete book from the data base
        </button>
        <BookForm></BookForm>
      </div>
    </>
  );
}
