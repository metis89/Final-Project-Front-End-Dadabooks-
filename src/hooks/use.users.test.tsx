import { User } from "../models/user";
import "@testing-library/jest-dom";
import { useUsers } from "./use.users";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { MemoryRouter as Router } from "react-router-dom";
import { UserRepository } from "../services/user.repository";
import userEvent from "@testing-library/user-event";
import { ac } from "../redux/users.slice";
import { loginUserAsync, registerUserAsync } from "../redux/user.thunk";

const mockUser = {
  userName: "Ernestina",
  email: "ernestina@pipi.com",
} as unknown as User;

const mockRepo = {
  register: jest.fn(),
  login: jest.fn(),
} as unknown as UserRepository;

const mockToken = "274658";

function TestComponent() {
  const { handleRegister, handleLogin, handleGetToken, handleLogout } =
    useUsers();

  return (
    <>
      <button onClick={() => handleRegister(mockUser)}></button>
      <button onClick={() => handleLogin(mockUser)}></button>
      <button onClick={() => handleGetToken(mockToken)}></button>
      <button onClick={() => handleLogout()}></button>
    </>
  );
}

describe("Given the useUsers custom hook", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(() =>
      render(
        <Router>
          <Provider store={store}>
            <TestComponent></TestComponent>
          </Provider>
        </Router>
      )
    );
    elements = screen.getAllByRole("button");
  });
  describe("When is rendered", () => {
    test("Then the handleRegisterUser function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[0]);
        store.dispatch(registerUserAsync({ repo: mockRepo, user: mockUser }));
        expect(mockRepo.register).toHaveBeenCalled();
      });
    });

    test("Then the handleLoginUser function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[1]);
        store.dispatch(loginUserAsync({ repo: mockRepo, user: mockUser }));
        expect(mockRepo.login).toHaveBeenCalled();
      });
    });

    test("Then the handleGetToken function should be called", async () => {
      await userEvent.click(elements[2]);
      store.dispatch(ac.getToken(mockToken));
    });
  });
});
