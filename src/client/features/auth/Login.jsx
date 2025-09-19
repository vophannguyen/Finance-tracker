import "./Login.less";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./authSlice";
export default function Login() {
  const navigate = useNavigate();

  // Controlled form fields
  const [email, setUsername] = useState("");
  const [password_hash, setPassword] = useState("");

  // Form submission
  const [login, { isLoading: loginLoading, error: loginError }] =
    useLoginMutation();
  /** Send the requested authentication action to the API */
  const attemptAuth = async (evt) => {
    evt.preventDefault();

    // const authMethod = isLogin ? login : register;
    const credentials = { email, password_hash };
    console.log(credentials);
    // We don't want to navigate if there's an error.
    // `unwrap` will throw an error if there is one
    // so we can use a try/catch to handle it.
    try {
      const data = await login(credentials).unwrap();
      navigate("/");
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="body">
      <div className="container">
        {/* <!-- Left side --> */}
        <div className="left">
          <div className="logo">FT</div>
          <h1>FINANCE TRACKER</h1>
          <p>
            Track your money.
            <br />
            Reach your goals.
          </p>
        </div>

        {/* <!-- Right side --> */}
        <div className="right">
          <h2>Log in</h2>
          <form onSubmit={attemptAuth}>
            <div className="form-group">
              <input
              type="email"
              placeholder="Email"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password_hash}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-btn">Log in</button>
            <div className="forgot">
              <NavLink to="/forgot">Forgot password?</NavLink>
            </div>
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
            Don’t have an account? <NavLink to="/signup">Sign up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
