import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("../main/mainPage"));
const Home = lazy(() => import("../home/home"));
const Login = lazy(() => import("../login/login"));
const Register = lazy(() => import("../register/register"));
const Details = lazy(() => import("../book.detail/book.detail"));
const ErrorPage = lazy(() => import("../errorPage/errorPage"));
const BookForm = lazy(() => import("../book.form/bookForm"));
export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<MainPage></MainPage>}></Route>
        <Route path={"/home"} element={<Home></Home>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/detail"} element={<Details></Details>}></Route>
        <Route path={"/bookform"} element={<BookForm></BookForm>}></Route>
        <Route path={"/*"} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
