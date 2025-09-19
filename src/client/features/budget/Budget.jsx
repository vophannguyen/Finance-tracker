import "../dashboard/Dashboard.less";
import "./Budget.less";
export default function Budget() {
  return (
    <div>
      <div className="header-section">
        <h2>Your Budgets</h2>
        <button className="btn">+ Add New Budget</button>
      </div>

      <div className="budgets-grid">
        {/* <!-- Groceries --> */}
        <div className="budget-card">
          <div className="budget-header">
            <h3>Groceries</h3>
            <span className="amount">$250 / $400</span>
          </div>
          <div className="progress-bar">
            <div className="progress warning" style={{ width: `62.5%` }}></div>
          </div>
          <div className="budget-footer">
            <span>Remaining: $150</span>
            <span>Ends: 30 Sep</span>
          </div>
        </div>

        {/* <!-- Rent --> */}
        <div className="budget-card">
          <div className="budget-header">
            <h3>Rent</h3>
            <span className="amount">$1000 / $1000</span>
          </div>
          <div className="progress-bar">
            <div className="progress expense" style={{ width: `100%` }}></div>
          </div>
          <div className="budget-footer">
            <span>Remaining: $0</span>
            <span>Ends: 30 Sep</span>
          </div>
        </div>

        {/* <!-- Dining Out --> */}
        <div className="budget-card">
          <div className="budget-header">
            <h3>Dining Out</h3>
            <span className="amount">$60 / $200</span>
          </div>
          <div className="progress-bar">
            <div className="progress safe" style={{ width: `30%` }}></div>
          </div>
          <div className="budget-footer">
            <span>Remaining: $140</span>
            <span>Ends: 30 Sep</span>
          </div>
        </div>
      </div>
    </div>
  );
}
