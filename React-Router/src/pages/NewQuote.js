import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  let history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  let quotesHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return <QuoteForm onAddQuote={quotesHandler} />;
};

export default NewQuote;
