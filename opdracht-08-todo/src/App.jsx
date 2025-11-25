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
    <main>
      <h1>Mijn To-Do lijst</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;