import { Fragment } from "react";
import Comments from "../comments/Comments";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <Fragment>
      <figure className={classes.quote}>
        <p>{props.text}</p>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Comments></Comments>
    </Fragment>
  );
};

export default HighlightedQuote;
