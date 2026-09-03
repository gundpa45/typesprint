import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Buttons/Buttons";
import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";
import api from "../../Services/Api";

function RegisterPage() {

    const navigate = useNavigate();

    // -----------------------------
    // Form state
    // -----------------------------

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // -----------------------------
    // UI state
    // -----------------------------

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    // -----------------------------
    // Handle input changes
    // -----------------------------

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }


    // -----------------------------
    // Handle registration
    // -----------------------------

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        setError("");


        // Check password confirmation
        if (formData.password !== formData.confirmPassword) {

            setError("Passwords do not match");

            return;
        }


        try {

            setLoading(true);


            // Send registration request
            await api.post("/auth/register", {

                username: formData.username,

                email: formData.email,

                password: formData.password,

            });


            // Registration successful
            navigate("/login");


        } catch (error: any) {

            console.error("Registration error:", error);


            setError(
                error.response?.data?.message ||
                "Unable to create account. Please try again."
            );


        } finally {

            setLoading(false);

        }
    }


    return (

        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

            <div className="mx-auto flex min-h-screen max-w-md items-center px-6">

                <Card className="w-full p-8">


                    {/* =================================
                        HEADER
                    ================================= */}

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


                    {/* =================================
                        REGISTER FORM
                    ================================= */}

                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit}
                    >


                        {/* Username */}

                        <Input
                            id="username"
                            name="username"
                            type="text"
                            label="Username"
                            placeholder="Enter your username"
                            autoComplete="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />


                        {/* Email */}

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />


                        {/* Password */}

                        <Input
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Create a password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />


                        {/* Confirm password */}

                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />


                        {/* Error message */}

                        {error && (

                            <p className="text-sm text-[var(--error)]">
                                {error}
                            </p>

                        )}


                        {/* Submit button */}

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >

                            {loading
                                ? "Creating account..."
                                : "Create account"
                            }

                        </Button>

                    </form>


                    {/* =================================
                        LOGIN LINK
                    ================================= */}

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