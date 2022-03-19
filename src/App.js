import React from 'react';
import Form from './components/Form';
import Baralho from './components/Baralho';

const titleStyle = {
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '38px',
  textAlign: 'center',
  backgroundColor: 'rgb(43, 42, 51)',
  borderRadius: '10px',
  margin: '10px',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validaBotaoDeSalvar = this.validaBotaoDeSalvar.bind(this);
  }

  onInputChange(evento) {
    const { name } = evento.target;
    const value = evento.target.type === 'checkbox' ? evento.target.checked
      : evento.target.value;
    this.setState({
      [name]: value,
    }, () => this.validaBotaoDeSalvar());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const carta = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      saveCards: [...prevState.saveCards, carta],
    }), this.verificaCartaTrunfo);
  }

  verificaCartaTrunfo = () => {
    const { saveCards } = this.state;

    this.setState({
      hasTrunfo: saveCards.some(({ cardTrunfo }) => cardTrunfo),
    });
  }

  validaBotaoDeSalvar() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const verificaStrings = cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0;
    const SOMA_MAXIMA = 210;
    const somaDosAtributos = (+cardAttr1 + +cardAttr2 + +cardAttr3) <= SOMA_MAXIMA;
    const VALOR_MAXIMO = 90;
    const valorMaximoAtributo = +cardAttr1 <= VALOR_MAXIMO && +cardAttr2 <= VALOR_MAXIMO
      && +cardAttr3 <= VALOR_MAXIMO;
    const atributosPositivos = +cardAttr1 >= 0 && +cardAttr2 >= 0
      && +cardAttr3 >= 0;

    const validacao = verificaStrings && somaDosAtributos && valorMaximoAtributo
      && atributosPositivos;
    this.setState(() => ({
      isSaveButtonDisabled: !validacao,
    }));
  }

  render() {
    const { saveCards } = this.state;
    const cards = saveCards;
    return (
      <div>
        <h1
          style={ titleStyle }
        >
          Tryunfo
        </h1>
        <div>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <Baralho
          saveCards={ cards }
        />
      </div>
    );
  }
}

export default App;
