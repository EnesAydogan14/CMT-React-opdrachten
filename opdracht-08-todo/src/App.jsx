import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(text) {
    const trimmed = text.trim();
    if (trimmed === "") return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <section className="w-full max-w-sm bg-white border rounded-xl shadow-md p-6">
   
        <h1 className="text-3xl font-bold mb-4 text-center">
          Mijn To-Do lijst
        </h1>
\
        <TodoForm onAddTodo={handleAddTodo} />

        <TodoList todos={todos} />
      </section>
    </main>
  );
}

export default App;