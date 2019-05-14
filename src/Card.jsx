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
    <span className="title">{card.name}</span>
    {canMoveRight && <button onClick={onMoveRight} type="button">{'>'}</button>}
  </div>
);

Card.propTypes = {
  card: PropTypes.string.isRequired,
  canMoveRight: PropTypes.string.isRequired,
  canMoveLeft: PropTypes.string.isRequired,
  onMoveRight: PropTypes.string.isRequired,
  onMoveLeft: PropTypes.string.isRequired,
};

export default Card;
