"use client";

import { useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
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
  const titleInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [todo, setTodo] = useState<TodoDraft>({
    title: "", //初始值
    description: "", //初始值
    due_date: getDefaultDueDate(), //初始值
  });

  const showEmptyTitleWarning = () => {
    toast.warning("无法添加 Todo", {
      description: "请先输入 Todo 标题。",
    });
    titleInputRef.current?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submittingRef.current) return;
    if (!todo.title.trim()) {
      showEmptyTitleWarning();
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);

    try {
      await onSubmit(todo);
      setTodo({ title: "", description: "", due_date: getDefaultDueDate() });
      toast.success("Todo 已添加");
    } catch (error) {
      console.error("Error while adding todo:", error);
      toast.error("添加 Todo 失败", {
        description:
          error instanceof Error ? error.message : "请稍后重试。",
      });
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-14 max-w-xl mx-auto space-y-4 border-t pt-8"
    >
      <input
        ref={titleInputRef}
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
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Adding..." : "Add Todo"}
      </button>
    </form>
  );
}
