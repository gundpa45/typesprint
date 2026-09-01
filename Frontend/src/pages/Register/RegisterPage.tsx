import { Link } from "react-router-dom";

import Button from "../../components/Buttons/Buttons";
import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";

function RegisterPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

            <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-md items-center px-6">

                <Card className="w-full p-8">

                    {/* Header */}
                    <div className="mb-8">

                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                            TypeSprint
                        </p>

                        <h1 className="text-title">
                            Create your account
                        </h1>

                        <p className="mt-2 text-[var(--text-secondary)]">
                            Start your journey to faster typing.
                        </p>

                    </div>


                    {/* Register form */}
                    <form className="space-y-5">

                        {/* Username */}
                        <Input
                            id="username"
                            name="username"
                            type="text"
                            label="Username"
                            placeholder="Enter your username"
                            autoComplete="username"
                        />


                        {/* Email */}
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                            autoComplete="email"
                        />


                        {/* Password */}
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Create a password"
                            autoComplete="new-password"
                        />


                        {/* Confirm Password */}
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                        />


                        {/* Submit */}
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Create account
                        </Button>

                    </form>


                    {/* Login link */}
                    <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">

                        <span>
                            Already have an account?{" "}
                        </span>

                        <Link
                            to="/login"
                            className="font-medium text-[var(--accent)] hover:underline"
                        >
                            Log in
                        </Link>

                    </div>

                </Card>

            </div>

        </main>
    );
}

export default RegisterPage;