import { Fragment } from "react";
import {
  json,
  Link,
  useRouteLoaderData,
  useParams,
  redirect,
} from "react-router-dom";
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

export let eventsDeleteAction = async ({ request, params }) => {
  let eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Couldn't delete event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
};
