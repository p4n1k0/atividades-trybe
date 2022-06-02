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
      formularioComErros: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, age, anecdote, terms } = this.state;
    const errorCases = [
      !name.length,
      !email.length,
      !age.length,
      !anecdote.length,
      !terms,
    ];
    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleError(); });    
  } 

  render() {
    const { name, email, age, anecdote, terms, formularioComErros } = this.state;

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
        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div >
    );
  }
}

export default App;