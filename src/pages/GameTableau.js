import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import CardSource from "../data/cards.json"

class GameTableau extends Component {
  // Initialize this.state.books as an empty array
  state = {
    cards : [],
    gameOver : false
  };

  // Add code here to get all books from the database and save them to this.state.books
   componentDidMount = () => {
     this.setState({cards : CardSource.slice()});
  }

  handleClickEvent = (card) => {

      let newCards = this.state.cards.slice();
      let match = newCards.find(c=>c.id === card.id);
      let isGameOver = false;

      // Check if previously clicked
      if (match && 
          typeof match.clicked !== undefined &&
          match.clicked === true) {

        // Previously clicked - Game over!
        console.log("Game Over"); 
        isGameOver = true;

      }
      else {
        // Fresh Click - Update score & click state for this card
        match.clicked=true;
      }

      console.log("card clicked:  ", match);

      // Resort the deck
      newCards = this.shuffle(newCards);

      // Save state and trigger re-render
      this.setState({cards : newCards, gameOver : isGameOver});
  }

  shuffle = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
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
            <Col size="lg-3" key={card.id}>
              <Card cardinfo={card} clickHandler={this.handleClickEvent}></Card>
            </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default GameTableau;
