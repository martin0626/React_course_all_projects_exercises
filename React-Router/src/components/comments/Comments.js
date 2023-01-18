import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {
    sendRequest,
    error,
    data: commentsData,
    status,
  } = useHttp(getAllComments);
  const quoteId = useParams().quoteId;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === "pending") {
    comments = <LoadingSpinner className="centered" />;
  }

  if (status === "completed" && commentsData && commentsData.length > 0) {
    comments = <CommentsList comments={commentsData} />;
  }
  if (status === "completed" && (!commentsData || comments.length === 0)) {
    comments = <p className="centered">No comments were added yet!</p>;
  }
  return (
    <Fragment>
      <section className={classes.comments}>
        <h2>User Comments</h2>
        {!isAddingComment && (
          <button className="btn" onClick={startAddCommentHandler}>
            Add a Comment
          </button>
        )}
        {isAddingComment && (
          <NewCommentForm onAddedComment={addedCommentHandler} />
        )}
      </section>
      <section className={classes.comments}>{comments}</section>
    </Fragment>
  );
};

export default Comments;
