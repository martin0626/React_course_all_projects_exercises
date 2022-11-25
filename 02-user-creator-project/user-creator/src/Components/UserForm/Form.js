import { useRef, useState } from "react";
import "./Form.css";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  let [error, setError] = useState("");

  const submitHandler = (event) => {
    let enteredName = nameInputRef.current.value;
    let enteredAge = ageInputRef.current.value;

    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error",
        content: "Please fill all fields",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Greater Than",
        content: "Age must be greater than 0",
      });
      return;
    }

    let user = {
      key: Math.random(),
      username: enteredName,
      age: enteredAge,
    };

    props.addUser(user);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onConfirm={errorHandler}
        />
      )}

      <div className="form-element">
        <form className="form" onSubmit={submitHandler}>
          <div className="input-obj">
            <label>Username</label>
            <input ref={nameInputRef}></input>
          </div>
          <div className="input-obj">
            <label>Age (Years)</label>
            <input type="number" ref={ageInputRef}></input>
          </div>
          <button>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
