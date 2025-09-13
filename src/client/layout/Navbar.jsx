import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./Navbar.less";
import Profile  from "./Profile";
/**
 * * **Header / Navbar**
  * Logo (left)
  * Nav links: Dashboard | Expenses | Income | Budgets | Reports
  * Profile menu (settings, export, logout)
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="top">
      <h1>Finance Tracker</h1>
      <menu>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/expense">Expense</NavLink>

        </li>
        <li>
          <NavLink to="/income">Income</NavLink>
        </li>
        <li>
          <NavLink to="/budget">Budget</NavLink>
        </li>
        <li>
          <NavLink to="/report">Report</NavLink>
        </li>
        <li><Profile /></li>
        {token ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
      </menu>
    </nav>
  );
}
