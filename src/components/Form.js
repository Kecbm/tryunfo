import React, { Component } from 'react';
import PropTypes from 'prop-types';

const formStyle = {
  width: '45%',
  height: '45%',
  backgroundColor: 'rgb(43, 42, 51)',
  borderRadius: '20px',
  margin: '10px',
  padding: '20px',
  marginTop: '10px',
  fontFamily: 'monospace',
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  float: 'left',
};

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div
        style={ formStyle }
      >
        <form>
          <h2>Adicionar nova carta</h2>
          <br />
          <br />
          <label htmlFor="name-input">
            Nome
            <br />
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>
          <br />
          <br />
          <label htmlFor="description-input">
            Descrição
            <br />
            <textarea
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr1-input">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr2-input">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>
          <br />
          <br />
          <label htmlFor="attr3-input">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>
          <br />
          <br />
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>
          <br />
          <br />
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          <br />
          {
            hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="trunfo-input">
                  <input
                    type="checkbox"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    name="cardTrunfo"
                  />
                  Super Trybe Trunfo
                </label>
              )
          }
          <br />
          <br />
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            name="isSaveButtonDisabled"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
