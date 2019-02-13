import React from "react";
import "./style.css";

function Scores(props) {
  return (
    <p className="Scores">
      <span>Score : {props.current} | Top Score: {props.top}</span>
    </p>
  );
}

export default Scores;
