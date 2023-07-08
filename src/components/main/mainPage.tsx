import { Link } from "react-router-dom";

export default function mainPage() {
  return (
    <>
      <>
        <h1 className="main_page_title">Welcome to DadaBooks</h1>
        <div className="main_links">
          <div>
            <Link to={"/home"}>Home</Link>
          </div>
          <div>
            <Link to={"/register"}>Sign Up</Link>
          </div>
          <div>
            <Link to={"/login"}>Log In</Link>
          </div>
        </div>
      </>
    </>
  );
}
