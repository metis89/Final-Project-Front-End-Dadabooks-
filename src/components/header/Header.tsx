import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeName } from "../../config";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/users.slice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./header.scss";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootState) => state.users);

  const handleUser = () => {
    if (token) {
      handleLogout();
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    Swal.fire({ icon: "success", text: "Succesfully logged out!" });
    dispatch(logout());
    localStorage.removeItem(storeName);
    window.location.reload();
  };

  const handleAddBook = () => {
    console.log("bookform");
    navigate("/bookform");
  };

  return (
    <>
      <header className="title">
        <div className="title_name">
          <Link className="title_anchor" to={"/home"}>
            <img
              src="../../public/dadabooksXS.png"
              width="250"
              alt="Go to Home page"
              className="home"
            />
          </Link>
        </div>
        <div className="title_info">
          {token ? (
            <>
              <div className="header_buttons">
                <button
                  onClick={handleAddBook}
                  className="new_book_button"
                ></button>
                <button
                  onClick={handleLogout}
                  className="logout_button"
                ></button>
              </div>
            </>
          ) : (
            <>
              <div className="header_buttons_NO_token">
                <button
                  onClick={handleRegister}
                  className="register_button"
                ></button>
                <button onClick={handleUser} className="login_button"></button>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
