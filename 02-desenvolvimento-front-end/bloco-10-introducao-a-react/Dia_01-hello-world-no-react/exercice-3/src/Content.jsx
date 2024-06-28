import React, { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                {conteudos.map((item) => (
                    <div key={item.conteudo} className="card">
                        <h4>{`O conteúdo é: ${item.conteudo}`}</h4>
                        <p>{`Status: ${item.status}`}</p>
                        <p>{`Bloco: ${item.bloco}`}</p>
                    </div>    
                ))}                
            </div>
        )
    }
}