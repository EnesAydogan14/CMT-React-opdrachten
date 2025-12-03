import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">
        Nieuwe To-Do:
      </label>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Typ een taak..."
        className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring focus:ring-blue-300"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
      >
        Toevoegen
      </button>
    </form>
  );
}

export default TodoForm;