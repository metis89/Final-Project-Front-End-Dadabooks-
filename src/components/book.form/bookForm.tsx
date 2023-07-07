import { SyntheticEvent } from "react";
import { url } from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function BookForm() {
  const navigate = useNavigate();
  const { carData } = useSelector((state: RootState) => state.cars);
  const { handleNewCar } = useCars();

  const handleNewBook = async (event: SyntheticEvent) => {
    const formRegisterElement: HTMLFormElement =
      event.target as HTMLFormElement;

    event.preventDefault();

    const data = new FormData(formRegisterElement);

    const urlRegister = url + "book/create";
    const response = await fetch(urlRegister, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("store")}`,
      },
      body: data,
    });

    console.log(data);

    const state = await response.json();
    console.log(state);

    if (state.error) {
      Swal.fire({
        icon: "error",
        text: `${state.error}`,
      });
    } else {
      Swal.fire({
        icon: "success",
        text: "Succesfully Registered!",
      });
    }

    state.bookData = state.book;
    delete state.book;
    navigate("/main");
  };

  return (
    <form className="book-form" id="form">
      <h2 className="title_form">Please register a new book</h2>
      <input type="text" placeholder="Title" name="title"></input>
      <input type="text" placeholder="Author" name="author"></input>
      <input type="text" placeholder="Year" name="year"></input>
      <input type="text" placeholder="Synopsis" name="synopsis"></input>
      <input type="file" placeholder="Image" name="image"></input>
      <button type="submit" className="login_button">
        SUBMIT
      </button>
    </form>
  );
}
