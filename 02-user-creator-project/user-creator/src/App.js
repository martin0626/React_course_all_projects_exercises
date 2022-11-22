import logo from "./logo.svg";
import "./App.css";
import UserForm from "./Components/UserForm/Form";
import { useState } from "react";
import UsersItems from "./Components/Users";

let usersList = [{ key: 1, username: "Ivan", age: 22 }];

function App() {
  let [users, setUsers] = useState(usersList);

  const newUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
      console.log(users);
    });
  };

  const deleteHandler = (key) => {
    setUsers((prevUsers) => {
      let newUsers = prevUsers.filter((user) => user.key != key);
      return newUsers;
    });
  };

  return (
    <div className="App">
      <UserForm addUser={newUserHandler} />
      <UsersItems UsersList={users} DeleteUser={deleteHandler} />
    </div>
  );
}

export default App;
