import react, { Fragment } from "react";
import classes from "./MainHeader.module.css";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton";

const HeaderComponent = (props) => {
  return (
    <Fragment>
      <header className={classes["header"]}>
        <h1>ReactMeals</h1>
        <CartButton cartHandler={props.cartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals"></img>
      </div>
    </Fragment>
  );
};

export default HeaderComponent;
