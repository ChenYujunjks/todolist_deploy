import type { Todo } from "@/lib/types/Todo";
import { cn } from "@/lib/utils";

type TodoRowProps = {
  todo: Todo;
  onToggleComplete: (id: number, isCompleted: boolean) => void;
};

export function TodoRow({ todo, onToggleComplete }: TodoRowProps) {
  return (
    <button
      type="button"
      onClick={() => onToggleComplete(todo.id, todo.is_completed)}
      className={cn(
        "block w-full cursor-pointer rounded-md border border-[--color-card-border] bg-[--color-card] px-3 py-2 text-left",
        "transition-colors hover:border-[--color-ring] hover:bg-[--color-muted] hover:text-[--color-foreground]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]",
        todo.is_completed && "text-[--color-muted-foreground]"
      )}
    >
      <span
        className={cn(
          "block text-sm font-medium leading-5",
          todo.is_completed && "line-through"
        )}
      >
        {todo.title}
      </span>
    </button>
  );
}
