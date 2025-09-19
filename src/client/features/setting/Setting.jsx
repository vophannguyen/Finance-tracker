import "../expense/Expense.less";
export default function Setting() {
  return (
    <div className="main">
      <div className="topbar">
        <h2>Settings</h2>
      </div>

      <div className="panel">
        <h3>User Preferences</h3>
        <form>
          <label>
            Currency:
            <select>
              <option>USD</option>
              <option>EUR</option>
              <option>JPY</option>
            </select>
          </label>
          <br />
          <br />

          <label>
            Language:
            <select>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </label>
          <br />
          <br />

          <button className="btn" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
