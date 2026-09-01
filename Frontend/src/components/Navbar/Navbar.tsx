import { Link } from "react-router-dom";
import Button from "../Buttons/Buttons";

function Navbar() {
    return (
        <header className="w-full border-b border-[var(--border)]">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    to="/"
                    className="font-semibold tracking-tight text-[var(--text-primary)]"
                >
                    TypeSprint
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6">

                    <Link
                        to="/lessons"
                        className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                        Lessons
                    </Link>

                    <Link
                        to="/typing"
                        className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                        Typing Test
                    </Link>

                    <Link
                        to="/login"
                        className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                        Log in
                    </Link>

                    <Link to="/register">
                        <Button className="h-10 px-5">
                            Sign up
                        </Button>
                    </Link>

                </div>

            </nav>
        </header>
    );
}

export default Navbar;