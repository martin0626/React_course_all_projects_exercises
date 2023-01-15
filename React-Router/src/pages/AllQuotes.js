import QuoteList from "../components/quotes/QuoteList";

let DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Martinaa",
    text: "React is Fun",
  },
  {
    id: "a2",
    author: "Martincho",
    text: "React is Fun",
  },
  {
    id: "q3",
    author: "Martin",
    text: "React is Fun",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
