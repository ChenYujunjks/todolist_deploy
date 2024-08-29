"use client"
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
        try {
            const result = await updateTodoMutation.mutateAsync({ id, is_completed: !is_completed });
            console.log("Update result:", result);
            todosQuery.refetch();  // 成功后重新获取数据
        } catch (error) {
            console.error("Error during update:", error);
        }
    };

    const handleDeleteTodo = async (id: number) => {
        await deleteTodoMutation.mutateAsync(id);
        todosQuery.refetch();
    };

    if (todosQuery.isLoading) return <div className="text-center mt-8">Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Todo List</h1>
            <ul className="space-y-4">
                {todosQuery.data?.map((todo) => (
                    <li
                        key={todo.id}
                        className={`flex items-center justify-between p-4 bg-white shadow rounded-lg ${todo.is_completed ? "opacity-50" : ""
                            }`}
                    >
                        <div className="flex items-center space-x-4">
                            <input
                                type="checkbox"
                                checked={todo.is_completed}
                                onChange={() => handleToggleComplete(todo.id, todo.is_completed)}
                                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <span className={`text-lg ${todo.is_completed ? "line-through" : ""}`}>
                                {todo.title}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="text-red-600 hover:text-red-800"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-8">
                <input
                    type="text"
                    placeholder="Todo title"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                    className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                />
                <textarea
                    placeholder="Todo description"
                    value={newTodo.description}
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                    className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                />
                <button
                    onClick={handleAddTodo}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
};

export default TodoListPage;
