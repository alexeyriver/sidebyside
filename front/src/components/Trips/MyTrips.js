import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTripsFetchAC, initTripsFetchAC } from "../../redux/Thunk/tripsFetchesAC";
import HistoryMap from "../Map/HistoryMap";
import moment from "moment";
import { Link } from 'react-router-dom'
// import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function MyTrips(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initTripsFetchAC())
  }, [])
  let trips = useSelector((state) => state.tripState.trips);

  const user = useSelector((state) => state.auth.user);
  if (trips?.length > 0) {
    trips = trips.filter((el) => el.author._id === user._id);
  } else trips = []

  const deleteHandler = (event) => {
    event.preventDefault();
    const itemId = event.target.getAttribute("data-id");
    dispatch(deleteTripsFetchAC(itemId));
  };



  return (

    <div className="container">
      <h2>Созданные поездки</h2>
      {trips.length < 1 ? <h3>Упс!Кажется,вы не создали ни одну поездку!</h3> :
        trips.map((el) => (

          <div className="cardString" key={performance.now()}>


            <div><b>Информация о поездке:</b> {el.tripInfo}</div>
            <div><b>Бюджет:</b> {el.budget}</div>
            <div><b>Начальная дата:</b> {moment(el.startDate).format("DD.MM.YYYY")}</div>
            <div><b>Конечная дата:</b> {moment(el.endDate).format("DD.MM.YYYY")}</div>

            <HistoryMap el={el} />


            {/* <Link to={el._id}>Edit</Link> */}

            <div className="buttonContainer">
              <button data-id={el._id}><Link style={{ textDecoration: 'none' }} to={`/mytrips/${el._id}`}>Изменить</Link></button>
              <button data-id={el._id} onClick={deleteHandler}>Удалить</button>
            </div>
          </div>

        ))
      }
    </div>
  );
}

export default MyTrips;
