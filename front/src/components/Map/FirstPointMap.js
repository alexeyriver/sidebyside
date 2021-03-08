import React, { useState, useEffect } from 'react';
import { YMaps, Map, GeoObject, Placemark, } from 'react-yandex-maps';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { useDispatch, useSelector } from 'react-redux';
import {addTripFetchAC} from "../../redux/Thunk/tripsFetchesAC";


function FirstPointMap({ props }) {
  const [routePoint, setRoutePoint] = useState([props.data])
  console.log(props);
  const HandlerCreateRoute = (e) => {
    console.log(e._sourceEvent.originalEvent.coords)
    setRoutePoint(routePoint => routePoint = [...routePoint, e._sourceEvent.originalEvent.coords])
  }
  const HandlerEditRoute = (e) => {
    console.log(e.originalEvent.target.geometry._coordinates)
    setRoutePoint(routePoint => routePoint = routePoint.filter((el) => el != e.originalEvent.target.geometry._coordinates))
  }

  ////// old logic from create trip \/\/\/\/
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateSecond, setSelectedDateSecond] = useState(null);
  const email = useSelector(store => store.auth.user.email)
  console.log(email);
  const dispatch = useDispatch();


  const tripHandler = (event) => {
    event.preventDefault()
    const { budget, startDate, endDate, tripInfo, country } = event.target
    let firstPoint = routePoint[0]
    let lastPoint = routePoint[routePoint.length - 1]
    let between = routePoint.filter((el, i) => { if (i != 0 && i != (routePoint.length - 1)) return el })
    console.log('------>', budget.value);
    fetch(process.env.REACT_APP_URL_ADDTRIP, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        country: country.value,
        budget: budget.value,
        startDate: startDate.value,
        endDate: endDate.value,
        tripInfo: tripInfo.value,
        email: email
        // new logic\/\/\/\/
        , startCoords: firstPoint,
        finalCoords: lastPoint,
        betweenCoords: between


      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }




  return (
    <div>
      <YMaps>
        <Map defaultState={{
          center: props.data,
          zoom: 5,
        }}
          height={500}
          width={700}

          onClick={(e) => HandlerCreateRoute(e)}
        >
          {routePoint && routePoint.map(el =>
            <Placemark key={el} geometry={el}
              onClick={(e) => console.log(e.originalEvent.target.geometry._coordinates)}
              onContextMenu={(e) => {
                console.log(e.originalEvent.target.geometry._coordinates);
                HandlerEditRoute(e)
              }} />)}

          {routePoint.length >= 2 && (
            <GeoObject
              geometry={{
                type: 'LineString',
                coordinates: routePoint,
              }}
              options={{
                geodesic: true,
                strokeWidth: 5,
                strokeColor: '#F008',
                openBalloonOnClick: true,
              }}
              onClick={(e) => console.log(e.originalEvent.target.geometry._coordPath._coordinates)}
            />
          )}
        </Map>
      </YMaps>

      <form onSubmit={(e) => tripHandler(e)}>
        <div style={{
          display: 'flex', border: 'solid 1px', maxWidth: '900px', minHeight: '50px', alignItems: 'center',
        }}
        >
          <input placeholder="Страна" name="country" />
          <DatePicker
            name="startDate"
            placeholderText="Начальная дата"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
            maxDate={selectedDateSecond}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            locale={ru}
          />

          <DatePicker
            name="endDate"
            placeholderText="Конечная дата"
            selected={selectedDateSecond}
            onChange={(date) => setSelectedDateSecond(date)}
            dateFormat="dd.MM.yyyy"
            minDate={new Date() && selectedDate}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            locale={ru}
          />
          <input placeholder="бюджет" name="budget" />

        </div>
        <div>
          <textarea name="tripInfo" require rows="10" cols="70" placeholder="Информация о поездке" />
          <button >Создать путешествие </button>
        </div>
      </form>










    </div>
  );
}

export default FirstPointMap;
