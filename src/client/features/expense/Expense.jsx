import "./Expense.less";
export default function Expense() {
  return (
    <>
      <div className="topbar">
        <h2>Expenses</h2>
        <button className="btn">+ Add Expense</button>
      </div>
      <div className="panel">
        <h3>Expense List</h3>
        <table width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-09-02</td>
              <td>Groceries</td>
              <td>Walmart</td>
              <td>-$120.50</td>
            </tr>
            <tr>
              <td>2025-09-03</td>
              <td>Rent</td>
              <td>Apartment</td>
              <td>-$1,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
