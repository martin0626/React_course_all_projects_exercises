import classes from "./Input.module.css";

const InputField = (props) => {
  const inputHandler = () => {
    props.setCount(2);
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input onChange={inputHandler} {...props.input} />
    </div>
  );
};

export default InputField;
