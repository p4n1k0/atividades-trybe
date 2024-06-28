import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  Nname: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  countryState: '',
  adressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,  
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  changeHandler = ({ target }) => {
    let { name, value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'adress') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = ({ target }) => {
    let { name, value } = target;

    if(name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = adress => adress.replace(/[^\w\s]/gi, '')

  handleSubmit = event => { event.preventDefault(); }

  validateField(fieldname, value) {
    switch (fieldname) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w]{2})$/i)

        return isValid ? '' : ' is invalid';
        default:
          break;
    }
    return '';
  }
   
  resetForm = () => { this.setState(INITIAL_STATE) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={ this.state}
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}