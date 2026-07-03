import { useAuth } from "../auth/useAuth";

export default function Profile() {
  const { token } = useAuth();

  return (
    <section className="compendium-page">
      <div className="page-header">
        <h1>Profile</h1>
        <p className="muted">
          {token ? "You are signed in." : "Sign in to save your games."}
        </p>
      </div>
    </section>
  );
}
