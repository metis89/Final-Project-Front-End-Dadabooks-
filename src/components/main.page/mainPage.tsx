import { Link } from "react-router-dom";

export default function mainPage() {
  return (
    <>
      <>
        <div>
          <Link to={"/home"}>Home</Link>
        </div>
        <div>
          <Link to={"/register"}>Sign Up</Link>
        </div>
        <div>
          <Link to={"/login"}>Log In</Link>
        </div>
      </>
    </>
  );
}
