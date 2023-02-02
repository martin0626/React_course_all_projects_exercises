import React from "react";

import "./Backdrop.css";

const backdrop = (props) => <div className={props.show && "Backdrop"}></div>;

export default backdrop;
