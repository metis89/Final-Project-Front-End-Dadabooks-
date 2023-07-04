import { UserRepository } from "../services/user.repository";
import { store } from "../redux/store";
import { User } from "../models/user";
import { getAllBooksAsync, loginUserAsync, registerUserAsync } from "./thunks";
import { BookRepository } from "../services/book.repository";

describe("Given the users slice reducer", () => {
  describe("When it is instantiated", () => {
    const user = {} as Partial<User>;

    const userRepo: UserRepository = {
      url: "http://localhost:4206",
      getAll: jest.fn(),
      register: jest.fn(),
      login: jest.fn(),
    };

    const bookRepo: BookRepository = new BookRepository(
      "http://localhost:4206",
      "013483"
    );

    test("Then it should dispatch the registerUserAsync", () => {
      store.dispatch(registerUserAsync({ repo: userRepo, user }));
      expect(userRepo.register).toHaveBeenCalled();
    });

    test("Then it should dispatch the loginUserAsync", () => {
      store.dispatch(loginUserAsync({ repo: userRepo, user }));
      expect(userRepo.login).toHaveBeenCalled();
    });

    test("Then it should dispatch the getAllBooksAsync", async () => {
      bookRepo.getAll = jest.fn().mockResolvedValue([]);

      await store.dispatch(getAllBooksAsync(bookRepo));
      expect(bookRepo.getAll).toHaveBeenCalled();
    });
  });
});
