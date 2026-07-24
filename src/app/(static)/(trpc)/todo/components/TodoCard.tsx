import type { Todo } from "@/lib/types/Todo";
import { TodoRow } from "./TodoRow";

type TodoCardProps = {
  title: string;
  todos: Todo[];
  onToggleComplete: (id: number, isCompleted: boolean) => void;
};

export function TodoCard({
  title,
  todos,
  onToggleComplete,
}: TodoCardProps) {
  return (
    <section className="rounded-lg border border-[--color-card-border] bg-[--color-card] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium text-[--color-foreground]">
          {title}
        </h2>
        <span className="text-xs text-[--color-muted-foreground]">
          {todos.length}
        </span>
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="rounded-md border border-dashed border-[--color-card-border] px-3 py-6 text-center text-xs text-[--color-muted-foreground]">
            暂无
          </p>
        ) : (
          todos.map((todo) => (
            <TodoRow
              key={todo.id}
              todo={todo}
              onToggleComplete={onToggleComplete}
            />
          ))
        )}
      </div>
    </section>
  );
}
