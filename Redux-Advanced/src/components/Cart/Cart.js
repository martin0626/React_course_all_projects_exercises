import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  let items = useSelector((state) => state.cart.items);

  let itemsList = items.map((item) => {
    return <CartItem item={item} />;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{itemsList}</ul>
    </Card>
  );
};

export default Cart;
