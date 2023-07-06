import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { SyntheticEvent } from "react";
import { User } from "../../models/user";
import { Header } from "../header/header";
import "./login.scss";

export default function Login() {
  const { handleLogin } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const inputs = element.querySelectorAll("input");
    const loggedUser = {
      user: inputs[0].value,
      password: inputs[1].value,
    } as Partial<User>;
    handleLogin(loggedUser);
    element.reset();
    navigate("/list");
  };

  return (
    <>
      <Header></Header>

      <div className="loaded-route">
        <form className="login-form">
          <h2 className="title_form">LOGIN</h2>
          {/* <span className="subtitle">
          LOGIN OR <a href="/register">REGISTER</a> IF YOU DON'T HAVE AN ACCOUNT
        </span> */}
          <input type="text" placeholder="Username / Email" name="user"></input>
          <input type="password" placeholder="Password" name="password"></input>
          <button type="submit" className="login_button">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
