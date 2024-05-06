import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalFormForm from './ProfessionalForm';

export default class Form extends Component {
    render() {
        const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props

        return(
            <form>
                <PersonalForm
                  changeHandler={ changeHandler }
                  onBlurHandler={ onBlurHandler }
                  currentState={ currentState }
                />
                <ProfessionalFormForm changeHandler={ changeHandler } />
                <input
                  type="button"
                  onClick={ sendForm }
                  value="Enviar"
                />
                <input
                  type="reset"
                  onClick={ resetForm }
                  value="Limpar"
                />
            </form>
        )
    }
}
