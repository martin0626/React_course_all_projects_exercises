import "./Users.css";

const UsersItems = (props) => {
  let deleteHandler = (key) => {
    props.DeleteUser(key);
  };

  if (props.UsersList.length === 0) {
    return <h1>No Users Yet</h1>;
  }

  return props.UsersList.map((user) => {
    return (
      <div className="user-container">
        <div className="user-content">
          <li>
            {user.username} ({user.age} years old)
          </li>
          <a onClick={() => deleteHandler(user.key)}>Delete</a>
        </div>
      </div>
    );
  });
};

export default UsersItems;
