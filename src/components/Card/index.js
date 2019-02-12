import React from "react"
import Col from "../Col"
import "./style.css";

function Card(props) {

  return (
    <div
        className="card"
        role="img"
        aria-label="Card Image"
        style={{backgroundImage: `url(${props.cardinfo.image})`}}>
        <p className="cardTitle">{props.cardinfo.title}</p> 
      </div>
  );
}

export default Card;
