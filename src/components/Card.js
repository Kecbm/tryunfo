import React, { Component } from 'react';
import PropTypes from 'prop-types';

const cardStyle = {
  width: '400px',
  height: '484px',
  borderRadius: '10px',
  border: '2px solid rgb(15 , 15 , 15)',
  overflow: 'hidden',
};

const titleStyle = {
  textAlign: 'right',
  width: '20px',
  height: '20px',
  margin: '5px',
};

const imageStyle = {
  textAlign: 'center',
  width: '200px',
  height: '240px',
};

const infoStyle = {
  textAlign: 'justify',
  width: '200px',
  height: '200px',
  margin: '20px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

class Card extends Component {
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
    } = this.props;
    return (
      <div
        style={ cardStyle }
      >
        <div
          style={ titleStyle }
        >
          <h2 data-testid="name-card">{ cardName }</h2>
        </div>
        <div
          style={ imageStyle }
        >
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <div
          style={ infoStyle }
        >
          <p data-testid="description-card">{ cardDescription }</p>
          <span data-testid="attr1-card">
            <b>Attr 1:</b>
            { cardAttr1 }
          </span>
          <br />
          <span data-testid="attr2-card">
            <b>Attr 2:</b>
            { cardAttr2 }
          </span>
          <br />
          <span data-testid="attr3-card">
            <b>Attr 3:</b>
            { cardAttr3 }
          </span>
          <br />
          <span data-testid="rare-card">{ cardRare }</span>
          <br />
          {
            cardTrunfo && <span data-testid="trunfo-card"><b>Super Trunfo</b></span>
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
