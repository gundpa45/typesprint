import { Link } from "react-router-dom";

import Button from "../../components/Buttons/Buttons";
import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";

function LoginPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

            <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-md items-center px-6">

                <Card className="w-full p-8">

                    <div className="mb-8">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                            TypeSprint
                        </p>

                        <h1 className="text-title">
                            Welcome back
                        </h1>

                        <p className="mt-2 text-[var(--text-secondary)]">
                            Log in to continue your typing journey.
                        </p>
                    </div>


                    <form className="space-y-5">

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                        />

                        <Input
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                        />

                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Log in
                        </Button>

                    </form>


                    <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">

                        <span>
                            Don't have an account?{" "}
                        </span>

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