import React from "react"
import Col from "../Col"
import "./style.css";

function Card(props) {

  return (
      <div
        className="Card"
        role="img"
        aria-label="Card Image"
        style={{backgroundImage: `url(${props.cardinfo.image})`}}>
        {props.cardinfo.title}
      </div>
  );
}

export default Card;
