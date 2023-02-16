import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // let todos = [new TodoClass("First Element"), new TodoClass("Second Element")];
  // const [todos, setTodo] = useState<TodoClass[]>([]);

  // const onAddTodo = (todo: string) => {
  //   let newTodo = new TodoClass(todo);
  //   setTodo((prevTodosState) => {
  //     return prevTodosState?.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoText: string) => {
  //   setTodo((prevTodosState) => {
  //     return prevTodosState.filter((todo) => todo.text !== todoText);
  //   });
  // };
  return (
    <TodosContextProvider>
      <NewTodo></NewTodo>
      <Todo></Todo>
    </TodosContextProvider>
  );
}

export default App;
