import classes from "./loading.module.css";

const Loading = () => {
  return (
    <div className={classes["lds-facebook"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
