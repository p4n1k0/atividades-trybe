import React, { Component } from 'react';
import PersonalFieldset from './PernsonalFieldset';
import DataFieldset from './DataFieldset';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      age: '',
      anecdote: '',
      terms: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  } 

  render() {
    const { name, email, age, anecdote, terms } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonalFieldset
            nameValue= { name }
            emailValue={ email }
            ageValue={ age }
            handleChange={ this.handleChange }
          />

          <DataFieldset anecdoteValue={ anecdote } handleChange={ this.handleChange } />
          
          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={this.handleChange}
              value={terms}
            />
            Concordo com termos e acordos
          </label>
        </form>
      </div >
    );
  }
}

export default App;