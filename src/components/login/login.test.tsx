import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "./login";
import { store } from "../../redux/store";
import { useUsers } from "../../hooks/use.users";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/use.users");
// const mockPasswd = "passtest";

jest.mock("../../hooks/use.users");

const logged = jest.fn();

beforeEach(() => {
  (useUsers as jest.Mock).mockReturnValue({ userLogin: logged });
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
      const element = screen.getAllByRole("button");
      expect(element[2]).toBeInTheDocument();
    });
  });
  describe("when you you press the submit button", () => {
    test("then the email and passwd should be send", async () => {
      render(
        <Provider store={store}>
          <Router>
            <Login></Login>
          </Router>
        </Provider>
      );
      const form = await screen.findByRole("form");
      const user = screen.getByRole("textbox");
      const password = screen.getByPlaceholderText("Password");
      console.log(form);

      await userEvent.type(user, "test");
      await userEvent.type(password, "passtest");
      await fireEvent.submit(form);

      expect(form).toBeInTheDocument();
      expect(logged).toHaveBeenCalled();
    });
  });
});
