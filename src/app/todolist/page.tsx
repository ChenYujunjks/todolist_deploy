"use client";
import { trpc } from "@/components/trpc/Provider";
import { useState } from "react";

const TodoListPage = () => {
  const todosQuery = trpc.getTodos.useQuery();
  const addTodoMutation = trpc.addTodo.useMutation();
  const updateTodoMutation = trpc.updateTodo.useMutation();
  const deleteTodoMutation = trpc.deleteTodo.useMutation();

  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleAddTodo = async () => {
    if (newTodo.title.trim()) {
      await addTodoMutation.mutateAsync(newTodo);
      setNewTodo({ title: "", description: "" });
      todosQuery.refetch();
    }
  };

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

  const handleDeleteTodo = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
    todosQuery.refetch();
  };

  if (todosQuery.isLoading)
    return (
      <div className="text-center mt-10 text-muted-foreground">Loading...</div>
    );

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        📝 Todo List
      </h1>

      <ul className="space-y-4">
        {todosQuery.data?.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between gap-4 p-4 rounded-2xl transition
                  bg-purple-700 text-white hover:bg-purple-200 hover:text-black
                  ${todo.is_completed ? "opacity-50" : ""}`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.is_completed}
                onChange={() =>
                  handleToggleComplete(todo.id, todo.is_completed)
                }
                className="h-5 w-5 text-purple-300 border-gray-300 rounded"
              />
              <span
                className={`text-base sm:text-lg ${
                  todo.is_completed ? "line-through" : ""
                }`}
              >
                {todo.title}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-sm font-medium hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10 space-y-4">
        <input
          type="text"
          placeholder="Todo title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="w-full px-4 py-3 border border-[--color-card-border] rounded-xl bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand]"
        />
        <textarea
          placeholder="Todo description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-[--color-card-border] rounded-xl bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand]"
        />
        <button
          onClick={handleAddTodo}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoListPage;
