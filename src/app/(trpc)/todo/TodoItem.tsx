import { cn } from "@/lib/utils";
import type { Todo } from "@/lib/types/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number, is_completed: boolean) => void;
}

export function TodoItem({ todo, onToggleComplete }: TodoItemProps) {
  return (
    <button
      type="button"
      onClick={() => onToggleComplete(todo.id, todo.is_completed)}
      className={cn(
        "w-full text-left px-3 py-2 rounded-md border border-[--color-card-border]",
        "bg-[--color-card] text-[--color-foreground]",
        "transition-colors cursor-default",
        "hover:bg-[--color-muted] hover:cursor-pointer",
        todo.is_completed && "line-through text-[--color-muted-foreground]"
      )}
    >
      <span className="text-sm">{todo.title}</span>
      {todo.description && (
        <p className="text-xs text-[--color-muted-foreground] mt-0.5 line-clamp-2">
          {todo.description}
        </p>
      )}
    </button>
  );
}
