import { cn } from "@/lib/utils";
import type { Todo } from "@/types/Todo";

interface TodoCardProps {
  todo: Todo;
  onToggleComplete: (id: number, is_completed: boolean) => void;
  onDelete: (id: number) => void;
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

// 提取分类逻辑
function getStatusStyle(todo: Todo) {
  const today = new Date();
  const due = todo.due_date ? new Date(todo.due_date) : undefined;

  const diffDays = due
    ? Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    : null;

  // 🟣 如果完成，只用深色版本
  if (todo.is_completed) {
    if (!due || diffDays! > 7) {
      return {
        bg: "bg-sky-200",
        border: "border-sky-400",
        text: "text-sky-900",
      };
    } else if (diffDays! <= 7 && diffDays! >= 0) {
      return {
        bg: "bg-emerald-200",
        border: "border-emerald-400",
        text: "text-emerald-900",
      };
    } else {
      return {
        bg: "bg-red-200",
        border: "border-red-400",
        text: "text-red-900",
      };
    }
  }

  // 🟡 未完成分类
  if (!due || diffDays! > 7) {
    return {
      bg: "bg-sky-100",
      border: "border-sky-300",
      text: "text-sky-900",
    };
  } else if (diffDays! <= 7 && diffDays! >= 0) {
    return {
      bg: "bg-emerald-100",
      border: "border-emerald-300",
      text: "text-emerald-900",
    };
  } else {
    return {
      bg: "bg-red-100",
      border: "border-red-300",
      text: "text-red-900",
    };
  }
}
