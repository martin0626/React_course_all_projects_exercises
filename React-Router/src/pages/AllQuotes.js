import QuoteList from "../components/quotes/QuoteList";

let DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Martin",
    text: "React is Fun",
  },
  {
    id: "q2",
    author: "Martin",
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
