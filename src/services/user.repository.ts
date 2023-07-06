import { User } from "../../src/models/user";

type ApiResponse = {
  items: User[];
};
export class UserRepository {
  constructor(public url: string) {}

  async getAll(): Promise<User[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    const data = response.json() as Promise<ApiResponse>;
    return (await data).items;
  }

  async register(item: Partial<User>): Promise<User> {
    console.log("URL", this.url);
    const response = await fetch(this.url + "/user/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json() as Promise<User>;
  }
  async login(item: Partial<User>): Promise<User> {
    const response = await fetch(this.url + "/user/login", {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error();
    return response.json() as Promise<User>;
  }
}
