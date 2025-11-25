function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p>Er zijn nog geen To-Do&apos;s.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;