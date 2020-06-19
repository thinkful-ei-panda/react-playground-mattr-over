import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state/HelloWorld';
import Bomb from './state/Bomb';
import RouletteGun from './state/RouletteGun';
import Tabs from './state/Tabs';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React Playground</h1>
        <Tabs tabs={tabsProp} />
        <RouletteGun />
        <TheDate />
        <Counter count={123} />
        <HelloWorld />
        <Bomb />
        
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

export default App;