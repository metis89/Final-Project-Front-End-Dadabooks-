import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "../models/book";
import { BookRepository } from "../services/book.repository";

export type BookState = {
  bookList: Book[];
};

const initialState: BookState = {
  bookList: [] as Book[],
};

export const loadBookAsync = createAsyncThunk<Book[], BookRepository>(
  "books/load",
  async (repo: BookRepository) => {
    const answer = await repo.getAll();
    return answer;
  }
);

export const createBookAsync = createAsyncThunk<
  Book,
  { repo: BookRepository; book: FormData }
>("books/create", async ({ repo, book }) => {
  const response = await repo.create(book);
  return response;
});

export const updateBookAsync = createAsyncThunk<
  Book,
  { repo: BookRepository; id: Book["id"]; book: Partial<Book> }
>("books/update", async ({ repo, id, book }) => {
  return await repo.update(id, book);
});

export const deleteBookAsync = createAsyncThunk<
  boolean,
  { repo: BookRepository; id: string }
>("books/delete", async ({ repo, id }) => {
  return await repo.delete(id);
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
    builder.addCase(createBookAsync.fulfilled, (state, { payload }) => ({
      ...state,
      books: payload,
    }));
    builder.addCase(updateBookAsync.fulfilled, (state, { payload }) => ({
      ...state,
      books: payload,
    }));

    builder.addCase(deleteBookAsync.fulfilled, (state, { payload }) => ({
      ...state,
      books: payload,
    }));
  },
});

export default bookSlice.reducer;
