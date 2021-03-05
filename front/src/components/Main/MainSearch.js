import React from 'react';
import Map from './Map'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useState} from 'react'



function MainSearch(props) {
 const [selectedDate,setSelectedDate]=useState(null)
 const [selectedDateSecond,setSelectedDateSecond]=useState(null)

  return (
    <div>
     <h1>ПОИСКОВАЯ ФОРМА</h1>
     
    <div style={{display:'flex'}}>
     <div className='searchDiv'>
     <input type='text' placeholder='Страна'></input>

       <DatePicker placeholderText="Начальная дата" selected ={selectedDate}
      onChange={date=>setSelectedDate(date)}
      dateFormat='dd.MM.yyyy'
      minDate={new Date()}
      isClearable
      showYearDropdown
      scrollableMonthYearDropdown
      />
      
     

       <DatePicker placeholderText="Конечная дата" selected ={selectedDateSecond}
      onChange={date=>setSelectedDateSecond(date)}
      dateFormat='dd.MM.yyyy'
      minDate={new Date()}
      isClearable
      showYearDropdown
      scrollableMonthYearDropdown
      />
      
      </div>
      </div>
     
      <Map/>
    </div>
  );
}

export default MainSearch;
