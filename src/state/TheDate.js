import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
  this.state = { datetime: new Date() };
  // console.log('constructor')
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     console.log('tick')
  //   }, 1000)
  // }

  componentDidMount() {
    // console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    // return <div />
    // console.log('render')
    // console.log(this.state)
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}

export default TheDate