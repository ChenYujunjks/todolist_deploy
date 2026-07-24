"use client";

import { useMemo } from "react";
import { trpc } from "@/components/api/trpc/Provider";
import { useCategorizedTodos } from "@/hooks/useCategorizedTodos";
import type { Todo, TodoDraft } from "@/lib/types/Todo";
import { AddTodoPanel } from "./components/AddTodoPanel";
import { TodoCard } from "./components/TodoCard";

type TodoSection = {
  title: string;
  todos: Todo[];
};

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
