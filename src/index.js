// import React from "react";
// import ReactDOM from "react-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
// import "./styles/index.css";
// import Layout from "./components/layout";
// import Login from "./pages/login";
// import Home from "./pages/home";
// import User from "./pages/user";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <Home />
//       </Layout>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <Layout>
//         <Login />
//       </Layout>
//     ),
//   },
//   {
//     path: "/user",
//     element: (
//       <Layout>
//         <User />
//       </Layout>
//     ),
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// reportWebVitals();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/index";
import store from "./store/store";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
