import React, { Component } from 'react';

function handleClick() {
  console.log('Clicou no botao');
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={handleClick}>My button</button>
      </div>
    );
  }  
}
