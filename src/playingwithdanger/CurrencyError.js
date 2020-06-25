import React, { Component } from 'react'

export class CurrencyError extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
      }

      static getDerivedStateFromError(error) {
        return { hasError: true };
      }

    render() {
        if(this.state.hasError) {
        return <h2>Cannot display currency</h2>
        }
        return this.props.children
    }
}

export default CurrencyError
