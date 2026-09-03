import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Buttons/Buttons";
import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";
import api from "../../Services/Api";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      console.log("Login response:", response.data);

      // We'll store the token here
      localStorage.setItem("token", response.data.token);

      // Redirect after successful login
      navigate("/lessons");

    } catch (error: any) {
      console.error("Login error:", error);

      setError(
        error.response?.data?.message ||
        "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="mx-auto flex min-h-screen max-w-md items-center px-6">
        <Card className="w-full p-8">

          <div className="mb-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              TypeSprint
            </p>

            <h1 className="text-title">
              Welcome back
            </h1>

            <p className="mt-2 text-[var(--text-secondary)]">
              Log in to continue learning.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <p className="text-sm text-[var(--error)]">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </Button>

          </form>

          <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              Create account
            </Link>
          </div>

        </Card>
      </div>
    </main>
  );
}

export default LoginPage;