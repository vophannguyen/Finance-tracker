import { useGetUserQuery } from "../dashboard/dashboardSlice";
import "../expense/Expense.less";
export default function Income() {
  const { data: data, isLoading } = useGetUserQuery();
  if (isLoading) {
    return <div>Loading....</div>;
  }
  const { transaction, category } = data;
  const income = transaction.filter((tran) => tran.type === "income");
  console.log(income);
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
            {income.map((inco) => {
              return (
                <tr>
                  <td>{new Date(inco.transaction_date).toDateString()}</td>
                  <td>
                    {
                      category.find(
                        (cat) => cat.category_id === inco.category_id
                      ).name
                    }
                  </td>
                  <td>{inco.description}</td>
                  <td>+${inco.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
