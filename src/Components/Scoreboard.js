import React from 'react';

export default class Game extends React.Component {
  render() {
    return (
      <section className='panels' id='scoreboard'>
        <section id='scoreboard-score'>
          SCORE: {this.props.total}
        </section>
        <section id='scoreboard-timer'>
          {this.props.timer}
        </section>
      </section>
    )
  }
}