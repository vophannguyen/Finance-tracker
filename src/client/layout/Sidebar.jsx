import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.less";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken } from "../features/auth/authSlice";
import { useGetUserQuery } from "../features/dashboard/dashboardSlice";

export default function Sidebar() {
  const navgiate = useNavigate()
  const dispatch =useDispatch()
  const token = useSelector(selectToken);
    const { data:data, isLoading } = useGetUserQuery();
    if(isLoading){
      return <p>Loading.....</p>
    }
    // console.log(data)
    if (!token) {
      return <p>You must be logged in </p>;
    }

    async function handleLogout(){
      await dispatch(logout())
      navgiate("/")
    }
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
        <div className="name">{data.user[0].name}</div>
        <small>Last sync: Sep 8, 2025</small>
        <button className="btn" onClick={handleLogout}>LogOut</button>
      </div>
    </aside>
  );
}
