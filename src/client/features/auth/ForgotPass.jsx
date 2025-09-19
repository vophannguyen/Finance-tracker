import { NavLink } from "react-router-dom";
import "./ForgotPass.less";
export default function ForgotPass() {
  return (
    <div className="body">
      <div className="container-forgot">
        <h2>Forgot password?</h2>
        <p>
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        <form>
          <div className="form-group">
            <input type="email" placeholder="Email address" required />
          </div>
          <button className="reset-btn">Send Reset Link</button>
        </form>

        <div className="back">
          Remembered your password? <NavLink to="/login">Back to Login</NavLink>
        </div>
      </div>
    </div>
  );
}
