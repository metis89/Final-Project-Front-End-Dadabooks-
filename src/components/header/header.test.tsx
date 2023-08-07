import { render, screen } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Header } from "./header";
import { store } from "../../redux/store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("When given the header component", () => {
  let handleLogout: any;
  let usersMock;

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(handleLogout);
    usersMock = {
      token: undefined,
    };
    (useSelector as jest.Mock).mockReturnValue(usersMock);
  });

  afterEach(() => jest.clearAllMocks());

  describe("when there IS NO TOKEN in the state", () => {
    test("then will rendered a register button", async () => {
      render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );

      const headerElement = await screen.getAllByRole("button");
      expect(headerElement[0]).toBeInTheDocument();
    });
  });

  describe("when there IS TOKEN in the state", () => {
    beforeEach(() => {
      handleLogout = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(handleLogout);

      usersMock = {
        token: "1234",
      };
      (useSelector as jest.Mock).mockReturnValue(usersMock);
    });
    test("then the Book Form and the Logout button is rendered", async () => {
      render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );
      const headerElement = await screen.getAllByRole("button");
      expect(headerElement[0]).toBeInTheDocument();
    });
  });
});
