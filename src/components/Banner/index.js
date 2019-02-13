import React from "react";
import "./style.css";

function Banner(props) {
  return (
    <p className="Banner">
      <span>{props.message}</span>
    </p>
  );
}

export default Banner;
