import React from "react";

import "./represent.css";

function Represent(props) {
  return (
    <div className="block">
      <h2>STATE: {props.state}</h2>
      <p>CONFIRMED: {props.confirmed}</p>
      <p>ACTIVE: {props.active}</p>
      <p>DEATHS: {props.deaths}</p>
      <p>
        LAST UPDATED ON:
        <br /> {props.updated}
      </p>
    </div>
  );
}

export default Represent;
