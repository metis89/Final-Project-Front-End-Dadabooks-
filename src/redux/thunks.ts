import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../services/user.repository";
import { BookRepository } from "../services/book.repository";
import { Book } from "../models/book";

const repos = new UserRepository("http://localhost:9900");

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: typeof repos; user: Partial<User> }
>("/register", async ({ repo, user }) => {
  return await repo.register(user);
});

export const loginUserAsync = createAsyncThunk<
  Partial<User>,
  { repo: UserRepository; user: Partial<User> }
>("/login", async ({ repo, user }) => {
  const result = await repo.login(user);
  return result;
});

export const getAllBooksAsync = createAsyncThunk<Book[], BookRepository>(
  "/home",
  async (repo: BookRepository) => {
    const answer = await repo.getAll();
    return answer;
  }
);
