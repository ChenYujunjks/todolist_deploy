import { trpc } from "@/Components/trpc/Provider";
import { useState } from "react";

const TodoListPage = () => {
  const todosQuery = trpc.getTodos.useQuery();
  const addTodoMutation = trpc.addTodo.useMutation();
  const updateTodoMutation = trpc.updateTodo.useMutation();
  const deleteTodoMutation = trpc.deleteTodo.useMutation();

  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleAddTodo = async () => {
    if (newTodo.title.trim()) {
      await addTodoMutation.mutateAsync(newTodo);
      setNewTodo({ title: "", description: "" });
      todosQuery.refetch();
    }
  };

  const handleToggleComplete = async (id: number, is_completed: boolean) => {
    await updateTodoMutation.mutateAsync({ id, is_completed: !is_completed });
    todosQuery.refetch();
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
    todosQuery.refetch();
  };

  if (todosQuery.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todosQuery.data?.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.is_completed}
              onChange={() => handleToggleComplete(todo.id, todo.is_completed)}
            />
            <span>{todo.title}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Todo title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <textarea
          placeholder="Todo description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoListPage;
