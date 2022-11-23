import classes from "./ErrorModal.module.css";
import Card from "./Card";

const ErrorModal = (props) => {
  const errorCLoser = () => {
    props.onConfirm();
  };

  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={errorCLoser} className={classes.button}>
            Accept
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
