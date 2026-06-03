"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { DueDatePicker } from "@/components/ui/datepicker";
import type { TodoDraft } from "@/lib/types/Todo";

type AddTodoPanelProps = {
  onSubmit: (todo: TodoDraft) => void;
};

export function AddTodoPanel({ onSubmit }: AddTodoPanelProps) {
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
