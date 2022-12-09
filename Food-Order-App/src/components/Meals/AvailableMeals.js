import { useReducer, useState } from "react";
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

const productsReducer = (state, action) => {
  if (!action.products.incudes(action.addedProduct)) {
    action.products.unshift(action.addedProduct);
  }

  return state;
};

const AvailableMeals = (props) => {
  const [addedProducts, dispatchAdddedProducts] = useReducer(productsReducer, {
    currentProduct: "",
    products: [],
  });

  let onAddProduct = (id, count) => {
    // TODO Add Products To addedProducts
    console.log(id, count);
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
