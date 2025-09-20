/**
 * **Main Content**

  * **Account Summary Cards**

    * Total Balance
    * Total Income (month)
    * Total Expenses (month)
    * Remaining Budget
  * **Recent Transactions Table**

    * Date | Category | Description | Amount | Tag
  * **Quick Add Button (floating)** → Add Expense / Add Income modal

* **Sidebar (optional)**

  * Quick links: Export, Reports, Settings
  * Savings Goals shortcut (Phase 2)
 */

import { useSelector } from "react-redux";
import "./Dashboard.less";

import { useState } from "react";
import { useGetUserQuery } from "./dashboardSlice";
import { selectToken } from "../auth/authSlice";
export default function Dashboard() {
  const [add, setAdd] = useState(false);
  const token = useSelector(selectToken);
  const { data: data, isLoading, isError } = useGetUserQuery();

  if (isLoading) {
    console.log(isError);
    return <div>Loading....</div>;
  }
  const { transaction, account, category, budgets } = data;
  console.log(transaction);
  if (!token) {
    return <p>You must be logged in </p>;
  }
  function handleQuickAdd() {
    setAdd(() => !add);
  }
  return (
    <>
      {/* <!-- MAIN --> */}
      <div className="main" role="main">
        {/* <!-- TOPBAR --> */}
        <div className="topbar">
          <div className="out-search">
            <div
              className="search"
              role="search"
              aria-label="Search transactions"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input placeholder="Search transactions, descriptions or amounts" />
            </div>

            <div className="actions">
              <button className="btn ghost" id="exportBtn">
                Export
              </button>
              <button className="btn" id="openAdd" onClick={handleQuickAdd}>
                Quick Add
              </button>
            </div>
          </div>
        </div>

        {/* <!-- CARDS --> */}
        <section className="cards" aria-label="Summary cards">
          <div className="card">
            <div className="title">Total Balance</div>
            <div className="value">
              ${account.reduce((ac, curAcc) => ac + Number(curAcc.balance), 0)}
            </div>
            <div className="describe">All accounts combined</div>
          </div>

          <div className="card">
            <div className="title">Income (This month)</div>
            <div className="value">
              $
              {transaction.reduce((ac, curTran) => {
                console.log(curTran.amount);
                if (curTran.type === "income") {
                  return ac + Number(curTran.amount);
                }
                return ac;
              }, 0)}
            </div>
            <div className="describe">Net income received</div>
          </div>

          <div className="card">
            <div className="title">Expenses (This month)</div>
            <div className="value">
              $
              {transaction.reduce((ac, curTran) => {
                console.log(curTran.amount);
                if (curTran.type === "expense") {
                  return ac + Number(curTran.amount);
                }
                return ac;
              }, 0)}
            </div>
            <div className="describe">Total spending</div>
          </div>

          <div className="card">
            <div className="title">Remaining Budget</div>
            <div className="value">
              $
              {transaction.reduce((ac, curTran) => {
                console.log(curTran.amount);
                if (curTran.type === "income") {
                  return ac + Number(curTran.amount);
                }
                return ac;
              }, 0) -
                transaction.reduce((ac, curTran) => {
                  console.log(curTran.amount);
                  if (curTran.type === "expense") {
                    return ac + Number(curTran.amount);
                  }
                  return ac;
                }, 0)}
            </div>
            <div className="describe">Across all categories</div>
          </div>
        </section>
        {/* <!-- Dashboard Panels --> */}
        <div className="dashboard">
          <div className="panel-dashboard">
            <h3>Cash Flow</h3>
            <div className="chart-placeholder"></div>
          </div>
          <div className="panel-dashboard">
            <h3>Spending by Category</h3>
            <div className="chart-placeholder"></div>
          </div>
        </div>
        <section className="grid">
          {/* <!-- Transactions Panel --> */}
          <div className="panel">
            <h3>Recent Transactions</h3>

            <div className="filters">
              <select className="select" aria-label="Filter by date range">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This month</option>
                <option>Custom range</option>
              </select>
              <select className="select" aria-label="Filter by category">
                <option>All categories</option>
                <option>Groceries</option>
                <option>Rent</option>
                <option>Dining Out</option>
              </select>
              <input
                className="input"
                placeholder="Search description or amount"
              />
            </div>

            <div style={{ overflow: "auto" }}>
              <table role="table" aria-label="Transactions table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Account</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transaction.map((tran) => {
                    return (
                      <tr key={tran.transaction_id}>
                        <td>
                          {new Date(tran.transaction_date).toDateString()}
                        </td>
                        <td>
                          {
                            category.find(
                              (cat) => cat.category_id === tran.category_id
                            ).name
                          }
                        </td>
                        <td>{tran.description}</td>
                        <td>
                          {
                            account.find(
                              (ac) => ac.account_id === tran.account_id
                            ).account_name
                          }
                        </td>
                        <td>
                          <span
                            className={
                              tran.type === "income"
                                ? "amount positive"
                                : "amount negative"
                            }
                          >
                            ${tran.amount}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Right column: Budgets + Quick Stats --> */}
          <aside className="panel">
            <h3>Budgets (This month)</h3>

            <div className="budgets">
              {budgets.map((budget) => {
                return (
                  <div className="budget-item" key={budget.budget_id}>
                    <div className="budget-title">
                      <span>
                        {
                          category.find(
                            (cat) => cat.category_id === budget.category_id
                          ).name
                        }
                      </span>
                      <span>
                        {
                          transaction.find(
                            (tran) => tran.category_id === budget.category_id
                          ).amount
                        }
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={
                          (transaction.find(
                            (tran) => tran.category_id === budget.category_id
                          ).amount /
                            budget.limit_amount) *
                            100 >
                          50
                            ? "progress red"
                            : "progress green"
                        }
                        style={{
                          width: `${
                            (transaction.find(
                              (tran) => tran.category_id === budget.category_id
                            ).amount /
                              budget.limit_amount) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr />

            <div className="recent">
              <div className="recent-top">
                <strong>Accounts</strong>
                <a href="#">Manage</a>
              </div>

              <div className="recent-bottom">
                {account.map((ac) => {
                  return (
                    <div key={ac.account_id}>
                      <span>{ac.account_name}</span>
                      <span>${ac.balance}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </section>
      </div>
      {/* <!-- Floating action --> */}
      <button className="fab" onClick={handleQuickAdd}>
        + Add
      </button>
      {/* <!-- Modal -->  */}
      {add && (
        <div className="modal-backdrop">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
          >
            <h3 id="modalTitle">Quick Add Transaction</h3>

            <div>Add expense or income quickly</div>

            <form>
              <div className="form-grid">
                <input className="input" type="date" name="date" />
                <select className="select">
                  <option>Expense</option>
                  <option>Income</option>
                </select>
                <select className="select">
                  <option>Groceries</option>
                  <option>Rent</option>
                  <option>Salary</option>
                  <option>Dining Out</option>
                  <option>Freelance</option>
                </select>

                <input
                  className="input full"
                  type="text"
                  name="description"
                  placeholder="Description"
                />
                <input
                  className="input"
                  type="number"
                  step="0.01"
                  name="amount"
                  placeholder="Amount"
                />
                <select className="select" name="account">
                  <option>Checking Account</option>
                  <option>Cash Wallet</option>
                  <option>Savings Account</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={handleQuickAdd}
                >
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
