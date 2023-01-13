import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

let DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Martin",
    text: "React is Fun",
  },
  {
    id: "q2",
    author: "Martin",
    text: "Diff Check",
  },
  {
    id: "q3",
    author: "Martin",
    text: "React is Fun",
  },
];

const QuoteDetail = () => {
  let quotesId = useParams().quoteId;

  let quote = DUMMY_QUOTES.find((quote) => quote.id === quotesId);

  if (!quote) {
    return;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quotesId}/comment`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
