import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("../main.page/mainPage"));
const Home = lazy(() => import("../home/home"));
const Login = lazy(() => import("../login.page/login"));
const Register = lazy(() => import("../register.page/register"));
const ErrorPage = lazy(() => import("../errorPage/errorPage"));
const BookList = lazy(() => import("../list/bookList"));
const BookForm = lazy(() => import("../form/bookForm"));
export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<MainPage></MainPage>}></Route>
        <Route path={"/home"} element={<Home></Home>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/booklist"} element={<BookList></BookList>}></Route>
        <Route path={"/bookform"} element={<BookForm></BookForm>}></Route>
        <Route path={"/*"} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
