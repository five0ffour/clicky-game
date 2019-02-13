import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameTableau from "./pages/GameTableau";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    score: { current: 0, top: 0 },
    message: ""
  };

  updateMessage = (msg) => {
    console.log("updating message to", msg);
    this.setState({message : msg});
  }

  updateScore = (newScore) => {
    console.log("updating score to", newScore.score.current);
    this.setState({ score : { current: newScore.score.current, top: newScore.score.top}});
  }

  eventHandlers = {
    msgHandler: this.updateMessage,
    scoreHandler: this.updateScore,
  }

  resetGame = () => {
    this.setState({message : "Click a character to start the game",
                   score: {current:0, top:0}});
  }

  componentDidMount() {
    this.resetGame();
  }

  render() {
    return (
    <Router>
      <div>
        <Navbar message={this.state.message} current={this.state.score.current} top={this.state.score.top} />
        <Wrapper>
          <Route exact path="/"  render={() => (
            <GameTableau game={this.state} handlers={this.eventHandlers}/> 
          )} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
  }
}


export default App;
