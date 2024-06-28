import React, { Component } from 'react';

export default class FormDataDisplay extends Component {
    render() {
        const {
            currentState: {
                name, email, cpf, adress, city, countryState,
                adressType, resume, role, roleDescription
            }
        } = this.props;

        return (
            <div>
                <h2>Dados enviados</h2>
                <h3>Pessoal</h3>
                <div> Name: { name }</div>
                <div> Email: { email }</div>
                <div> CPF: { cpf }</div>
                <div> Endereço: { adress }</div>
                <div> Cidade: { city }</div>
                <div> Estado: { countryState }</div>
                <div> Tipo de residência: { adressType }</div>
                <h3>Profissional</h3>
                <div>Currículo: { resume }</div>
                <div> Cargo: { role }</div>
                <div> Descrição do cargo: { roleDescription }</div>
            </div>
        )
    }
}
