import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  let meals = props.meals.map((meal) => {
    return (
      <li className={classes.meal}>
        <div>
          <h3>{meal.name}</h3>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{meal.price}</div>
        </div>
        <div>
          <MealItemForm addMealHandler={props.addMealHandler} id={meal.id} />
        </div>
      </li>
    );
  });

  return meals;
};

export default MealItem;
