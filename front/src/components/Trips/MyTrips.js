import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteTripsFetchAC} from '../../redux/Thunk/tripsFetchesAC'

function MyTrips(props) {
 const dispatch =useDispatch()

  let trips = useSelector(state => state.trips)
  const user = useSelector(state => state.auth.user)
  trips = trips.filter(el => el.author === user._id)

  const deleteHandler =(event)=>{
    event.preventDefault()
    
    const itemId = event.target.getAttribute('data-id');
    dispatch(deleteTripsFetchAC(itemId))

  }

  return (
    <div>
          <h2>Поездки которые предложил сам</h2>
          {trips &&
            trips.map((el) => (
              <div
                style={{ border: "1px black solid" }}
                key={performance.now()}
              >
                <p>{el.author}</p>
                <p>Информация о поездке: {el.tripInfo}</p>
                <p>Бюджет: {el.budget}</p>
                <p>Начальная дата: {el.startDate}</p>
                <p>Конечная дата: {el.endDate}</p>

                {/* <p>{el.participants}</p> */}
                <button>Редактировать</button>
                <button data-id={el._id} onClick={deleteHandler}>Удалить</button>
              </div>
            ))}
        </div>
  );
}

export default MyTrips;
