import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

/**
 * Log in form that verifies existing user. 
*/
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
// Attempts to authenticate user using the submitted credentials. 
  const onLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
// Redirects to home page after a successful login.
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };
// Renders the login form and any authentication errors.
  return (
    <>
      <h1>Log in to your account</h1>
      <form action={onLogin}>
        <label>
          Username
          <input type="username" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
        {error && <output>{error}</output>}
      </form>
      <Link to="/register">Need an account? Register here.</Link>
    </>
  );
}
