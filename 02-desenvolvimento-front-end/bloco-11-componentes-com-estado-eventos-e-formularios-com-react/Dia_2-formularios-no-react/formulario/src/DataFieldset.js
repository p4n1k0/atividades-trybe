import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataFieldset extends Component {
    render() {
        const { anecdoteValue, handleChange } = this.props;

        return (
            <fieldset>
                <legend>Texto e arquivos</legend>
                <label htmlFor="anecdote">
                    Anedota:
                    <textarea
                      id="anecdote"
                      name="anecdote"
                      onChange={ handleChange }
                      value={ anecdoteValue }
                    />
                </label>

                <input type="file" />
            </fieldset>
        )
    }
}

DataFieldset.propTypes = {
    handleChange: PropTypes.func,
    anecdoteValue: PropTypes.string,
}.isRequired
