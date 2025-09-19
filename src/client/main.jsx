import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Tasks from "./features/tasks/Tasks";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard.jsx";
import Expense from "./features/expense/Expense.jsx";
import Income from "./features/income/Income.jsx";
import Budget from "./features/budget/Budget.jsx";
import Setting from "./features/setting/Setting.jsx";
import Login from "./features/auth/Login.jsx";
import Signup from "./features/auth/Signup.jsx";
import ForgotPass from "./features/auth/ForgotPass.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/expense", element: <Expense /> },
      { path: "/income", element: <Income /> },
      {
        path: "/budget",
        element: <Budget />,
      },
      { path: "/setting", element: <Setting /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot",
    element: <ForgotPass />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
