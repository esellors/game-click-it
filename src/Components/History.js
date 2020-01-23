import React from 'react';

export default class History extends React.Component {
  constructor() {
    super();
    this.state = {
      avg: null
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.history !== this.props.history && this.props.history.length > 0) {
      const avg = Math.trunc(this.props.history.reduce((x, y) => x + y, 0) / this.props.history.length);
      this.setState({ avg })
    }
  }
  render() {
    const historyMapped = this.props.history.map(points => {
      return (
        <p>{points}</p>
      )
    })

    return(
      <section className='panels' id='history'>
        {
          this.props.history.length === 0
            ? 'Click the colorful box to begin!'
            : (
              <>
                <div id='click-avg'>
                  <p>AVG/CNT:</p>
                  <p>{this.state.avg}/{this.props.history.length}</p>
                </div>
                {historyMapped}
              </>
            )
          }
      </section>
    )
  }
}