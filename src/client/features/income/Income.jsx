import "../expense/Expense.less";
export default function Income() {
  return (
    <>
      <div className="topbar">
        <h2>Income</h2>
        <button className="btn">+ Add Income</button>
      </div>

      <div className="panel">
        <h3>Income List</h3>
        <table width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Source</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-09-01</td>
              <td>Salary</td>
              <td>Company XYZ</td>
              <td>+$3,000.00</td>
            </tr>
            <tr>
              <td>2025-09-02</td>
              <td>Freelance</td>
              <td>Design Project</td>
              <td>+$800.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
