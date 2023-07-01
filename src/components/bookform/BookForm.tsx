import { SyntheticEvent } from "react";
import { url } from "../../../config";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function BookForm() {
  const navigate = useNavigate();

  const handleNewBook = async (event: SyntheticEvent) => {
    const formRegisterElement: HTMLFormElement =
      document.querySelector(".book-form")!;

    event.preventDefault();

    const data = new FormData(formRegisterElement);

    const urlRegister = url + "book/register";
    const response = await fetch(urlRegister, {
      method: "POST",
      headers: {},
      body: data,
    });
    const state = await response.json();

    console.log(state);

    state.bookData = state.book;
    delete state.book;
    // Swal.fire({
    //   icon: "success",
    //   text: "Succesfully Registered!",
    // });
    navigate("/main");
  };

  return (
    <form className="book-form" id="form">
      <h2 className="title_form">Please register a new book</h2>
      <input type="text" placeholder="Title" name="title"></input>
      <input type="text" placeholder="Author" name="author"></input>
      <input
        type="text"
        placeholder="Year of publication"
        name="carYear"
      ></input>
      <input type="text" placeholder="Synopsis" name="synopsis"></input>
      <input type="file" placeholder="Image" name="barPhoto"></input>
      <button type="submit" className="login_button">
        SUBMIT
      </button>
    </form>
  );
}
