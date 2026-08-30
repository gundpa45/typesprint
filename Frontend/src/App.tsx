import Button from "./components/Buttons/Buttons";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import Progress from "./components/Progress/Progress";

function App() {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] p-8 text-[var(--text-primary)]">

            <div className="mx-auto max-w-md">

                <Card className="p-6">

                    {/* Card */}
                    <h2 className="text-title">
                        Welcome to TypeSprint
                    </h2>

                    <p className="mt-2 text-[var(--text-secondary)]">
                        Start your typing journey.
                    </p>


                    {/* Input */}
                    <div className="mt-6">
                        <Input
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="mt-4">
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="Your password"
                        />
                    </div>


                    {/* Buttons */}
                    <div className="mt-6 flex gap-3">
                        <Button>
                            Continue
                        </Button>

                        <Button variant="secondary">
                            Cancel
                        </Button>
                    </div>


                    {/* Progress */}
                    <div className="mt-8">

                        <p className="mb-2 text-sm text-[var(--text-secondary)]">
                            Lesson Progress — 25%
                        </p>

                        <Progress value={25} />

                    </div>


                    <div className="mt-6">

                        <p className="mb-2 text-sm text-[var(--text-secondary)]">
                            Lesson Progress — 50%
                        </p>

                        <Progress value={50} />

                    </div>


                    <div className="mt-6">

                        <p className="mb-2 text-sm text-[var(--text-secondary)]">
                            Lesson Progress — 75%
                        </p>

                        <Progress value={75} />

                    </div>


                    <div className="mt-6">

                        <p className="mb-2 text-sm text-[var(--text-secondary)]">
                            Lesson Progress — 100%
                        </p>

                        <Progress value={100} />

                    </div>

                </Card>

            </div>

        </div>
    );
}

export default App;