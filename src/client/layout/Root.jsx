import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import "./Root.less";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";
import Login from "../features/auth/Login";
export default function Root() {
  const token = useSelector(selectToken);
  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <div className="app">
          {/* <Navbar /> */}
          <Sidebar />
          <main className="main">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}
