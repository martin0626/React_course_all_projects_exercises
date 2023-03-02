import { useDispatch } from "react-redux";
import { importantActions } from "../../store/important";
import { todosAction } from "../../store/todos";

const ImportantElement = (props) => {
  const todo = props.todo;
  const dispatch = useDispatch();
  const deleteFromImpHandler = () => {
    dispatch(todosAction.removeFromImportants(todo.id));
  };
  return (
    <div>
      <li key={todo.id}>{todo.text}</li>
      <button onClick={deleteFromImpHandler}>Delete</button>
    </div>
  );
};

export default ImportantElement;
