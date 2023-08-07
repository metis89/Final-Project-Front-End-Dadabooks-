import { BookRepository } from "./book.repository";

const goodFetch = (mock: any) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mock),
  });
};

describe("BookRepository", () => {
  let bookRepository: BookRepository;

  beforeEach(() => {
    bookRepository = new BookRepository("https://dadabook.com/", "123");
  });

  describe("When calling the getAll method", () => {
    test("it should fetch data from the API and return the response", async () => {
      const expectedUrl = "https://dadabook.com/books";
      const mockResponse = {
        items: [
          {
            id: 1,
            title: "My Wife",
            author: "Ernestina",
          },
          {
            id: 2,
            title: "Walden",
            author: "Thoreau",
          },
        ],
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const response = await bookRepository.getAll();

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
      expect(response).toEqual(mockResponse.items);
    });
  });

  describe("when delete function is called", () => {
    test("then if fetch is OK it should give nothing", async () => {
      const mockValue = {};

      goodFetch(mockValue);
      const result = await bookRepository.delete("0");
      expect(result).toEqual(true);
    });
  });
});
