import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../main.page/Main.Page"));
const Login = lazy(() => import("../login/Login"));
const Register = lazy(() => import("../register/Register"));
const ErrorPage = lazy(() => import("../errorPage/errorPage"));
const BookList = lazy(() => import("../list/BookList"));
export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/booklist"} element={<BookList></BookList>}></Route>
        <Route path={"/*"} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
