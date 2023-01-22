import { Fragment } from "react";
import { json, Link, useRouteLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

let EventDetails = () => {
  let loader = useRouteLoaderData("event-data");
  return <EventItem event={loader.event} />;
};

export default EventDetails;

export const eventLoader = async ({ request, params }) => {
  let requestData = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );

  if (!requestData.ok) {
    throw json({ message: "Event is Not Found!" }, { status: 500 });
  } else {
    return requestData;
  }
};
