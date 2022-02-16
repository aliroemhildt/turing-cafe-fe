import React from 'react';

const Reservations = ({ reservations }) => {
  const allReservations = reservations.map(res => {
    return (
      <Card
        id={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
      />
    )
  })
  // need to fetch reservations in app and pass them down

  return (
    <section>
      { allReservations }
    </section>
  );
}
