import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromCityToCoordsAC ,fetchCreateJourneyAC} from '../../redux/actions';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import MainMap from '../Map/MainMap';
import FirstPointMap from '../Map/FirstPointMap';



function CreateTrip(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateSecond, setSelectedDateSecond] = useState(null);
  const email =useSelector(store=>store.auth.user.email)
 console.log(email);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFromCityToCoordsAC());
  }, []);

  // const data = useSelector((state) => state.fetch.fetch);
  // console.log(data);
 
  const tripHandler=(event)=>{
    event.preventDefault()
    const {budget,startDate,endDate,tripInfo,country}=event.target
    
    console.log('------>',budget.value);
    fetch(process.env.REACT_APP_URL_ADDTRIP,{
      method:'POST',
      headers:{
        'Content-type':'Application/json'
      },
      body:JSON.stringify({
        country:country.value,
        budget:budget.value,
        startDate:startDate.value,
        endDate:endDate.value,
        tripInfo:tripInfo.value,
        email:email
      })
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }


// старая логика сверху

// новая логика:
const [clickfirstPoint, setClickfirstPoint] = useState(false);
const [propsfirstPoint, setPropsfirstPoint] = useState('');


const SubmitFormFirstPoint =  async (e) =>{
  e.preventDefault();
  console.log(e.target.firstPoint.value);
  dispatch(fetchCreateJourneyAC(e.target.firstPoint.value))
  const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=84f3099a-6de5-4986-816c-186384023e64&format=json&geocode=${e.target.firstPoint.value}`);
  
  setPropsfirstPoint( response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos) 
  
  setClickfirstPoint(clickfirstPoint=>clickfirstPoint=true)
  

 

}



  return (
    <div>
      <h1>Создайте свой маршрут путешествия</h1>
      <form onSubmit={(e)=>tripHandler(e)}>
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
        {/* <MainMap /> */}
      </form>

      {/* {/* first version /\/\/\/\} */}
      {/* new version \/\/\/\/ */}
<div>hello</div>
<form onSubmit={(e) =>SubmitFormFirstPoint(e)} >
<input type="text" name="firstPoint" placeholder="Введите начальную точку"></input>
  <button type="submit">Сохранить</button>
</form>

{clickfirstPoint&&  <FirstPointMap props={{mapcenter:[55.751574, 37.573856],point:[60.751574, 37.573856],data:propsfirstPoint}}/> }





    </div>
  );
}

export default CreateTrip;
