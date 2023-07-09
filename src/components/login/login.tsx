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
    // console.log("LOGIN");
    const element = event.target as HTMLFormElement;
    const inputs = element.querySelectorAll("input");

    const loggedUser = {
      user: inputs[0].value,
      password: inputs[1].value,
    } as Partial<User>;
    handleLogin(loggedUser);
    // console.log("handle logged");
    element.reset();
    navigate("/home");
  };

  return (
    <>
      <Header></Header>

      <div className="loaded-route">
        <h2 className="title_form">LOGIN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
