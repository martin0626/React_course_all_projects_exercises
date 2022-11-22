import { useState } from "react";
import "./Form.css";

const UserForm = (props) => {
  let [username, setUsername] = useState("");
  let [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let user = {
      key: Math.random(),
      username: username,
      age: age,
    };
    setUsername("");
    setAge("");
    props.addUser(user);
  };

  return (
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
  );
};

export default UserForm;
