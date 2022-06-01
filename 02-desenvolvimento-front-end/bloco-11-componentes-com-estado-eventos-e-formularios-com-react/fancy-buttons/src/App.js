import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    console.log('Clicou no botao 1!', this);
  }

  handleButtonTwo() {
    console.log('Clicou no botao 2!', this);
  }

  handleButtonThree() {
    console.log('Clicou no botao 3!', this);
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
