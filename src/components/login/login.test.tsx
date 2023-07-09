import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "./login";
import { store } from "../../redux/store";
import { useUsers } from "../../hooks/use.users";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/use.users");
const mockPasswd = "pass test";

jest.mock("../../hooks/use.users");

beforeEach(() => {
  (useUsers as jest.Mock).mockReturnValue({ userLogin: jest.fn() });
});

describe("Given Login component", () => {
  describe("When the component is rendered", () => {
    beforeEach(async () => {
      render(
        <Provider store={store}>
          <Router>
            <Login></Login>
          </Router>
        </Provider>
      );
    });

    test("Then the <button> should be used", async () => {
      const element = screen.getByRole("button");
      await fireEvent.click(element);
    });
  });
  describe("when you you press the submit button", () => {
    test("then the email and passwd should be send", async () => {
      render(
        <Provider store={store}>
          <Login></Login>
        </Provider>
      );
      const inputs = screen.getAllByRole("textbox");
      const fireButton = screen.getByRole("button");

      await userEvent.type(inputs[0], "test");
      await userEvent.type(inputs[1], "pass test");
      await userEvent.click(fireButton);
      expect(fireButton).toBeInTheDocument();
      expect(useUsers().handleLogin).toBeCalledWith({
        email: "test",
        password: mockPasswd,
      });
    });
  });
});
