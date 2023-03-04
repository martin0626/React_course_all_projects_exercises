import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import NotificationElement from "../components/Ui/Notification";
import { importantActions } from "../store/important";
import { todosAction } from "../store/todos";
import { uiActions } from "../store/ui-slice";

const RootLayout = () => {
  const notification = useSelector((state) => state.ui.notification);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Todos.json"
      );
      let data = await req.json();
      let newTodos = [];

      if (data) {
        Object.values(data).forEach((element) => {
          newTodos.push(element);
        });
      }

      dispatch(todosAction.setAllTodos(newTodos));
    };

    getData();
  }, []);

  setTimeout(() => {
    dispatch(uiActions.hideNotification());
  }, "5000");

  return (
    <Fragment>
      <MainNav />
      {notification && <NotificationElement notification={notification} />}
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
