import { NavLink } from "react-router-dom";
import "./Sidebar.less";
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";
import Login from "../features/auth/Login";

export default function Sidebar() {
  const token = useSelector(selectToken);

  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="brand">
        <div className="logo">FT</div>
        <div className="text">Finance Tracker</div>
      </div>
      <menu className="nav">
        <NavLink to="/">
          <span>🏠</span> Dashboard
        </NavLink>
        <NavLink to="/expense">
          <span>🧾</span> Expenses
        </NavLink>
        <NavLink to="/income">
          <span>💵</span> Income
        </NavLink>
        <NavLink to="/budget">
          <span>📊</span> Budgets
        </NavLink>
        <a href="#">
          <span>📁</span> Export
        </a>
        <NavLink to="/setting">
          <span>⚙️</span> Settings
        </NavLink>
      </menu>

      <div className="spacer"></div>

      <div>
        <small>Signed in as</small>
        <div className="name">Alice Johnson</div>
        <small>Last sync: Sep 8, 2025</small>
      </div>
    </aside>
  );
}
