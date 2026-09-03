import Card from "../../components/Card/Card";
import Button from "../../components/Buttons/Buttons";
import Progress from "../../components/Progress/Progress";

interface LessonCardProps {
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  order: number;
  progress?: number;
  onStart?: () => void;
}

function LessonCard({
  title,
  description,
  difficulty,
  order,
  progress = 0,
  onStart,
}: LessonCardProps) {
  return (
    <Card className="flex flex-col p-6">

      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm text-[var(--text-muted)]">
          Lesson {order}
        </span>

        <span className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 text-xs font-medium capitalize text-[var(--text-secondary)]">
          {difficulty}
        </span>
      </div>

      <h2 className="text-title">
        {title}
      </h2>

      <p className="mt-3 flex-1 text-[var(--text-secondary)]">
        {description}
      </p>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-xs text-[var(--text-muted)]">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <Progress value={progress} />
      </div>

      <Button
        className="mt-6 w-full"
        onClick={onStart}
      >
        Start Lesson
      </Button>

    </Card>
  );
}

export default LessonCard;