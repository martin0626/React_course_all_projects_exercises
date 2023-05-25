import { useContext, useEffect, useState } from "react";
import SingleCurrency from "./singleCurrency";
import classes from "./currencies.module.css";
import CurrenciesContext from "../../store/currencies-context";

const Currencies = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const searchedName = searchParams.get("crypto") || "";
  const [currencies, setCurrencies] = useState(useContext(CurrenciesContext));

  useEffect(() => {
    if (searchedName.length > 0) {
      let filteredCurrencies = currencies.filter((currency) => {
        const regex = new RegExp(`${searchedName}`, "gi");
        return currency.name.match(regex);
      });

      setCurrencies(filteredCurrencies);
      console.log(filteredCurrencies);
    }
  }, [searchedName]);

  return (
    <section className={classes["all-currencies"]}>
      {currencies.length === 0 && (
        <div>
          <h1 className={classes["not-found"]}>No Currency Found</h1>
          <h2>With Name: {searchedName}</h2>
        </div>
      )}
      {currencies.map((currency) => (
        <SingleCurrency key={currency.id} currency={currency} />
      ))}
    </section>
  );
};

export default Currencies;
