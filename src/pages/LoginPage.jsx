import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="page-title">
        <h1>Login</h1>
        <p>Welcome back, puzzle master!</p>
      </div>

      <div className="auth-container">
        <div className="card auth-card">
          <div className="auth-header">
            <div className="logo-icon" aria-hidden="true">
              🧩
            </div>
            <h2>Sign In</h2>
            <p>Enter your credentials to continue</p>
          </div>

          <div className="auth-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>

            <div className="remember-row">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button type="button" className="btn btn-primary">
              Sign In
            </button>
          </div>

          <div className="auth-divider">or</div>

          <p className="auth-footer">
            Don&apos;t have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}
