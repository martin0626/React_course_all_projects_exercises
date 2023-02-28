import { useDispatch } from "react-redux";
import classes from "./Notification.module.css";

const NotificationElement = (props) => {
  const notification = props.notification;
  let classNotification = "";

  if (notification.status === "success") {
    classNotification = `${classes.container} ${classes.success}`;
  }
  if (notification.status === "alert") {
    classNotification = `${classes.container} ${classes.alert}`;
  }
  if (notification.status === "pending") {
    classNotification = `${classes.container} ${classes.pending}`;
  }

  return (
    <div className={classNotification}>
      <h3>
        {props.notification.title}: {props.notification.message}
      </h3>
    </div>
  );
};

export default NotificationElement;
