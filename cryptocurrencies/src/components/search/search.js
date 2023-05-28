import { useContext, useState } from "react";
import classes from "./search.module.css";
import CurrenciesContext from "../../store/currencies-context";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const currencies = useContext(CurrenciesContext);
  const [matches, setMatches] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [searchParams, setSearcParams] = useSearchParams({});

  const changeHandler = (e) => {
    let currentMatches = [];
    const text = e.target.value;
    const regEx = new RegExp(`${text}`, "gi");

    if (text.trim() !== "") {
      currentMatches = currencies.filter((currency) =>
        currency.name.match(regEx)
      );
      setMatches(currentMatches);
    } else {
      setMatches([]);
    }
    setCurrentText(text);
  };

  const chooseHandler = (match) => {
    setCurrentText(match);
    setMatches([]);
  };

  const blurHandler = () => {
    setMatches([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const searchData = event.target[0].value;
    if (searchData.trim() !== "") {
      setSearcParams({ crypto: searchData });
    }
  };
  return (
    <section className={classes.search}>
      <form onSubmit={submitHandler} className={classes["search-form"]}>
        <div className={classes["input-block"]}>
          <input
            onChange={changeHandler}
            name="crypto"
            placeholder="Search..."
            value={currentText}
            onBlur={() => {
              setTimeout(() => {
                blurHandler();
              }, 150);
            }}
          ></input>
          {matches.length > 0 && (
            <ul className={classes.matches}>
              {matches.map((match) => (
                <li
                  onClick={() => {
                    chooseHandler(match.name);
                  }}
                >
                  {match.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className={classes["src-btn"]}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </section>
  );
};

export default Search;
