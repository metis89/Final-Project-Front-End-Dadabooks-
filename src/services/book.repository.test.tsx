import { BookRepository } from "./book.repository";

const goodFetch = (mock: any) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mock),
  });
};
// const badFetch = () => {
//   global.fetch = jest.fn().mockResolvedValue("Test error");
// };

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

  // describe("When calling the create method", () => {
  //   test("Then it should send data to the API and return a new book", async () => {
  //     const bookData = new FormData();
  //     bookData.append("name", "New Book");

  //     const createdBook = { id: 1, name: "New Book" };

  //     global.fetch = jest.fn().mockResolvedValue({
  //       ok: true,
  //       json: jest.fn().mockResolvedValue(createdBook),
  //       headers: new Headers(),
  //       redirected: false,
  //       status: 200,
  //       statusText: "OK",
  //       type: "basic",
  //       url: "https://dadabook.com/books",
  //     });

  //     const result = await bookRepository.create(bookData);

  //     expect(global.fetch).toHaveBeenCalledWith("https://dadabook.com/books", {
  //       method: "POST",
  //       body: bookData,
  //       headers: {
  //         Authorization: "Bearer 123",
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     expect(result).toEqual(createdBook);
  //   });
  // });

  describe("when delete function is called", () => {
    test("then if fetch is OK it should give nothing", async () => {
      const mockValue = {};

      goodFetch(mockValue);
      const result = await bookRepository.delete("0");
      expect(result).toEqual(true);
    });
  });
});
