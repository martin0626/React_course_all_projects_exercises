import { useState, useEffect } from "react";
import SingleCurrency from "./singleCurrency";
import classes from "./currencies.module.css";

const Currencies = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCrypto = async () => {
      const request = await fetch("https://api.coincap.io/v2/assets/");
      const response = await request.json();

      setCurrencies(response.data);
    };

    fetchCrypto();
  }, []);
  return (
    <section className={classes["all-currencies"]}>
      {currencies.map((currency) => (
        <SingleCurrency key={currency.id} currency={currency} />
      ))}
    </section>
  );
};

export default Currencies;
