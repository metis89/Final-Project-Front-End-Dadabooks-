import { SyntheticEvent } from "react";
import { login } from "../../redux/users.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { storeName, url } from "../../config";

const menuOptions: MenuOptions = [
  { url: "/", label: "Home", protected: false },
  { url: "books", label: "Books", protected: false },
];

import { List } from "../list/bookList";

export function Main() {
  return (
    <>
      <List></List>
      <Buttons></Buttons>
    </>
  );
}
