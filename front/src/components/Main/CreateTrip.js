import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFromCityToCoordsAC } from '../../redux/actions';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import MainMap from '../Map/MainMap';



function CreateTrip(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateSecond, setSelectedDateSecond] = useState(null);
  const user =useSelector(store=>store.auth.user._id)
 console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFromCityToCoordsAC());
  }, []);

  const data = useSelector((state) => state.fetch.fetch);
  console.log(data);
 
  const tripHandler=(event)=>{
    event.preventDefault()
    const {budget,startDate,endDate,tripInfo,country,user}=event.target
    
    console.log('------>',budget.value);
    fetch(process.env.REACT_APP_URL_ADDTRIP,{
      method:'POST',
      headers:{
        'Content-type':'Applycation/json'
      },
      body:JSON.stringify({
        country:country.value,
        budget:budget.value,
        startDate:startDate.value,
        endDate:endDate.value,
        tripInfo:tripInfo.value,
        author:user
      })
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  return (
    <div>
      <h1>Создайте свой маршрут путешествия</h1>
      <form onSubmit={tripHandler}>
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
        <MainMap />
      </form>
    </div>
  );
}

export default CreateTrip;
