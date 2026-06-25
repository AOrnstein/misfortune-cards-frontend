import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await login({ username, password });
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section className="auth-card">
      <div>
        <h1>Welcome Back</h1>
        <p className="muted">Sign in to continue your journey.</p>
      </div>

      <form action={onLogin}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>

        <label>
          Password
          <input type="password" name="password" required />
        </label>

        <button>Login</button>

        {error && <output>{error}</output>}
      </form>

      <p className="muted">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </section>
  );
}