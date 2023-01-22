import { Fragment } from "react";
import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

let Events = () => {
  let events = useLoaderData();

  return (
    <Fragment>
      <EventsList events={events} />
    </Fragment>
  );
};

export default Events;

export const loaderEvents = async () => {
  let request = await fetch("http://localhost:8080/events");

  if (!request.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    let response = await request.json();
    return response.events;
  }
};
