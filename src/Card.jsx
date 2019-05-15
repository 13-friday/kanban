import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  card,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight,
}) => (
  <div className="card">
    {canMoveLeft && <button onClick={onMoveLeft} type="button">{'<'}</button>}
    <span className="title">{card.cardName}</span>
    {canMoveRight && <button onClick={onMoveRight} type="button">{'>'}</button>}
  </div>
);

Card.propTypes = {
  card: PropTypes.shape({
    cardName: PropTypes.string,
  }).isRequired,
  canMoveRight: PropTypes.bool.isRequired,
  canMoveLeft: PropTypes.bool.isRequired,
  onMoveRight: PropTypes.func.isRequired,
  onMoveLeft: PropTypes.func.isRequired,
};

export default Card;
