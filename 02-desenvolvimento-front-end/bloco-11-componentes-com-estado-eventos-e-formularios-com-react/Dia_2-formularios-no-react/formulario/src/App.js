import React, { Component } from 'react';

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

  renderSelectInput() {
    const { age } = this.state;

    return (
      <label htmlFor="age">
        Idade:
        <select
          id="age"
          name="age"
          onChange={this.handleChange}
          value={age}
        >
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
      </label>
    )
  }

  render() {
    const { name, email, anecdote, terms } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>

            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={name}
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={email}
              />
            </label>

            {this.renderSelectInput()}
          </fieldset>

          <fieldset>
            <label htmlFor="anecdote">
              Anedota:
              <textarea
                id="anecdote"
                name="anecdote"
                onChange={this.handleChange}
                value={anecdote}
              />
            </label>

            <input type="file" />
          </fieldset>

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