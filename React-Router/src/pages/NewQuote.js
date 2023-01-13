import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  let quotesHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={quotesHandler} />;
};

export default NewQuote;
