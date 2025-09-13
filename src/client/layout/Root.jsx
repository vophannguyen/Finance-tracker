import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import "./Root.less";
import Sidebar from "./Sidebar";
export default function Root() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
