import Button from "../../components/Buttons/Buttons";
import Navbar from "../../components/Navbar/Navbar";


function Landing() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
            
            <Navbar />

            {/* Hero Section */}
            <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center px-6">

                <div className="w-full">

                    {/* Small brand label */}
                    <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                        TypeSprint
                    </p>


                    {/* Main heading */}
                    <h1 className="max-w-4xl text-display">
                        Master your keyboard.
                    </h1>


                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
                        Build your typing speed, improve your accuracy,
                        and become faster one lesson at a time.
                    </p>


                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap gap-3">

                        <Button>
                            Start learning
                        </Button>

                        <Button variant="secondary">
                            Try a typing test
                        </Button>

                    </div>


                    {/* Typing preview */}
                    <div className="mt-20">

                        <p className="mb-4 text-sm text-[var(--text-muted)]">
                            Start with the basics
                        </p>

                        <div className="typing-text text-2xl tracking-wide text-[var(--text-secondary)]">
                            fj jj ff jf
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Landing;