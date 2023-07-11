import { MemoryRouter as Router, useNavigate } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Register from "./register";
import { store } from "../../redux/store";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Given the register component", () => {
  describe("When register form is rendered", () => {
    const navigateMock = jest.fn();
    beforeEach(() => {
      (useNavigate as jest.Mock).mockReturnValue(navigateMock);

      render(
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
      );
    });

    test("Then the user should fill in the form and click on the 'Sign Up' button", () => {
      const usernameInput = screen.getByLabelText("User Name:");
      const emailInput = screen.getByLabelText("Email:");
      const passwordInput = screen.getByLabelText("Password:");
      const signUpButton = screen.getByText("Sign Up");

      userEvent.type(usernameInput, "Ernestina");
      userEvent.type(emailInput, "ernestina@pipi.com");
      userEvent.type(passwordInput, "pipi");

      fireEvent.click(signUpButton);

      expect(usernameInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
      expect(passwordInput).toHaveValue("");
    });
  });
});
