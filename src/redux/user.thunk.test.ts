import { UserRepository } from "../services/user.repository";
import { store } from "./store";
import { User } from "../models/user";
import { loginUserAsync, registerUserAsync } from "./user.thunk";

describe("Given the users slice reducer", () => {
  describe("When it is instantiated", () => {
    const user = {} as Partial<User>;

    const userRepo: UserRepository = {
      url: "http://localhost:4206",
      getAll: jest.fn(),
      register: jest.fn(),
      login: jest.fn(),
    };

    test("Then it should dispatch the registerUserAsync", () => {
      store.dispatch(registerUserAsync({ repo: userRepo, user }));
      expect(userRepo.register).toHaveBeenCalled();
    });

    test("Then it should dispatch the loginUserAsync", () => {
      store.dispatch(loginUserAsync({ repo: userRepo, user }));
      expect(userRepo.login).toHaveBeenCalled();
    });
  });
});
