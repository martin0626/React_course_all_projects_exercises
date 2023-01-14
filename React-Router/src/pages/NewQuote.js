import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  let history = useHistory();
  let quotesHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={quotesHandler} />;
};

export default NewQuote;
