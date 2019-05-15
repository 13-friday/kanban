import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Column = ({
  columnsNum,
  column,
  columnIndex,
  onMoveRight,
  onMoveLeft,
  onAddCard,
}) => (
  <div className="column">
    <h3>{column.columnName}</h3>
    {column.cards.map((card, cardIndex) => (
      <Card
        key={card.id}
        card={card}
        cardIndex={cardIndex}
        canMoveLeft={columnIndex !== 0}
        canMoveRight={columnsNum - 1 > columnIndex}
        onMoveLeft={() => onMoveLeft(cardIndex)}
        onMoveRight={() => onMoveRight(cardIndex)}
      />
    ))}
    <button onClick={onAddCard} type="button" className="card-add__btn">+</button>
  </div>
);

Column.propTypes = {
  columnsNum: PropTypes.number.isRequired,
  column: PropTypes.shape({
    columnName: PropTypes.string,
  }).isRequired,
  columnIndex: PropTypes.number.isRequired,
  onMoveRight: PropTypes.func.isRequired,
  onMoveLeft: PropTypes.func.isRequired,
  onAddCard: PropTypes.func.isRequired,
};

export default Column;
