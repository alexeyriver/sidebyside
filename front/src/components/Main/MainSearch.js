import React from 'react';
import Maps from './Maps'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useState} from 'react'
import SelectSerch from 'react-select-search'
import { useState, useEffect } from 'react'
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';



function MainSearch(props) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedDateSecond, setSelectedDateSecond] = useState(null)
  const [value, setValue] = useState('')
  const [dataFetch, setDataFetch] = useState('')

  const HandlerChanger = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (value.length >= 4) {
      fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=84f3099a-6de5-4986-816c-186384023e64&format=json&geocode=${value}`)
        .then(resp => resp.json())
        .then(data => { if (data.response?.GeoObjectCollection.featureMember[0].GeoObject.Point.pos) { setDataFetch(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')) } })//setDataFetch(data))
    }

  }, [value])
  
console.log(dataFetch);

  return (
    <div>
     <h1>ПОИСКОВАЯ ФОРМА</h1>
     
   

      <div style={{ display: 'flex' }}>
        <div className='searchDiv'>
          <input type='text' placeholder='Страна' value={value} onChange={(e) => HandlerChanger(e)}></input>

          <DatePicker placeholderText="Начальная дата" selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='dd.MM.yyyy'
            minDate={new Date()}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
          />



          <DatePicker placeholderText="Конечная дата" selected={selectedDateSecond}
            onChange={date => setSelectedDateSecond(date)}
            dateFormat='dd.MM.yyyy'
            minDate={selectedDate}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
          />

        </div>
      </div>

      {dataFetch.length==2 && value.length>2 && <YMaps> <Map
        defaultState={{
          center: [dataFetch[1],dataFetch[0]],
          zoom: 5,
        }} height={500} width={700}
        // onClick={(e)=>MapHandlerClick(e._sourceEvent.originalEvent.coords)} 
        onClick={(e) => console.log(e._sourceEvent.originalEvent.coords)}

      ></Map>
      </YMaps>}
    </div>
  );
}

export default MainSearch;
