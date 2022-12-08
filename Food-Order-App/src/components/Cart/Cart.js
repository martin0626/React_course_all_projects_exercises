import MealItem from "../Meals/MealItems/MealItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

let CART_ITEMS = [
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
];

let Cart = (props) => {
  return (
    <Modal>
      <ul>
        <MealItem meals={CART_ITEMS} />
      </ul>
      <div className={classes.actions}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
