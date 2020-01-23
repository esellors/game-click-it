import React from "react";
import "./styles.css";
import Scoreboard from './Components/Scoreboard';
import Game from './Components/Game';
import History from './Components/History';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameOn: false,
      timer: 0,
      total: 0,
      history: [],
      avg: 0
    }
    this.startGame = this.startGame.bind(this);
    this.getClickPoints = this.getClickPoints.bind(this);
  }
  startGame() {
    this.setState({
      gameOn: true,
      timer: 10,
      total: 0,
      history: []
    }, this.startCountdown)

  }
  startCountdown() {
    let countdown = setInterval(() => {
      this.setState({ timer: this.state.timer - 1}, () => {
        if (this.state.timer === 0) {
          clearInterval(countdown);
          this.setState({ gameOn: false }, () => {
            alert('Game Over!')
          });
          
        }
      })
    }, 1000)
  }
  getClickPoints(num) {
    let points;
    if (num > 50) {
      points = 100 - num;
    } else {
      points = num;
    }
    const newTotal = this.state.total + points;
    const newHistory = [points, ...this.state.history]

    this.setState({
      total: newTotal,
      history: newHistory
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <section className='left-side'>
          <Scoreboard 
            total={this.state.total}
            timer={this.state.timer}
          />
          <Game 
            startGame={this.startGame}
            gameOn={this.state.gameOn}
            getClickPoints={this.getClickPoints} />
        </section>
        <section className='right-side'>
          <History history={this.state.history} />
        </section>
      </div>
    );
  }
}
