import { useEffect, useState } from "react";


import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Button from "../../components/Buttons/Buttons";
import Progress from "../../components/Progress/Progress";
import api from "../../Services/Api";
import LessonCard from "./Lessonscard";

interface Lesson {
  _id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  order: number;
  content: string;
}

function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchLessons() {
      try {
        setLoading(true);

        const response = await api.get("/lessons");

        setLessons(response.data);

      } catch (error: any) {
        console.error("Failed to fetch lessons:", error);

        setError(
          error.response?.data?.message ||
          "Unable to load lessons."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchLessons();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Learn
          </p>

          <h1 className="text-heading">
            Typing Lessons
          </h1>

          <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
            Build your typing skills step by step.
            Start with the basics and work your way up.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-[var(--text-secondary)]">
            Loading lessons...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-sm text-[var(--error)]">
            {error}
          </p>
        )}

        {/* Lessons */}
        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson._id}
                title={lesson.title}
                description={lesson.description}
                difficulty={lesson.difficulty}
                order={lesson.order}
                progress={0}
                />
            ))}
          </div>
        )}

        {/* No lessons */}
        {!loading && !error && lessons.length === 0 && (
          <p className="text-[var(--text-secondary)]">
            No lessons available yet.
          </p>
        )}

      </section>
    </main>
  );
}

export default LessonsPage;