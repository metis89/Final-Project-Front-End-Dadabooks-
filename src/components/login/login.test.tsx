import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Login from "./login";
import { store } from "../../redux/store";
import { useUsers } from "../../hooks/use.users";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/use.users");
jest.mock("../../config.ts", () => ({
  url: "",
}));

beforeEach(() => {
  (useUsers as jest.Mock).mockReturnValue({
    handleLogin: jest.fn(),
  });
});

describe("Given Login component", () => {
  describe("When the login from is used", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Login></Login>
          </MemoryRouter>
        </Provider>
      );
    });

    describe("when you you press the submit button", () => {
      test("Then if a user fills the login form and clicks submit", async () => {
        const usernameInput = screen.getByPlaceholderText("Username / Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        // const submitButton = screen.getByText("SUBMIT");
        const form = screen.getByRole("form");

        await userEvent.type(usernameInput, "test");
        await userEvent.type(passwordInput, "testp");

        expect(usernameInput).toHaveValue("test");
        expect(passwordInput).toHaveValue("testp");

        // fireEvent.click(submitButton);
        fireEvent.submit(form);

        expect(useUsers().handleLogin).toHaveBeenCalled();
      });
    });
  });
});
