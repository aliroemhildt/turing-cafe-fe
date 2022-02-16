import React from 'react';
import Card from '../Card/Card.js'

const Reservations = ({ reservations }) => {
  const allReservations = reservations.map(res => {
    return (
      <Card
        key={res.id}
        id={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
      />
    )
  })

  return (
    <section>
      { allReservations }
    </section>
  );
}

export default Reservations;
