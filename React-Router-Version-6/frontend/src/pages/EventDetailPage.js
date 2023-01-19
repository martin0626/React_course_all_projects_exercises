import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

let EventDetails = () => {
  const event = useParams().eventId;

  return (
    <Fragment>
      <h1>{event}</h1>
      <button>
        <Link to=".." relative="path">
          Go Back
        </Link>
      </button>
    </Fragment>
  );
};

export default EventDetails;
