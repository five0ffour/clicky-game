import React from "react"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function Gameboard() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h3> Click on an image, but only once!</h3>
        </Row>

        <Row>
          <Col size="md-3">
            <Card image={require("../assets/images/Bugs_Bunny.svg")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Daffy_Duck.svg")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/ElmerFudd.gif")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Foghorn_Leghorn.png")}/>
          </Col>
        </Row>

        <Row>
          <Col size="md-3">
            <Card image={require("../assets/images/Granny_(Looney_Tunes).png")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Heneryhawk.jpg")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Marvin_the_Martian.svg")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Speedy_Gonzales.svg")}/>
          </Col>
        </Row>

        <Row>
          <Col size="md-3">
            <Card image={require("../assets/images/Pepe_Le_Pew.svg")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Sylvester_the_Cat.svg")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Porky_Pig.svg")}/>
          </Col>
          <Col size="md-3">
            <Card image={require("../assets/images/Quick_Draw_McGraw.png")}/>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Gameboard;
