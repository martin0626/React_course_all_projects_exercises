import { useCallback, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = (props) => {
  const cartCtx = useContext(CartContext);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  let fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      let request = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/Meals.json"
      );

      let response = await request.json();

      let mealsItems = [];

      for (let key in response) {
        mealsItems.push({
          id: key,
          name: response[key].name,
          description: response[key].description,
          price: response[key].price,
        });
      }
      setMeals(mealsItems);
    } catch {
      return {};
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  let onAddProduct = (id, amount) => {
    let item = meals.find((el) => el.id === id);
    console.log(id);
    item.amount = amount;
    cartCtx.addItem(item);
  };

  return (
    <section className={classes.meals}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Card>
          <ul>
            <MealItem addMealHandler={onAddProduct} meals={meals} />
          </ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
