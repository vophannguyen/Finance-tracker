import { NavLink } from "react-router-dom";
import "./Login.less";
export default function Signup() {
  return (
    <div className="body">
      <div className="container">
        {/* <!-- Left side --> */}
        <div className="left">
          <div className="logo">FT</div>
          <h1>FINANCE TRACKER</h1>
          <p>
            Create your account.
            <br />
            Start your journey.
          </p>
        </div>
        {/* <!-- Right side --> */}
        <div className="right">
          <h2>Sign up</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <button className="login-btn">Sign up</button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <button className="google-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/1024px-Google_Favicon_2025.svg.png"
              alt="Google"
            />
            Continue with Google
          </button>

          <div className="signup">
            Already have an account? <NavLink to="/login">Log in</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
