import React from 'react';

function Trips({ownTrips}) {
  return (
    <>
      <h1>Тут будут Trips</h1>
      <h2>Прошедшие поездки</h2>
      <h2>Текущие поездки</h2> 
      <h2>Поездки которые предложил сам</h2>
    {ownTrips && ownTrips.map(el=><div style={{border:'1px black solid'}} key={performance.now()}>
    <p>{el.author}</p>
      <p>{el.tripInfo}</p>
      <p>{el.startDate}</p>
      <p>{el.endDate}</p>
      <p>{el.budget}</p>
      <p>{el.participants}</p>
      </div>)}
    <div>
    </div>
    </>
  );
}

export default Trips;
