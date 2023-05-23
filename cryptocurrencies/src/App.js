import "./App.css";
import Currencies from "./components/currency/currencies";
import Search from "./components/search/search";

function App() {
  return (
    <div className="App">
      <Search />
      <Currencies />
    </div>
  );
}

export default App;
