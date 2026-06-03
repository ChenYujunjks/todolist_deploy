"use client";

import { useState } from "react";
import { DueDatePicker } from "@/components/ui/datepicker";
import type { TodoDraft } from "@/lib/types/Todo";
import { addDays, format } from "date-fns";

interface AddTodoFormProps {
  onSubmit: (todo: TodoDraft) => Promise<void>;
}

function getDefaultDueDate() {
  return format(addDays(new Date(), 1), "yyyy-MM-dd");
}

export function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    due_date: getDefaultDueDate(),
  });

  const handleSubmit = async () => {
    if (todo.title.trim()) {
      await onSubmit(todo);
      setTodo({ title: "", description: "", due_date: getDefaultDueDate() });
    }
  };

  return (
    <div className="mt-14 max-w-xl mx-auto space-y-4 border-t pt-8">
      {/* ➕ 添加任务区域 */}
      <input
        type="text"
        placeholder="Todo title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        className="w-full px-4 py-3 border border-[--color-card-border] rounded-xl bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand]"
      />
      <textarea
        placeholder="Todo description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        className="w-full px-4 py-3 border border-[--color-card-border] rounded-xl bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand]"
      />
      <DueDatePicker
        value={todo.due_date}
        onChange={(date) => setTodo({ ...todo, due_date: date })}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        Add Todo
      </button>
    </div>
  );
}
