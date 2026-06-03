"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { trpc } from "@/components/api/trpc/Provider";
import { DueDatePicker } from "@/components/ui/datepicker";
import { useCategorizedTodos } from "@/hooks/useCategorizedTodos";
import type { Todo, TodoDraft } from "@/lib/types/Todo";
import { cn } from "@/lib/utils";

type TodoSection = {
  title: string;
  todos: Todo[];
};

function TodoRow({
  todo,
  onToggleComplete,
}: {
  todo: Todo;
  onToggleComplete: (id: number, isCompleted: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggleComplete(todo.id, todo.is_completed)}
      className={cn(
        "group block w-full rounded-md border border-[--color-card-border] bg-[--color-card] px-3 py-2 text-left",
        "transition-colors hover:bg-[--color-muted] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]",
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
      {todo.description && (
        <span className="mt-1 block text-xs leading-5 text-[--color-muted-foreground] line-clamp-2">
          {todo.description}
        </span>
      )}
    </button>
  );
}

function TodoCard({
  title,
  todos,
  onToggleComplete,
}: {
  title: string;
  todos: Todo[];
  onToggleComplete: (id: number, isCompleted: boolean) => void;
}) {
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

function AddTodoPanel({ onSubmit }: { onSubmit: (todo: TodoDraft) => void }) {
  const [todo, setTodo] = useState<TodoDraft>({
    title: "",
    description: "",
    due_date: undefined,
  });

  const handleSubmit = () => {
    if (!todo.title.trim()) return;

    onSubmit({
      title: todo.title.trim(),
      description: todo.description?.trim(),
      due_date: todo.due_date,
    });
    setTodo({ title: "", description: "", due_date: undefined });
  };

  return (
    <section className="rounded-lg border border-[--color-card-border] bg-[--color-card] p-4">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
        <input
          type="text"
          placeholder="Todo title"
          value={todo.title}
          onChange={(event) =>
            setTodo((current) => ({ ...current, title: event.target.value }))
          }
          className="h-10 rounded-md border border-[--color-card-border] bg-[--color-card] px-3 text-sm text-[--color-foreground] outline-none focus:ring-2 focus:ring-[--color-ring]"
        />
        <DueDatePicker
          value={todo.due_date}
          onChange={(dueDate) =>
            setTodo((current) => ({ ...current, due_date: dueDate }))
          }
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[--color-card-border] bg-[--color-card] px-4 text-sm font-medium text-[--color-foreground] transition-colors hover:bg-[--color-muted] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>

      <textarea
        placeholder="Description"
        value={todo.description}
        onChange={(event) =>
          setTodo((current) => ({
            ...current,
            description: event.target.value,
          }))
        }
        className="mt-3 min-h-20 w-full resize-y rounded-md border border-[--color-card-border] bg-[--color-card] px-3 py-2 text-sm text-[--color-foreground] outline-none focus:ring-2 focus:ring-[--color-ring]"
      />
    </section>
  );
}

export default function Todo21Page() {
  const todosQuery = trpc.todo.getTodos.useQuery();
  const addTodoMutation = trpc.todo.addTodo.useMutation();
  const updateTodoMutation = trpc.todo.updateTodo.useMutation();

  const { expired, week, future } = useCategorizedTodos(todosQuery.data || []);

  const completed = useMemo(
    () => [...expired.completed, ...week.completed, ...future.completed],
    [expired.completed, future.completed, week.completed]
  );

  const sections: TodoSection[] = [
    { title: "近七天", todos: week.pending },
    { title: "七天之后", todos: future.pending },
    { title: "过去的", todos: expired.pending },
  ];

  const handleToggleComplete = async (id: number, isCompleted: boolean) => {
    await updateTodoMutation.mutateAsync({
      id,
      is_completed: !isCompleted,
    });
    todosQuery.refetch();
  };

  const handleAddTodo = async (todo: TodoDraft) => {
    await addTodoMutation.mutateAsync(todo);
    todosQuery.refetch();
  };

  if (todosQuery.isLoading) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 text-center text-sm text-[--color-muted-foreground]">
        Loading...
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-[--color-foreground]">
          Todo
        </h1>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <TodoCard
            key={section.title}
            title={section.title}
            todos={section.todos}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>

      <div className="mt-4">
        <TodoCard
          title="Completed"
          todos={completed}
          onToggleComplete={handleToggleComplete}
        />
      </div>

      <div className="mt-4">
        <AddTodoPanel onSubmit={handleAddTodo} />
      </div>
    </main>
  );
}
