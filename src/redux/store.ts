import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users.slice";
import booksSlice from "./books.slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    books: booksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
