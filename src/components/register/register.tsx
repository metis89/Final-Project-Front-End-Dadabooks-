import { SyntheticEvent } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import style from "./Register.module.scss";
import { Header } from "../header/header";

export default function Register() {
  const { handleRegister } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const data = {
      userName: (formElement.elements.namedItem("user") as HTMLInputElement)
        .value,
      email: (formElement.elements.namedItem("email") as HTMLInputElement)
        .value,
      password: (formElement.elements.namedItem("password") as HTMLInputElement)
        .value,
    } as unknown as Partial<User>;

    if (data.userName === "" || data.email === "" || data.password === "") {
      Swal.fire({
        background: "black",
        imageUrl: "/clay.gif",
        imageHeight: "300px",
        title: "",
      });
      navigate("/register");
    } else {
      handleRegister(data);
      console.log(data);
      formElement.reset();
      navigate("/login");
    }
  };

  return (
    <>
      <Header></Header>

      <div className={style.form}>
        <form className="register-form" id="form">
          <h2 className="title_form">REGISTER</h2>

          <input
            type="text"
            placeholder="Username"
            name="userName"
            required
          ></input>

          <input type="email" placeholder="Email" name="email" required></input>

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          ></input>

          <button type="submit" className="login_button">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
