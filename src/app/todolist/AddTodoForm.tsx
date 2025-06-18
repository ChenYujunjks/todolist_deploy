"use client";

import { useState } from "react";
import { DueDatePicker } from "@/components/DatePicker";
import type { Todo } from "@/types/Todo";

interface AddTodoFormProps {
  onSubmit: (todo: {
    title: string;
    description: string;
    due_date?: string;
  }) => Promise<void>;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    due_date: undefined as string | undefined,
  });

  const handleSubmit = async () => {
    if (newTodo.title.trim()) {
      await onSubmit(newTodo);
      setNewTodo({ title: "", description: "", due_date: undefined });
    }
  };

  return (
    <div className="mt-14 max-w-xl mx-auto space-y-4 border-t pt-8">
      {/* ➕ 添加任务区域 */}
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
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        Add Todo
      </button>
    </div>
  );
};
