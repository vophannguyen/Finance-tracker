import "./Sidebar.less";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="brand">
        <div className="logo">FT</div>
        <div className="text">Finance Tracker</div>
      </div>
      <nav className="nav" aria-label="Main navigation">
        <a className="active" href="#">
          <span>🏠</span> Dashboard
        </a>
        <a href="#">
          <span>🧾</span> Expenses
        </a>
        <a href="#">
          <span>💵</span> Income
        </a>
        <a href="#">
          <span>📊</span> Budgets
        </a>
        <a href="#">
          <span>📁</span> Export
        </a>
        <a href="#">
          <span>⚙️</span> Settings
        </a>
      </nav>

      <div className="spacer"></div>

      <div>
        <small>Signed in as</small>
        <div className="name">Alice Johnson</div>
        <small>Last sync: Sep 8, 2025</small>
      </div>
    </aside>
  );
}
