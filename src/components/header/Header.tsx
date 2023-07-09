import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeName } from "../../config";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/users.slice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
            DadaBooks
          </Link>
        </div>
        <div className="title_info">
          {token ? (
            <>
              <div className="user_info">
                <button onClick={handleAddBook} className="add_book_button">
                  Add Book
                </button>
                <button onClick={handleLogout} className="logout_button">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="user_info user_buttons">
                <button onClick={handleRegister} className="register_button">
                  Register
                </button>
                <button onClick={handleUser} className="login_button">
                  Login
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
