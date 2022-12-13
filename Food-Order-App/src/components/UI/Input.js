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

// Alternative way with ref prop
// const Input = React.forwardRef((props, ref) => {
//   return (
//     <div className={classes.input}>
//       <label htmlFor={props.input.id}>{props.label}</label>
//       <input ref={ref} {...props.input} />
//     </div>
//   );
// });

export default InputField;
