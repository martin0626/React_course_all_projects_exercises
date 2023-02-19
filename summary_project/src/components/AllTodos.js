const AllTodos = (params) => {
  const todos = params.todos;
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.key}>
            {todo.text} - {todo.isDone ? "Yes" : "No"}
          </li>
        );
      })}
    </ul>
  );
};

export default AllTodos;
