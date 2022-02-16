import React from 'react';
import Card from '../Card/Card.js'
import './Reservations.css';

const Reservations = ({ reservations, deleteReservation }) => {
  const allReservations = reservations.map(res => {
    return (
      <Card
        key={res.id}
        id={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        deleteReservation={deleteReservation}
      />
    )
  })

  return (
    <section className='reservations'>
      { allReservations }
    </section>
  );
}

export default Reservations;
