import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state/HelloWorld';
import Bomb from './state/Bomb';
import RouletteGun from './state/RouletteGun';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React Playground</h1>
        <TheDate />
        <Counter count={123} />
        <HelloWorld />
        <Bomb />
        <RouletteGun />
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

export default App;