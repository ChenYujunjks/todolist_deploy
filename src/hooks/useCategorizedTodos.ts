import type { Todo } from "@/types/Todo";
import { useMemo } from "react";

export function useCategorizedTodos(todos: Todo[] = []) {
  return useMemo(() => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const expired: Todo[] = [];
    const upcoming: Todo[] = [];
    const future: Todo[] = [];
    const completed: Todo[] = [];

    for (const todo of todos) {
      if (todo.is_completed) {
        completed.push(todo);
      } else if (!todo.due_date) {
        future.push(todo);
      } else {
        const due = new Date(todo.due_date);
        if (due < today) expired.push(todo);
        else if (due <= nextWeek) upcoming.push(todo);
        else future.push(todo);
      }
    }

    return { expired, upcoming, future, completed };
  }, [todos]);
}
