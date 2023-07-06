import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeName } from "../../config";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/users.slice";
import Swal from "sweetalert2";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootState) => state.users);

  const handleUser = () => {
    if (token) {
      runLogout();
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  const handleRegister = () => {
    console.log("Register");
    navigate("/register");
  };

  const runLogout = () => {
    Swal.fire({ icon: "success", text: "Succesfully logged out!" });
    dispatch(logout());
    localStorage.removeItem(storeName);
  };

  return (
    <>
      <header className="title">
        <div className="title_name">
          <h1>DadaBooks</h1>
        </div>
        <div className="title_info">
          {token ? (
            <>
              <div className="user_info">
                <button onClick={handleUser} className="logout_button">
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
