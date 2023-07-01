import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../redux/users.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export type AppDispatch = typeof store;
export type RootState = ReturnType<typeof store.getState>;
