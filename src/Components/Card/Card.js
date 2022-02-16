import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number, deleteReservation }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button
        id={id}
        onClick={(e) => deleteReservation(e)}
      >
        Cancel
      </button>
    </div>
  )
}

export default Card;
