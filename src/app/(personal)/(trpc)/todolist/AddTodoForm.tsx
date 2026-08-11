"use client";

import { useRef, useState } from "react";
import { DueDatePicker } from "@/components/ui/datepicker";
import type { TodoCreateInput, TodoDraft } from "@/lib/types/Todo";
import { addDays, format } from "date-fns";

interface AddTodoFormProps {
  onSubmit: (todo: TodoCreateInput) => Promise<void>;
}

function getDefaultDueDate() {
  return format(addDays(new Date(), 1), "yyyy-MM-dd");
}

export function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const submittingRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [todo, setTodo] = useState<TodoDraft>({
    title: "", //初始值
    description: "", //初始值
    due_date: getDefaultDueDate(), //初始值
  });

  const handleSubmit = async () => {
    if (submittingRef.current || !todo.title.trim()) return;

    submittingRef.current = true;
    setIsSubmitting(true);

    try {
      await onSubmit({ ...todo, request_id: crypto.randomUUID() });
      setTodo({ title: "", description: "", due_date: getDefaultDueDate() });
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-14 max-w-xl mx-auto space-y-4 border-t pt-8">
      <input
        type="text"
        placeholder="Todo title"
        value={todo.title}
        onChange={(e) =>
          setTodo((current) => ({ ...current, title: e.target.value }))
        }
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
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Adding..." : "Add Todo"}
      </button>
    </div>
  );
}
