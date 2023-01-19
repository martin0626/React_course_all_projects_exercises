import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsLayout = () => {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
};

export default EventsLayout;
