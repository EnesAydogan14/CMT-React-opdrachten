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
    <form onSubmit={handleSubmit}>
      <label>
        Nieuwe To-Do:{" "}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Typ een taak..."
        />
      </label>
      <button type="submit">Toevoegen</button>
    </form>
  );
}

export default TodoForm;