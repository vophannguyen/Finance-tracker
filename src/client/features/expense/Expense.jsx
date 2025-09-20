import "./Expense.less";
import { useGetExpenseQuery } from "./expenseSlice";
export default function Expense() {
  const { data: data, isLoading } = useGetExpenseQuery();
  if (isLoading) {
    return <div>Loading....</div>;
  }
  console.log(data);
  const { expense, category } = data;
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
            {expense.map((ex) => {
              return (
                <tr key={ex.transaction_id}>
                  <td>{new Date(ex.transaction_date).toDateString()}</td>
                  <td>
                    {
                      category.find((cat) => cat.category_id === ex.category_id)
                        .name
                    }
                  </td>
                  <td>{ex.description}</td>
                  <td>-${ex.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
