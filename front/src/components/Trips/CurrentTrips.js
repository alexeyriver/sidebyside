
import React from 'react';
import { useSelector } from 'react-redux';

function CurrentTrips(props) {


  let trips = useSelector(state => state.tripState.trips)
  const user = useSelector(state => state.auth.user)
  // trips = trips.filter(el => el.participants.includes(user._id)) 

  trips = trips.filter(el => el.participants.filter(part => { if (part._id == user._id ) return el} ))

 let filteredTrip = (trips.filter(el => el.participants.length>1));



  return (
    <div>
      <h2>Текущие поездки</h2>
      {filteredTrip &&
        filteredTrip.map((el) => (
          <div
            style={{ border: "1px black solid" }}
            key={performance.now()}
          >
            <p>Автор: {el.author.name}</p>
            <p>Информация о поездке: {el.tripInfo}</p>
            <p>Бюджет: {el.budget}</p>
            <p>Начальная дата: {el.startDate}</p>
            <p>Конечная дата: {el.endDate}</p>

            {/* <p>{el.participants}</p> */}
          </div>
        ))}
    </div>
  );
}

export default CurrentTrips;
