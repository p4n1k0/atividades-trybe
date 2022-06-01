import React, { Component } from 'react';

export default class App extends Component {
  handleButtonOne() {
    console.log('Clicou no botao 1!');
  }

  handleButtonTwo() {
    console.log('Clicou no botao 2!');
  }

  handleButtonThree() {
    console.log('Clicou no botao 3!');
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleButtonOne}>button one</button>
        <button onClick={this.handleButtonTwo}>button two2</button>
        <button onClick={this.handleButtonThree}>button three</button>
      </div>
    );
  }
}
