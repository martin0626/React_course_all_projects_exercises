import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

let NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const newEventAction = async ({ request, params }) => {
  const data = await request.formData();
  let eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  return redirect("/events");
};
