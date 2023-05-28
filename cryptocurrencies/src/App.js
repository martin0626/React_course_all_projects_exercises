import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Currencies from "./components/currency/currencies";
import Search from "./components/search/search";
import CurrenciesContext from "./store/currencies-context";
import Loading from "./components/ui/loading";
import { CSSTransition } from "react-transition-group";
import ShowAll from "./components/actions/showAll";
import FilterCurrencies from "./components/actions/filterCurrencies";

function App() {
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
    fetchCrypto();
    setTimeout(() => fetchCrypto(), 1500);
  }, []);

  return (
    <div className="App">
      <div className="action-section">
        <ShowAll />
        <FilterCurrencies />
      </div>
      <CurrenciesContext.Provider value={currencies}>
        {isLoading ? (
          <Loading />
        ) : (
          <Fragment>
            <CSSTransition
              in={true}
              timeout={1000}
              appear={true}
              classNames={"show"}
            >
              <Search />
            </CSSTransition>
            <Currencies />
          </Fragment>
        )}
      </CurrenciesContext.Provider>
    </div>
  );
}

export default App;
