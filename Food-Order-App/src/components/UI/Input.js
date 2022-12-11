import classes from "./Input.module.css";

const InputField = (props) => {
  const inputHandler = (event) => {
    props.setCount(Number(event.target.value));
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input onChange={inputHandler} {...props.input} />
    </div>
  );
};

export default InputField;
