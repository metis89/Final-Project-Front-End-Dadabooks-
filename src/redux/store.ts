import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Store = typeof store;
