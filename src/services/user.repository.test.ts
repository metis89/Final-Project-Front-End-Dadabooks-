import { UserRepository } from "./user.repository";

describe("UserRepository", () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository("https://dadabook.com/");
  });

  describe("When calling the register method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        userName: "Ernestina",
        email: "ernestina@pipi.com",
        password: "pipi",
      };

      const expectedUrl = "https://dadabook.com//user/register";
      const mockResponse = {
        id: "1",
        userName: "Ernestina",
        email: "ernestina@pipi.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const registeredUser = await userRepository.register(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(registeredUser).toEqual(mockResponse);
    });
  });

  describe("When calling the login method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        email: "ernestina@pipi.com",
        password: "pipi",
      };

      const expectedUrl = "https://dadabook.com//user/login";
      const mockResponse = {
        id: "1",
        userName: "Ernestina",
        email: "ernestina@pipi.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const loggedInUser = await userRepository.login(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(loggedInUser).toEqual(mockResponse);
    });
  });

  describe("When calling the getAll method", () => {
    it("should fetch data from the API and return the response", async () => {
      const expectedUrl = "https://dadabook.com/home";
      const mockResponse = {
        items: [
          {
            id: 1,
            name: "Ernestina",
            email: "ernestina@pipi.com",
          },
          {
            id: 2,
            name: "Piolin",
            email: "piolin@pipi.com",
          },
        ],
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const userRepository = new UserRepository(expectedUrl);
      const response = await userRepository.getAll();

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
      expect(response).toEqual(mockResponse.items);
    });

    it("should throw an error if the fetch is not successful", async () => {
      const expectedUrl = "https://dadabook.com/home";
      const mockErrorMessage = "Error";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Error",
      });

      const userRepository = new UserRepository(expectedUrl);

      await expect(userRepository.getAll()).rejects.toThrow(mockErrorMessage);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
