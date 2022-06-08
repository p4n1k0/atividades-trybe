import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    // Solicita a imagem assim que a página for renderizada
    this.fetchDog();
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;
    // Enquanto a requisição é feita, o texto `'Loading...'` aparece
    if (data === '') return 'Loading...';

    return (
      <div>
        <p>Doguinhos</p>
        {/* Adiciona um botão para buscar mais um _doguinho_. */}
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <img src={ data.message } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;
