import { AppRoutes } from "./app.routes/App.routes";
import { MenuOptions } from "../types/menu.options";
import { storeName } from "../../src/config";
import { UserLogged, login } from "../redux/users.slice";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { Menu } from "./menu/menu";

export function App() {
  const dispatch = useDispatch();

  const initialLoginCheck = () => {
    const lsString = localStorage.getItem(storeName);

    if (!lsString) return console.log("No hay datos en el local storage");
    const { token } = JSON.parse(lsString);
    const userData: UserLogged = jwtDecode(token);
    userData.email = "";
    console.log(userData);
    dispatch(login({ token, userData }));
  };

  const menuOptions: MenuOptions = [
    { url: "/", label: "Inicio", protected: false },
    // { url: "books", label: "Books", protected: true },
  ];

  initialLoginCheck();

  return (
    <>
      <Menu options={menuOptions}></Menu>
      <AppRoutes></AppRoutes>
    </>
  );
}
