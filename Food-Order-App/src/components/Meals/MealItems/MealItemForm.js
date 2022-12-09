import { useState } from "react";
import InputField from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [countMeals, setCountMeals] = useState(0);

  let submitHandler = (e) => {
    e.preventDefault();
    props.addMealHandler(props.id, countMeals);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <InputField
        setCount={setCountMeals}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
