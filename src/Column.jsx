import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Column = ({
  column,
  columnIndex,
  onMoveRight,
  onMoveLeft,
  onAddCard,
}) => (
  <div className="column">
    <h3>{column.name}</h3>
    {column.cards.map((card, cardIndex) => (
      <Card
        key={card.id}
        card={card}
        cardIndex={cardIndex}
        canMoveLeft={columnIndex !== 0}
        canMoveRight={columnIndex !== 2}
        onMoveLeft={() => onMoveLeft(cardIndex)}
        onMoveRight={() => onMoveRight(cardIndex)}
      />
    ))}
    <button onClick={onAddCard} type="button">+</button>
  </div>
);

Column.propTypes = {
  column: PropTypes.string.isRequired,
  columnIndex: PropTypes.string.isRequired,
  onMoveRight: PropTypes.string.isRequired,
  onMoveLeft: PropTypes.string.isRequired,
  onAddCard: PropTypes.string.isRequired,
};

export default Column;
