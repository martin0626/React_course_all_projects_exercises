import { useEffect, useState } from "react";
import classes from "./singleCurrency.module.css";

const SingleCurrency = (props) => {
  const currency = props.currency;
  const logo = `https://assets.coincap.io/assets/icons/${currency.symbol.toLowerCase()}@2x.png`;

  return (
    <div className={classes["currency-section"]}>
      <img className={classes.logo} src={logo} alt="logo-image" />
      <div className={classes.info}>
        <div className={classes["block"]}>
          <p className={classes.name}>{currency.name}</p>
          <p className={classes.symbol}>
            ( <b>{currency.symbol}</b> )
          </p>
        </div>
        <div className={classes.block}>
          <p>Price</p>
          <p className={classes.price}>
            {Number(currency.priceUsd).toFixed(2)}$
          </p>
        </div>
      </div>
      <a className={classes["info-button"]} href={currency.explorer}>
        More Info
      </a>
    </div>
  );
};

export default SingleCurrency;
