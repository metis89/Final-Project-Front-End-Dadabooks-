import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../main.page/mainPage"));
const Login = lazy(() => import("../login.page/login"));
const Register = lazy(() => import("../register.page/register"));
const ErrorPage = lazy(() => import("../errorPage/errorPage"));
const BookList = lazy(() => import("../list/bookList"));
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
