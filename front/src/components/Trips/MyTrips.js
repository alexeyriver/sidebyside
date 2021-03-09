
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTripsFetchAC } from '../../redux/Thunk/tripsFetchesAC'
import HistoryMap from '../Map/HistoryMap';

function MyTrips(props) {
  const dispatch = useDispatch()


  let trips = useSelector(state => state.tripState.trips)
  console.log(trips)
  const user = useSelector(state => state.auth.user)
  if (trips.length > 0) {
    trips = trips.filter(el => el.author._id === user._id)
  }



  const deleteHandler = (event) => {
    event.preventDefault()


    const itemId = event.target.getAttribute("data-id");

    dispatch(deleteTripsFetchAC(itemId));
  };

  return (
    <div>

      <h2>Поездки которые предложил сам</h2>
      {trips && trips.length &&
        trips.map((el) => (
          <div
            style={{ border: "1px black solid" }}
            key={performance.now()}
          >
            <p>{el.author.name}</p>
            <p>Информация о поездке: {el.tripInfo}</p>
            <p>Бюджет: {el.budget}</p>
            <p>Начальная дата: {el.startDate}</p>
            <p>Конечная дата: {el.endDate}</p>

            <HistoryMap el={el} />

         
            <button>Редактировать</button>
            <button data-id={el._id} onClick={deleteHandler}>Удалить</button>
          </div>
        ))}
    </div>

  );
}

export default MyTrips;
