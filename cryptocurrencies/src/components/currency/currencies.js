import { useState, useEffect } from "react";
import SingleCurrency from "./singleCurrency";
import classes from "./currencies.module.css";
import Loading from "../ui/loading";

const Currencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCrypto = async () => {
      const request = await fetch("https://api.coincap.io/v2/assets/");
      const response = await request.json();

      setCurrencies(response.data);
      setIsLoading(false);
    };
    setTimeout(() => fetchCrypto(), 1500);
  }, []);
  return (
    <section className={classes["all-currencies"]}>
      {isLoading ? (
        <Loading />
      ) : (
        currencies.map((currency) => (
          <SingleCurrency key={currency.id} currency={currency} />
        ))
      )}
    </section>
  );
};

export default Currencies;
