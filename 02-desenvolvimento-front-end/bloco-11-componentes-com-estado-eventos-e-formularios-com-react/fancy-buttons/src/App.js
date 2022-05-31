import React, { Component } from 'react';

function handleButtonOne() {
  console.log('Clicou no botao 1!');
}

function handleButtonTwo() {
  console.log('Clicou no botao 2!');
}

function handleButtonThree() {
  console.log('Clicou no botao 3!');
}


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={handleButtonOne}>button one</button>
        <button onClick={handleButtonTwo}>button two2</button>
        <button onClick={handleButtonThree}>button three</button>
      </div>
    );
  }  
}
