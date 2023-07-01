import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Login from "./Login";
import { useUsers } from "../../hooks/use.users";
import userEvent from "@testing-library/user-event/";

jest.mock("../../hooks/use.users");

describe("Given Login component", () => {
  beforeEach(() => {
    (useUsers as jest.Mock).mockReturnValue({ handleLoginUser: jest.fn() });

    render(
      <Router>
        <Provider store={store}>
          <Login></Login>
        </Provider>
      </Router>
    );
  });
  describe("When it is instantiate", () => {
    test("Then it should render the Login component", async () => {
      const element = await screen.findAllByRole("button");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the button", () => {
    // const handleLoginUser = jest.fn();

    test("Then handleSubmit should be called", async () => {
      const element = await screen.findAllByRole("button");
      const element2 = screen.getAllByRole("textbox") as HTMLInputElement[];

      console.log(element2);
      await fireEvent.click(element[0]);
      await userEvent.type(element2[0], "eeee");
      await userEvent.type(element2[1], "aaaa");
      expect(element2[0]).toBeInTheDocument();
      expect(element2[1]).toBeInTheDocument();

      expect(useUsers().handleLoginUser).toHaveBeenCalled();
    });
  });
});
