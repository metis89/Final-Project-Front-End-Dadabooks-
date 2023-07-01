import { Book } from "./book";

export type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  isLogged: boolean;
  token: string;
  books: Book[];
};
