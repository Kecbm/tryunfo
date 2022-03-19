import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const baralhoStyle = {
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
  float: 'right',
  position: 'relative',
};

class Baralho extends Component {
  render() {
    const {
      saveCards,
    } = this.props;
    return (
      saveCards.map((card, index) => (
        <div
          key={ index }
          style={ baralhoStyle }
        >
          <Card { ...card } />
        </div>
      ))
    );
  }
}

Baralho.propTypes = {
  saveCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Baralho;
