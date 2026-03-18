import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <>
      <div className="page-title">
        <h1>Register</h1>
        <p>Create a new account to track your progress.</p>
      </div>

      <div className="auth-container">
        <div className="card auth-card">
          <div className="auth-header">
            <div className="logo-icon" aria-hidden="true">
              🧩
            </div>
            <h2>Sign Up</h2>
            <p>Create your Sudoku Master account</p>
          </div>

          <div className="auth-form">
            <div className="form-group">
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                id="register-username"
                placeholder="Choose a username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                id="register-password"
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="verify-password">Verify Password</label>
              <input
                type="password"
                id="verify-password"
                placeholder="Re-enter your password"
              />
            </div>

            <button type="button" className="btn btn-primary">
              Create Account
            </button>
          </div>

          <div className="auth-divider">or</div>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
