"use client";

import { useMemo } from "react";
import { trpc } from "@/components/api/trpc/Provider";
import { useCategorizedTodos } from "@/hooks/useCategorizedTodos";
import { AddTodoForm } from "../todolist/AddTodoForm";
import { TodoItem } from "./TodoItem";

const TodoPage = () => {
  const todosQuery = trpc.todo.getTodos.useQuery();
  const addTodoMutation = trpc.todo.addTodo.useMutation();
  const updateTodoMutation = trpc.todo.updateTodo.useMutation();

  const handleToggleComplete = async (id: number, is_completed: boolean) => {
    try {
      await updateTodoMutation.mutateAsync({
        id,
        is_completed: !is_completed,
      });
      todosQuery.refetch();
    } catch (error) {
      console.error("Error during update:", error);
    }
  };

  const { expired, week, future } = useCategorizedTodos(todosQuery.data || []);

  const completed = useMemo(
    () => [...expired.completed, ...week.completed, ...future.completed],
    [expired.completed, week.completed, future.completed]
  );

  const sections = [
    { title: "近七天", data: week.pending },
    { title: "七天之后", data: future.pending },
    { title: "过去的", data: expired.pending },
  ];

  if (todosQuery.isLoading) {
    return (
      <div className="text-center mt-10 text-[--color-muted-foreground]">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl font-medium mb-8 text-[--color-foreground]">
        Todo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {sections.map(({ title, data }) => (
          <div
            key={title}
            className="rounded-lg border border-[--color-card-border] bg-[--color-card] p-4"
          >
            <h2 className="text-sm font-medium text-[--color-muted-foreground] mb-3">
              {title}
            </h2>
            <ul className="space-y-2">
              {data.length === 0 ? (
                <li className="text-xs text-[--color-muted-foreground] py-2">
                  暂无
                </li>
              ) : (
                data.map((todo) => (
                  <li key={todo.id}>
                    <TodoItem
                      todo={todo}
                      onToggleComplete={handleToggleComplete}
                    />
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-[--color-card-border] bg-[--color-card] p-4 mb-8">
        <h2 className="text-sm font-medium text-[--color-muted-foreground] mb-3">
          Completed
        </h2>
        <ul className="space-y-2">
          {completed.length === 0 ? (
            <li className="text-xs text-[--color-muted-foreground] py-2">
              暂无
            </li>
          ) : (
            completed.map((todo) => (
              <li key={todo.id}>
                <TodoItem
                  todo={todo}
                  onToggleComplete={handleToggleComplete}
                />
              </li>
            ))
          )}
        </ul>
      </div>

      <AddTodoForm
        onSubmit={async (todo) => {
          await addTodoMutation.mutateAsync(todo);
          todosQuery.refetch();
        }}
      />
    </div>
  );
};

export default TodoPage;
