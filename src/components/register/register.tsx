import { SyntheticEvent } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";
import { Header } from "../header/header";
import "./register.scss";
import Swal from "sweetalert2";

export default function Register() {
  const { handleRegister } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("SUBMIT");
    const formElement = event.target as HTMLFormElement;
    const data = {
      userName: (formElement.elements.namedItem("user") as HTMLInputElement)
        .value,
      email: (formElement.elements.namedItem("email") as HTMLInputElement)
        .value,
      password: (formElement.elements.namedItem("password") as HTMLInputElement)
        .value,
    } as unknown as Partial<User>;

    handleRegister(data);
    console.log("handle submitted");
    formElement.reset();
    Swal.fire({ icon: "success", text: "Thanks for signing up" });
    navigate("/login");
  };

  return (
    <>
      <Header></Header>

      <div className="register_form">
        <h1>Get registered</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">User Name: </label>
            <input type="text" id="user" name="user" />
          </div>
          <div className="email_div">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="submit_button">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
