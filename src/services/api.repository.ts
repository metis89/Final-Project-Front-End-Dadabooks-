import { SyntheticEvent } from "react";

export class ApiRepository<T extends { id: string | number }> {
  constructor(public url: string, public token: string) {}

  async getAll(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    return response.json();
  }

  async get(id: T["id"]): Promise<T> {
    const response = await fetch(this.url + (id as string));
    return response.json() as Promise<T>;
  }

  async create(item: Partial<T>): Promise<T> {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<T>;
  }

  async update(id: T["id"], item: Partial<T>): Promise<T> {
    const response = await fetch(this.url + (id as string), {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<T>;
  }

  async delete(id: T["id"]): Promise<boolean> {
    const response = await fetch(this.url + (id as string), {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    return response.ok;
  }

  async getFiltered(filter: string) {
    const response = await fetch((this.url + filter) as string);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    return response.json();
  }

  async login(data: object) {
    const loginUrl = this.url + `user/login`;
    const response = await fetch(loginUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  }

  async register(event: SyntheticEvent) {
    event.preventDefault();
    console.log("registering...");

    const formDataRegister = new FormData();

    console.log(formDataRegister);
  }
}
