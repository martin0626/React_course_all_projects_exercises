import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

let EditEvent = () => {
  let loader = useRouteLoaderData("event-data");

  return <EventForm event={loader.event} />;
};

export default EditEvent;
