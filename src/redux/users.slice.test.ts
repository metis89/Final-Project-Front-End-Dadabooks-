import { store } from "../redux/store";

import { ac } from "./users.slice";

describe("Given the users slice reducer", () => {
  describe("When it is instantiated", () => {
    test("Then it should update the token in the state", () => {
      const newToken = "Token";
      store.dispatch(ac.getToken(newToken));
      const state = store.getState().users;
      expect(state.token).toBe(newToken);
    });

    test("Then it should set the token to undefined in the state", () => {
      store.dispatch(ac.logout());
      const state = store.getState().users;
      expect(state.token).toBe(null);
    });
  });
});
