"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { trpc } from "@/components/api/trpc/Provider";
import type { Todo } from "@/lib/types/Todo";
import { cn } from "@/lib/utils";
import { TodoCard } from "./components/TodoCard";

export default function Todo21Page() {
  const [showCompleted, setShowCompleted] = useState(false);
  const todosQuery = trpc.todo.getTodos.useQuery();
  const updateTodoMutation = trpc.todo.updateTodo.useMutation();
  const deleteTodoMutation = trpc.todo.deleteTodo.useMutation();

  const { pending, completed } = useMemo(() => {
    const todos = (todosQuery.data ?? []) as Todo[];
    return {
      pending: todos.filter((todo) => !todo.is_completed),
      completed: todos.filter((todo) => todo.is_completed),
    };
  }, [todosQuery.data]);

  const handleComplete = async (id: number) => {
    await updateTodoMutation.mutateAsync({
      id,
      is_completed: true,
    });
    await todosQuery.refetch();
  };

  const handleDelete = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
    await todosQuery.refetch();
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
      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[--color-muted-foreground]">
            Focus
          </p>
          <h1 className="text-2xl font-semibold text-[--color-foreground]">
            Todo
          </h1>
        </div>
        <span className="text-sm text-[--color-muted-foreground]">
          {pending.length} 项待完成
        </span>
      </header>

      <TodoCard
        title="全部任务"
        todos={pending}
        emptyMessage="所有任务都已完成"
        onComplete={handleComplete}
        onDelete={handleDelete}
        twoColumns
        showDueDate={false}
      />

      <section className="mt-5 overflow-hidden rounded-lg border border-[--color-card-border] bg-[--color-card]">
        <button
          type="button"
          aria-expanded={showCompleted}
          onClick={() => setShowCompleted((value) => !value)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[--color-muted] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[--color-ring]"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-[--color-foreground]">
            <CheckCircle2 className="h-4 w-4 text-[--color-muted-foreground]" />
            已完成
            <span className="font-normal text-[--color-muted-foreground]">
              {completed.length}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-[--color-muted-foreground] transition-transform",
              showCompleted && "rotate-180"
            )}
          />
        </button>

        {showCompleted && (
          <div className="border-t border-[--color-card-border] p-4">
            <TodoCard
              todos={completed}
              emptyMessage="暂无已完成任务"
              onComplete={handleComplete}
              onDelete={handleDelete}
              completed
              unframed
            />
          </div>
        )}
      </section>
    </main>
  );
}
