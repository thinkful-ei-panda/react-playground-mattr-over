import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { who: 'World' }
        // this.handleButtonClick = this.handleButtonClick.bind(this)
      }

    handleWorldButtonClick = () => {
        // console.log(this.state.count)
        console.log('props in handleWorldButtonClick', this.props)
        console.log('state in handleWorldButtonClick', this.state)
        this.setState({
            who: 'World'
          })
      };

      handleFriendButtonClick = () => {
        // console.log(this.state.count)
        console.log('props in handleWorldButtonClick', this.props)
        console.log('state in handleWorldButtonClick', this.state)
        this.setState({
            who: 'Friend'
          })
      };

      handleReactButtonClick = () => {
        // console.log(this.state.count)
        console.log('props in handleWorldButtonClick', this.props)
        console.log('state in handleWorldButtonClick', this.state)
        this.setState({
            who: 'React'
          })
      };

    render() {
        return (
                <div className='hello-div'>
                <p>Hello {this.state.who}</p>
                <button onClick={this.handleWorldButtonClick}>
                    World
                </button>
                <button onClick={this.handleFriendButtonClick}>
                    Friend
                </button>
                <button onClick={this.handleReactButtonClick}>
                    React
                </button>
                </div>
                )
            }
}

  export default HelloWorld