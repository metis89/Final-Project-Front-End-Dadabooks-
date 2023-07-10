// import { render, screen } from "@testing-library/react";
// import { Provider, useDispatch, useSelector } from "react-redux";

// import { logout } from "../../redux/users.slice";
// import { Router } from "react-router-dom";
// import { Header } from "./header";
// import { store } from "../../redux/store";

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// describe("When given the header component", () => {
//   let handleLogout: any;
//   let usersMock;

//   beforeEach(() => {
//     (useDispatch as jest.Mock).mockReturnValue(handleLogout);

//     usersMock = {
//       extraInfo: {
//         token: undefined,
//       },
//     };
//     (useSelector as jest.Mock).mockReturnValue(usersMock);
//   });
//   afterEach(() => jest.clearAllMocks());

//   describe("when there IS NO TOKEN in the state", () => {
//     test("then will rendered a register button", () => {
//       render(
//         <Provider store={store}>
//           <Router>
//             <Header>
//               <button></button>
//             </Header>
//           </Router>
//         </Provider>
//       );
//       const headerElement = screen.getByRole("button");
//       expect(headerElement).toBeInTheDocument();
//     });
//   });
//   describe("when there IS TOKEN in the state", () => {
//     beforeEach(() => {
//       handleLogout = jest.fn();
//       (useDispatch as jest.Mock).mockReturnValue(handleLogout);

//       usersMock = {
//         extraInfo: {
//           token: "1234",
//         },
//       };
//       (useSelector as jest.Mock).mockReturnValue(usersMock);
//     });
//     test("then the Book Form and the Logout button is rendered", () => {
//       render(
//         <Provider store={store}>
//           <Router>
//             <Header>
//               <form></form>
//               <button></button>
//             </Header>
//           </Router>
//         </Provider>
//       );
//       const headerElement = screen.getByRole("form");
//       expect(headerElement).toBeInTheDocument();
//     });
//   });
//   // describe("when the logut button is clicked", () => {
//   //   beforeEach(() => {
//   //     logout = jest.fn();
//   //     (useDispatch as jest.Mock).mockReturnValue(logout);

//   //     usersMock = {
//   //       extraInfo: {
//   //         token: "123456",
//   //       },
//   //     };
//   //     (useSelector as jest.Mock).mockReturnValue(usersMock);
//   //   });
//   //   test("then logout handler should be called", () => {
//   //     render(<Profile />);
//   //     const element = screen.getByRole("button");
//   //     fireEvent.click(element);
//   //     expect(handlerLogout).toHaveBeenCalled();
//   //   });
//   // });
// });
