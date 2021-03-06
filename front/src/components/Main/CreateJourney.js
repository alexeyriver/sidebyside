import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"
import {fetchFromCityToCoordsAC} from '../../redux/actions'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru'




function CreateJourney(props) {

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedDateSecond, setSelectedDateSecond] = useState(null)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFromCityToCoordsAC())
  }, []);

   const data = useSelector(state => state.fetch.fetch)
   console.log(data);

  return (
    <div>
      <h1>Тут можно создать путешествие</h1>

      <div style={{ display: 'flex' }}>
      <DatePicker placeholderText="Начальная дата" selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='dd.MM.yyyy'
            minDate={new Date()}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            locale={ru}
            
          />



          <DatePicker placeholderText="Конечная дата" selected={selectedDateSecond}
            onChange={date => setSelectedDateSecond(date)}
            dateFormat='dd.MM.yyyy'
            minDate={selectedDate}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            locale={ru}
          />

        </div>
    </div>
  );
}

export default CreateJourney;
