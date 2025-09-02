import type { Todo } from "@/lib/types/Todo";
import { useMemo } from "react";

export function useCategorizedTodos(todos: Todo[] = []) {
  return useMemo(() => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const expired: Todo[] = [];
    const expiredCompleted: Todo[] = [];
    const upcoming: Todo[] = [];
    const upcomingCompleted: Todo[] = [];
    const future: Todo[] = [];
    const futureCompleted: Todo[] = [];

    for (const todo of todos) {
      const due = todo.due_date ? new Date(todo.due_date) : undefined;

      if (!due) {
        if (todo.is_completed) futureCompleted.push(todo);
        else future.push(todo);
      } else if (due < today) {
        if (todo.is_completed) expiredCompleted.push(todo);
        else expired.push(todo);
      } else if (due <= nextWeek) {
        if (todo.is_completed) upcomingCompleted.push(todo);
        else upcoming.push(todo);
      } else {
        if (todo.is_completed) futureCompleted.push(todo);
        else future.push(todo);
      }
    }

    return {
      expired: { pending: expired, completed: expiredCompleted },
      upcoming: { pending: upcoming, completed: upcomingCompleted },
      future: { pending: future, completed: futureCompleted },
    };
  }, [todos]);
}
