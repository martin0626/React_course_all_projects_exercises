import { Fragment, useContext, useEffect, useState } from "react";
import SingleCurrency from "./singleCurrency";
import classes from "./currencies.module.css";
import CurrenciesContext from "../../store/currencies-context";
import { useSearchParams } from "react-router-dom";
import Loading from "../ui/loading";
import { CSSTransition } from "react-transition-group";

const Currencies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedName = searchParams.get("crypto") || "";
  const allCurrencies = useContext(CurrenciesContext);
  const [currencies, setCurrencies] = useState(allCurrencies);
  const [isLoading, setIsLoading] = useState(false);

  console.log(searchedName.length);
  useEffect(() => {
    setIsLoading(true);
    if (searchedName.length !== 0) {
      let filteredCurrencies = allCurrencies.filter((currency) => {
        const regex = new RegExp(`${searchedName}`, "gi");
        return currency.name.match(regex);
      });

      setCurrencies(filteredCurrencies);
    } else {
      setCurrencies(allCurrencies);
    }

    setTimeout(() => setIsLoading(false), 500);
  }, [searchedName]);

  return (
    <section className={classes["all-currencies"]}>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          {currencies.length === 0 && (
            <div>
              <h1 className={classes["not-found"]}>No Currency Found</h1>
              <h2>With Name: {searchedName}</h2>
            </div>
          )}
          {currencies.map((currency) => (
            <CSSTransition
              in={true}
              timeout={1000}
              appear={true}
              classNames={"show"}
            >
              <SingleCurrency key={currency.id} currency={currency} />
            </CSSTransition>
          ))}
        </Fragment>
      )}
    </section>
  );
};

export default Currencies;
