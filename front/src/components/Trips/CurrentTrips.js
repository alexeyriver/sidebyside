
import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment'

function CurrentTrips(props) {


  let trips = useSelector(state => state.tripState.trips)
  const user = useSelector(state => state.auth.user)

  let checktrips = []
  trips.forEach(el => el.participants.forEach(part => { if (part._id == user._id) checktrips.push(el) }))
  let filteredTrip = (checktrips.filter(el => el.participants?.length > 1));

  return (
    <div className="container">

      <h2>Текущие поездки</h2>
      <div className="descriptionRow">
        {!filteredTrip.length && (<h3>Упс! Кажется, вы не участвуете ни в одной поездке!</h3>)}
        {filteredTrip &&
          filteredTrip.map((el) => (
            <div className="description current"
              style={{ }}
              key={performance.now()}>
              <div>Автор: {el.author.name}</div>
              <div>Информация о поездке: {el.tripInfo}</div>
              <div>Бюджет: {el.budget}</div>
              <div>Начальная дата: {moment(el.startDate).format("DD.MM.YYYY")}</div>
              <div>Конечная дата: {moment(el.endDate).format("DD.MM.YYYY")}</div>
              <div >Компаньоны: </div>
              <div className="persons">
                {el.participants && el.participants.map((el, i) =>
                  <div>{i + 1}: {el.name}, {el.email};</div>
                )}
              </div>
            </div>

          ))}
      </div>
    </div>

  );
}

export default CurrentTrips;
