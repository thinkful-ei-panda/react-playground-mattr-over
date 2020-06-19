import React from 'react';

class Bomb extends React.Component {
  state = {
      count: 0,
  };

  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      // console.log('setInterval')
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentDidUnMount')
    clearInterval(this.interval)
  }

  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }
  
  render() {
    return (
      <div className='CountdownBomb'>
          {this.renderDisplay()}
          </div>
    )
  }
}

export default Bomb