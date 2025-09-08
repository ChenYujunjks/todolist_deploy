import { cn } from "@/lib/utils";
import type { Todo } from "@/lib/types/Todo";
import { classifyTodoDate } from "@/lib/TodoClassify";

interface TodoCardProps {
  todo: Todo;
  onToggleComplete: (id: number, is_completed: boolean) => void;
  onDelete: (id: number) => void;
}

function getStatusStyle(todo: Todo) {
  const bucket = classifyTodoDate(todo.due_date);
  const done = todo.is_completed;

  // 颜色：同一分组只在“完成/未完成”用深浅区分，避免跨分组串色
  if (bucket === "expired") {
    return done
      ? { bg: "bg-red-200", border: "border-red-400", text: "text-red-900" }
      : { bg: "bg-red-100", border: "border-red-300", text: "text-red-900" };
  }
  if (bucket === "week") {
    return done
      ? {
          bg: "bg-emerald-200",
          border: "border-emerald-400",
          text: "text-emerald-900",
        }
      : {
          bg: "bg-emerald-100",
          border: "border-emerald-300",
          text: "text-emerald-900",
        };
  }
  // future
  return done
    ? { bg: "bg-sky-200", border: "border-sky-400", text: "text-sky-900" }
    : { bg: "bg-sky-100", border: "border-sky-300", text: "text-sky-900" };
}

export function TodoCard({ todo, onToggleComplete, onDelete }: TodoCardProps) {
  const style = getStatusStyle(todo);

  return (
    <li
      className={cn(
        "p-4 rounded-2xl border transition hover:brightness-90 flex justify-between gap-4",
        style.bg,
        style.border,
        style.text
      )}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.is_completed}
            onChange={() => onToggleComplete(todo.id, todo.is_completed)}
            className="h-5 w-5 text-purple-500 border-gray-300 rounded transition-transform duration-150 ease-in-out hover:scale-105 focus:scale-110"
          />
          <span
            className={cn(
              "text-base sm:text-lg font-medium",
              todo.is_completed && "line-through"
            )}
          >
            {todo.title}
          </span>
        </div>

        {todo.description && <p className="text-sm">{todo.description}</p>}
        {todo.due_date && (
          <div className="text-xs opacity-70">📅 Due: {todo.due_date}</div>
        )}
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-sm font-medium hover:underline self-start"
      >
        Delete
      </button>
    </li>
  );
}
