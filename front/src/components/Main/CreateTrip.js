import React, { useState } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFromCityToCoordsAC, fetchCreateJourneyAC } from '../../redux/actions';
import FirstPointMap from '../Map/FirstPointMap';
import { Container } from 'react-bootstrap'



function CreateTrip(props) {
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedDateSecond, setSelectedDateSecond] = useState(null);
  // const email = useSelector(store => store.auth.user.email)
  // const dispatch = useDispatch();

  const [clickfirstPoint, setClickfirstPoint] = useState(false);
  const [propsfirstPoint, setPropsfirstPoint] = useState('');

  const SubmitFormFirstPoint = async (e) => {
    e.preventDefault();
    if (e.target.firstPoint.value.length) {
      const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_URL_API_KEY}&format=json&geocode=${e.target.firstPoint.value}`);
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
