import { useState } from "react";
import "./Form.css";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  let [username, setUsername] = useState("");
  let [age, setAge] = useState("");
  let [error, setError] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Error",
        content: "Please fill all fields",
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: "Greater Than",
        content: "Age must be greater than 0",
      });
      return;
    }

    let user = {
      key: Math.random(),
      username: username,
      age: age,
    };

    setUsername("");
    setAge("");
    props.addUser(user);
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
            <input onChange={usernameHandler} value={username}></input>
          </div>
          <div className="input-obj">
            <label>Age (Years)</label>
            <input type="number" onChange={ageHandler} value={age}></input>
          </div>
          <button>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
