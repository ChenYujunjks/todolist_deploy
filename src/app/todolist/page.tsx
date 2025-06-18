"use client";

import { trpc } from "@/components/trpc/Provider";
import { TodoCard } from "@/components/TodoCard";
import { useCategorizedTodos } from "@/hooks/useCategorizedTodos";
import { AddTodoForm } from "./AddTodoForm";

const TodoListPage = () => {
  const todosQuery = trpc.todo.getTodos.useQuery();
  const addTodoMutation = trpc.todo.addTodo.useMutation();
  const updateTodoMutation = trpc.todo.updateTodo.useMutation();
  const deleteTodoMutation = trpc.todo.deleteTodo.useMutation();

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
    <div className="	max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        📝 Todo List
      </h1>

      {/* 🧾 分类展示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections
          .filter((section) =>
            ["⏳ 已过期", "📆 一周内", "📅 七天以后"].includes(section.title)
          )
          .map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold mb-3">{section.title}</h2>
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
          ))}
      </div>

      {/* ➕ 添加任务区域 */}
      <AddTodoForm
        onSubmit={async (todo) => {
          await addTodoMutation.mutateAsync(todo); // 使用 tRPC 的 addTodo mutation
          todosQuery.refetch(); // 添加完之后刷新列表
        }}
      />
    </div>
  );
};
export default TodoListPage;
