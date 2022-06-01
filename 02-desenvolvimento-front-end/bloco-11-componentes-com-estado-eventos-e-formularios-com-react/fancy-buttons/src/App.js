import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }
  }


handleButtonOne() {
  this.setState(() => ({
    clicksBtnOne: 1,
  }))
}

handleButtonTwo() {
  this.setState(() => ({
    clicksBtnTwo: 1,
  }))
}

handleButtonThree() {
  this.setState(() => ({
    clicksBtnThree: 1,
  }))
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
