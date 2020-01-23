import React from "react";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 50
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.slideRight();
  }
  handleClick() {
    if (this.props.gameOn === false) {
      this.props.startGame();
    } else {
      this.props.getClickPoints(this.state.value);
    }
  }
  slideRight() {
    let moveRight = setInterval(() => {
      if (this.state.value < 100) {
        this.setState(prevState => {
          return { value: prevState.value + 1 };
        });
      } else {
        clearInterval(moveRight);
        this.slideLeft();
      }
    }, 5);
  }
  slideLeft() {
    let moveLeft = setInterval(() => {
      if (this.state.value > 0) {
        this.setState(prevState => {
          return { value: prevState.value - 1 };
        });
      } else {
        clearInterval(moveLeft);
        this.slideRight();
      }
    }, 5);
  }
  render() {
    return (
      <section
        className="panels"
        id="game"
        style={{
          background: `linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,255,0,1) ${
            this.state.value
          }%, rgba(21,0,255,1) 100%)`
        }}
        onClick={this.handleClick}
      >
        <img
          src="http://www.clker.com/cliparts/s/S/H/v/3/0/transparent-arrow-right-th.png"
          alt="arrow"
        />
        <p>
          |<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />
          |<br />|<br />
        </p>
        <img
          src="http://www.clker.com/cliparts/P/F/4/j/V/q/transparent-arrow-left-th.png"
          alt="arrow"
        />
        <p id='game-instructions-1'>CLICK WHEN THE GREEN IS OVER THE LINE</p>
        <p id='game-instructions-2'>MIDDLE IS 50 POINTS -- EDGES ARE 0 POINTS.</p>
      </section>
    );
  }
}
