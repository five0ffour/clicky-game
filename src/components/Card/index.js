import React from "react"
import "./style.css";

function Card(props) {

  return (
    <div
        className="card"
        key={props.cardinfo.id}
        role="img"
        aria-label="Card Image"
        onClick={() => props.clickHandler(props.cardinfo)}
        style={{backgroundImage: `url(${props.cardinfo.image})`}}>
        <p className="cardTitle">{props.cardinfo.title}</p> 
      </div>
  );
}

export default Card;
