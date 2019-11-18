import React, { Component } from 'react';
import Scores from './components/Scores';
import './app.css';

export class App extends Component {
  state = {
    p1Scores: 1,
    p2Scores: 1,
    gameOver: false
  };

  handleP1 = () => {
    this.setState({
      p1Scores: Math.floor(Math.random() * 5) + 1
    });
  };
  handleP2 = () => {
    this.setState({
      p2Scores: Math.floor(Math.random() * 5) + 1
    });
  };

  reset = () => {
    this.setState({
      p1Scores: 1,
      p2Scores: 1,
      gameOver: false
    });
  };

  render() {
    return (
      <div className="container text-center">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>Player VS. Player</h1>
          </div>

          <Scores score={this.state.p1Scores} />
          <Scores score={this.state.p2Scores} />

          <div className="col-md-6 text-center">
            <button
              className="btn btn-success"
              onClick={this.handleP1}
              disabled={
                this.state.p1Scores === 5 || this.state.p2Scores === 5
                  ? !this.state.gameOver
                  : this.state.gameOver
              }
            >
              Player 1
            </button>
          </div>
          <div className="col-md-6 text-center">
            <button
              className="btn btn-success"
              onClick={this.handleP2}
              disabled={
                this.state.p1Scores === 5 || this.state.p2Scores === 5
                  ? !this.state.gameOver
                  : this.state.gameOver
              }
            >
              Player 2
            </button>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn btn-success" onClick={this.reset}>
              Reset
            </button>
          </div>
          <div className="col-md-12">Winning Score is 5</div>
          <div className="col-md-12">
            {(this.state.p1Scores === 5 || this.state.p2Scores === 5) &&
              'Game Over'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
