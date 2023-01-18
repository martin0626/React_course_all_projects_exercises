import { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  let quoteId = useParams().quoteId;
  const {
    sendRequest,
    data: commentText,
    error,
    status,
  } = useHttp(addComment, true);

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      quoteId: quoteId,
      commentData: { text: commentTextRef.current.value },
    });
    // optional: Could validate here
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      props.onAddedComment();
    }
  }, [status, error, props.onAddedComment]);

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control} onSubmit={submitFormHandler}>
          <label htmlFor="comment">Your Comment</label>
          <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Comment</button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewCommentForm;
