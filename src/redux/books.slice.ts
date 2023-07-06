import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../models/book";

export type BookState = {
  books: Book[];
};

const initialState: BookState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    load: (state, action) => {
      state.books = action.payload;
    },

    // add: (state, action) => {
    //   state.books = action.payload;
    // },

    // edit: (state, action) => {
    //   state.books = action.payload;
    // },

    // delete: (state, action) => {
    //   state.books = action.payload;
    // },
  },
});

export const { load } = booksSlice.actions;
export default booksSlice.reducer;
