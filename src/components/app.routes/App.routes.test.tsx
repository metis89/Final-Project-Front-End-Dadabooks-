import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
import { AppRoutes } from "./App.routes";
import "@testing-library/jest-dom";

describe("Given the AppRoutes component", () => {
  describe("When it is instantiate with a route /", () => {
    const MockedComponentHome = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock("../home/Home", () => MockedComponentHome);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/home"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Home");
    });
    test("Then it should render Home", () => {
      expect(MockedComponentHome).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /", () => {
    const MockedComponentMainPage = jest
      .fn()
      .mockReturnValue(<h1>Welcome to DadaBooks</h1>);
    jest.mock("../main/mainPage", () => MockedComponentMainPage);
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Welcome to DadaBooks");
    });
    test("Then it should render mainPage", () => {
      expect(MockedComponentMainPage).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /register", () => {
    const MockedComponentRegister = jest
      .fn()
      .mockReturnValue(<h1>Register</h1>);
    jest.mock("../register/register", () => MockedComponentRegister);
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/register"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Register");
    });
    test("Then it should render Register", () => {
      expect(MockedComponentRegister).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /login", () => {
    const MockedComponentLogin = jest.fn().mockReturnValue(<h1>Login</h1>);
    jest.mock("../login/login", () => MockedComponentLogin);
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/login"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Login");
    });
    test("Then it should render Login", () => {
      expect(MockedComponentLogin).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /bookform", () => {
    const MockedComponentBookForm = jest
      .fn()
      .mockReturnValue(<h2>Please register a new book</h2>);
    jest.mock("../book.form/bookForm", () => MockedComponentBookForm);
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/bookform"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Please register a new book");
    });
    test("Then it should render Please register a new book", () => {
      expect(MockedComponentBookForm).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route *", () => {
    const MockedComponentError = jest.fn().mockReturnValue(<h1>Error</h1>);
    jest.mock("../errorPage/errorPage", () => MockedComponentError);
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/*"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Error");
    });
    test("Then it should render ErrorPage", () => {
      expect(MockedComponentError).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
