
import React from 'react';
import { useSelector } from 'react-redux';

function CurrentTrips(props) {


  let trips = useSelector(state => state.tripState.trips)
  const user = useSelector(state => state.auth.user)

  let checktrips = []
  trips.forEach(el => el.participants.forEach(part => { if (part._id == user._id) checktrips.push(el) }))
  let filteredTrip = (checktrips.filter(el => el.participants?.length > 1));

  return (
    <div>

      <h2>Текущие поездки</h2>
      {!filteredTrip.length && (<h3>Упс!Кажется,вы не участвуете ни в  одной поездке!</h3>)}
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
            <p>Компаньоны: </p>
            {el.participants && el.participants.map(el =>
              <div>
                <p>Имя: {el.name} </p>
                <p> E-mail: {el.email}</p>
              </div>)}
          </div>
        ))}
    </div>

  );
}

export default CurrentTrips;
