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

  // componentDidMount() - get all cards from the data file and save them to this state
   componentDidMount = () => {
     this.setState({cards : CardSource.slice()});
  }

  gameOver = () => {
      console.log("Game Over"); 
      this.setState({gameOver : true});
      this.props.handlers.scoreHandler({score : { current: 0, top: this.props.game.score.top}});
      this.props.handlers.msgHandler("Game over!!  Try again");    
  }

    // safeMove() - fresh click on a unclicked card.
    //             -Update score & click state for this card
    //             - Save high score if relevant
    safeMove = () => {
      const newScore = this.props.game.score.current + 1; 
      let  topScore = this.props.game.score.top;

      topScore = (newScore > topScore) ? newScore : topScore;       
      this.props.handlers.scoreHandler({score : { current: newScore, top: topScore}});
  }

  resetGame = () => {
      this.setState({gameOver : false});
      this.props.handlers.msgHandler("Good luck!!  Keep going");    
      let newCards = this.state.cards.map((card) => {
        card.clicked = false;
        return card;
      });
      this.setState({cards : newCards}); 
    }

  // handleClickEvent() - main driver for game,  called for any click on a character card
  //                    - fires off handlers to drive messsage
  //                    - fires handlers to drive scoring
  handleClickEvent = (card) => {

      let newCards = this.state.cards.slice();
      let match = newCards.find(c=>c.id === card.id);

      if (this.state.gameOver === true) {
        this.resetGame();
      }

      // Check if previously clicked
      if (match && 
          typeof match.clicked !== undefined &&
          match.clicked === true) {

        // Dupe!  Game Over
        this.gameOver(); 
      }
      else {
        match.clicked = true;
        this.safeMove();
      }

      // Resort the deck
      newCards = this.shuffle(newCards);

      // Save state and trigger re-render
      this.setState({cards : newCards});
  }

  // shuffle() - utlity function to randomly sort the card array  
  // TODO: there are sort functions to do this, but this method is tested.  If it ain't broke, don't fix it.
  shuffle = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

  // render() - update the display based on the latest state
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
