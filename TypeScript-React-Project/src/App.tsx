import Todo from "./components/Todo";
import TodoClass from "./models/todo";

function App() {
  let todos = [new TodoClass("First Element"), new TodoClass("Second Element")];
  return (
    <div>
      <Todo todos={todos}></Todo>
    </div>
  );
}

export default App;
