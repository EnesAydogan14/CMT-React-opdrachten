function TodoList({ todos }) {
  if (todos.length === 0) {
    return (
      <p className="text-sm text-slate-500 mt-2">
        Er zijn nog geen To-Do's.
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="border-b last:border-b-0 pb-2 text-base text-slate-700"
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;