import { useReducer, useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const cartCtx = useContext(CartContext);

  let onAddProduct = (id, count) => {
    let product = DUMMY_MEALS.find((el) => el.id === id);
    product.count = count;
    cartCtx.addItem(product);
    console.log(cartCtx.items);
  };

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          <MealItem addMealHandler={onAddProduct} meals={DUMMY_MEALS} />
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
