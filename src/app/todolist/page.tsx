"use client";

import { useState } from "react";
import { trpc } from "@/components/trpc/Provider";
import { DueDatePicker } from "@/components/DatePicker";
import { TodoCard } from "@/components/TodoCard"; // 路径根据你实际放置的位置调整
import { useCategorizedTodos } from "@/hooks/useCategorizedTodos";
import type { Todo } from "@/types/Todo";

const TodoListPage = () => {
  const todosQuery = trpc.todo.getTodos.useQuery();
  const addTodoMutation = trpc.todo.addTodo.useMutation();
  const updateTodoMutation = trpc.todo.updateTodo.useMutation();
  const deleteTodoMutation = trpc.todo.deleteTodo.useMutation();

  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    due_date: undefined as string | undefined,
  });

  const handleAddTodo = async () => {
    if (newTodo.title.trim()) {
      await addTodoMutation.mutateAsync(newTodo);
      setNewTodo({ title: "", description: "", due_date: undefined }); // ✅ 清空所有字段
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

  const { expired, upcoming, future, completed } = useCategorizedTodos(
    todosQuery.data || []
  );
  const sections = [
    { title: "⏳ 已过期", data: expired },
    { title: "📆 一周内", data: upcoming },
    { title: "📅 七天以后", data: future },
    { title: "✅ 已完成", data: completed },
  ];

  if (todosQuery.isLoading) {
    return (
      <div className="text-center mt-10 text-muted-foreground">Loading...</div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        📝 Todo List
      </h1>

      {/* 🧾 分类展示 */}
      {sections.map((section) =>
        section.data.length > 0 ? (
          <div key={section.title} className="mt-10">
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <ul className="space-y-4">
              {section.data.map((todo) => (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </ul>
          </div>
        ) : null
      )}

      {/* ➕ 添加任务区域 */}
      <div className="mt-14 space-y-4 border-t pt-8">
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

        <DueDatePicker
          value={newTodo.due_date}
          onChange={(date) => setNewTodo({ ...newTodo, due_date: date })}
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
