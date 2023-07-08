import { Link } from "react-router-dom";
import "./mainPage.scss";

export default function mainPage() {
  return (
    <>
      <>
        <h1 className="title">
          <img
            src="../../public/main-page-title.png"
            width="900"
            alt="Welcome to DadaBooks"
            className="title1"
          />
          <img
            src="../../public/DBmain-page.png"
            width="200"
            alt="Welcome to DadaBooks"
            className="title2"
          />
        </h1>
        <div className="main_links">
          <div>
            <Link to={"/home"}>
              <img
                src="../../public/home.png"
                width="100"
                alt="Click to go Home page"
                className="home"
              />
            </Link>
          </div>
          <div>
            <Link to={"/register"}>
              <img
                src="../../public/sign-up.png"
                width="100"
                alt="Click to Sign Up"
                className="sign_up"
              />
            </Link>
          </div>
          <div>
            <Link to={"/login"}>
              <img
                src="../../public/login.png"
                width="100"
                alt="Click to Login"
                className="login"
              />
            </Link>
          </div>
        </div>
        {/* <footer>
          <img
            src="../../public/footer.png"
            alt="Just a bit of decoration for the footer"
            className="footer"
          />
        </footer> */}
      </>
    </>
  );
}
