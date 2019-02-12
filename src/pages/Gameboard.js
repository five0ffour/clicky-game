import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import CardSource from "../data/cards.json"

class GameBoard extends Component {
  // Initialize this.state.books as an empty array
  state = {
    cards : []
  };

  // Add code here to get all books from the database and save them to this.state.books
   componentDidMount = () => {
     console.log(JSON.stringify(CardSource,0,2));
     this.setState({cards : CardSource.slice()});
  }

  render() {
    return (
      <Container >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>To score a point, click on any image that you haven't clicked before</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
            {this.state.cards.map(card => (
            <Col size="lg-3">
              <Card cardinfo={card}></Card>
            </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default GameBoard;
