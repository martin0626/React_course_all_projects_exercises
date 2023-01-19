import { Fragment } from "react";
import { Link } from "react-router-dom";

let DUMMY_EVENTS = [
  { name: "Event 1", id: "E1" },
  { name: "Event 2", id: "E2" },
  { name: "Event 3", id: "E3" },
];

let Events = () => {
  return (
    <Fragment>
      <h1>Events</h1>
      {DUMMY_EVENTS.map((event) => {
        return (
          <li>
            <Link to={event.id}>{event.name}</Link>
          </li>
        );
      })}
    </Fragment>
  );
};

export default Events;
