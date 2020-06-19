import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { 
        chamber: null,
        spinningTheChamber: false
         }
        // this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handlePullTriggerButtonClick = () => {
        console.log(this.state.chamber)
        // console.log('props in handleWorldButtonClick', this.props)
        // console.log('state in handleWorldButtonClick', this.state)
        this.setState({
            chamber: (Math.floor(Math.random() * 8)),
            spinningTheChamber: true
          })

          console.log(this.state.chamber)


      };


    render() {
        return (
                <div>
                <p>Test your Luck!: {this.state.chamber !== 5 ? 'Safe' : 'Bang!'}</p>
                <button onClick={this.handlePullTriggerButtonClick}>
                    Pull Trigger
                </button>
                </div>
                )
            }
}

export default RouletteGun