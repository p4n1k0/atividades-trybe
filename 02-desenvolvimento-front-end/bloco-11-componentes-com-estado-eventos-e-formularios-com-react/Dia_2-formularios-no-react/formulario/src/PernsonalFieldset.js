import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PersonalFieldset extends Component {
    render() {
        const { nameValue, emailValue, ageValue, handleChange } = this.props;

        return (
            <fieldset>
                <legend>Informações pessoais</legend>

                <label htmlFor="name">
                    Nome:
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={ handleChange }
                      value={ nameValue }
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input 
                      id="email"
                      name="email"
                      type="email"
                      onChange={ handleChange }
                      value={ emailValue }
                    />
                </label>

                <label htmlFor="age">
                    Idade:
                    <select
                      id="age"
                      name="age"
                      onChange={ handleChange }
                      value={ ageValue}
                    >
                        <option value="">Selecione</option>
                        <option value="adult">Maior que 18</option>
                        <option value="underage">Menor que 18</option>
                    </select>
                </label>
            </fieldset>
        );
    }
}

PersonalFieldset.propTypes = {
    handleChange: PropTypes.func,
    nameValue: PropTypes.string,
    emailValue: PropTypes.string,
    ageValue: PropTypes.string,
}.isRequired 
