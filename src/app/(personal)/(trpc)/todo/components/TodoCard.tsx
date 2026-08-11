import type { Todo } from "@/lib/types/Todo";
import { TodoRow } from "./TodoRow";

type TodoCardProps = {
  title?: string;
  todos: Todo[];
  emptyMessage: string;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  completed?: boolean;
  unframed?: boolean;
};

export function TodoCard({
  title,
  todos,
  emptyMessage,
  onComplete,
  onDelete,
  completed = false,
  unframed = false,
}: TodoCardProps) {
  return (
    <section
      className={
        unframed
          ? undefined
          : "rounded-lg border border-[--color-card-border] bg-[--color-card] p-4"
      }
    >
      {title && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-sm font-medium text-[--color-foreground]">
            {title}
          </h2>
          <span className="text-xs text-[--color-muted-foreground]">
            {todos.length}
          </span>
        </div>
      )}

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="rounded-md border border-dashed border-[--color-card-border] px-3 py-6 text-center text-xs text-[--color-muted-foreground]">
            {emptyMessage}
          </p>
        ) : (
          todos.map((todo) => (
            <TodoRow
              key={todo.id}
              todo={todo}
              onComplete={onComplete}
              onDelete={onDelete}
              completed={completed}
            />
          ))
        )}
      </div>
    </section>
  );
}
