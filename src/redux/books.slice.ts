import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "../models/book";
import { BookRepository } from "../services/book.repository";

export type State = {
  bookList: Book[];
  bookData: Partial<Book>;
  token?: string;
};

const initialState: State = {
  bookList: [],
  token: "",
  bookData: {} as Partial<Book>,
};

export const loadBookAsync = createAsyncThunk(
  "books/load",
  async (repo: BookRepository) => {
    const response = await repo.getAll();
    return response;
  }
);

export const registerBookAsync = createAsyncThunk<
  Book,
  { repo: BookRepository; data: FormData }
>("books/create", async ({ repo, data }) => {
  return await repo.create(data);
});

export const editBookAsync = createAsyncThunk<
  Book,
  { repo: BookRepository; data: Partial<Book> }
>("books/update", async ({ repo, data }) => {
  return await repo.update(data);
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBookAsync.fulfilled, (state, { payload }) => ({
      ...state,
      bookList: payload,
    }));
    builder.addCase(registerBookAsync.fulfilled, (state, { payload }) => ({
      ...state,
      books: payload,
    }));
    builder.addCase(editBookAsync.fulfilled, (state, { payload }) => ({
      ...state,
      books: payload,
    }));
  },
});

export default bookSlice.reducer;
