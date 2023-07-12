import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
import MainPage from "./mainPage";
import { render, screen } from "@testing-library/react";

jest.mock("../header/Header");

describe("Given a mainPage", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage></MainPage>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should return", () => {
      const element = screen.getAllByRole("link");

      expect(element).toBeInTheDocument;
      // expect(header).toHaveBeenCalled();
    });
  });
});
