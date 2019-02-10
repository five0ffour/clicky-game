import React from "react"
import Col from "../Col"
import "./style.css";

function Card(props) {

  return (
    <Col size="md-3">
    <img alt="Game Card" src={props.image} />
    </Col>
  );
}

export default Card;