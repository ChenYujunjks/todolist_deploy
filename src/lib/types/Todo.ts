export interface Todo {
  id: number;
  title: string;
  description?: string;
  is_completed: boolean;
  due_date?: string; // 格式为 "YYYY-MM-DD"
}

export type TodoDraft = Pick<Todo, "title" | "description" | "due_date">;
