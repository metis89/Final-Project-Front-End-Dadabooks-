import { Book } from "../models/book";
import { ApiRepository } from "./api.repository";

type ApiResponse = {
  items: Book[];
};
export class BookRepository extends ApiRepository<Book> {
  constructor(public url: string, public token: string) {
    super(url, token);
  }

  async getAll(): Promise<Book[]> {
    const response = await fetch(`${this.url}books`);
    console.log(response);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    const data = response.json() as Promise<ApiResponse>;
    return (await data).items;
  }

  async create(item: FormData): Promise<Book> {
    const response = await fetch(`${this.url}books`, {
      method: "POST",
      body: item,
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
    return response.json() as Promise<Book>;
  }

  async delete(id: Book["id"]): Promise<boolean> {
    const response = await fetch(this.url + "books/" + (id as string), {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) return true;
    return false;

    //
  }
}
