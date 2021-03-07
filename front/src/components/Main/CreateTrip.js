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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFromCityToCoordsAC());
  }, []);

  const data = useSelector((state) => state.fetch.fetch);
  console.log(data);

  return (
    <div>
      <h1>Создайте свой маршрут путешествия</h1>
      <form>
        <div style={{
          display: 'flex', border: 'solid 1px', maxWidth: '900px', minHeight: '50px', alignItems: 'center',
        }}
        >
          <DatePicker
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
            placeholderText="Конечная дата"
            selected={selectedDateSecond}
            onChange={(date) => setSelectedDateSecond(date)}
            dateFormat="dd.MM.yyyy"
            minDate={selectedDate}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            locale={ru}
          />
          <input placeholder="бюджет" />

        </div>
        <div>
          <textarea require rows="10" cols="70" placeholder="Информация о себе и поездке" />
          <button>Создать путешествие </button>
        </div>
        <MainMap />
      </form>
    </div>
  );
}

export default CreateTrip;
