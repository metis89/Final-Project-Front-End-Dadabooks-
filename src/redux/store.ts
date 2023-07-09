import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import userReducer from "./users.slice";
import booksSlice from "./book.thunk";

export const store = configureStore({
  reducer: {
    users: userReducer,
    books: booksSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
