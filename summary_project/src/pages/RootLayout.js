import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import NotificationElement from "../components/Ui/Notification";
import { uiActions } from "../store/ui-slice";

const RootLayout = () => {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(uiActions.hideNotification());
  }, "6000");

  return (
    <Fragment>
      <MainNav />
      {notification && <NotificationElement notification={notification} />}
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
