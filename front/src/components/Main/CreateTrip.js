import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromCityToCoordsAC, fetchCreateJourneyAC } from '../../redux/actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import MainMap from '../Map/MainMap';
import FirstPointMap from '../Map/FirstPointMap';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'



function CreateTrip(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateSecond, setSelectedDateSecond] = useState(null);
  const email = useSelector(store => store.auth.user.email)
  const dispatch = useDispatch();
  

 

  // новая логика:
  const [clickfirstPoint, setClickfirstPoint] = useState(false);
  const [propsfirstPoint, setPropsfirstPoint] = useState('');
 

  const SubmitFormFirstPoint = async (e) => {
    e.preventDefault();
    if (e.target.firstPoint.value.length) {
      const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=${e.target.firstPoint.value}`);
      if (response.data.response?.GeoObjectCollection.featureMember[0].GeoObject.Point.pos) {
        const cords = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
        setPropsfirstPoint(propsfirstPoint => propsfirstPoint = [cords[1], cords[0]])
      }
    }
    setClickfirstPoint(clickfirstPoint => clickfirstPoint = true)
  }



  return (
    <Container>
      <h1>Создайте свой маршрут путешествия</h1>
    

      <div>hello</div>



      {!clickfirstPoint &&
        <form onSubmit={(e) => SubmitFormFirstPoint(e)} >
          <input type="text" name="firstPoint" placeholder="Введите начальную точку"></input>
          <button type="submit">Сохранить</button>
        </form>
      }

      {clickfirstPoint &&
      <>
        <FirstPointMap props={{ data: propsfirstPoint }} />
      

      </>
      }
    </Container>
  );
}

export default CreateTrip;
