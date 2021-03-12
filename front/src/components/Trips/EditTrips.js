import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editMyTripFetchAC } from "../../redux/Thunk/tripsFetchesAC";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import moment from 'moment'


function EditTrips(props) {
  
  const { id } = useParams();console.log(id);
  const trips = useSelector((state) => state.tripState.trips);
  
  const oneTrip = trips.filter((el) => el._id === id);
  const dispatch = useDispatch();
  
  const[newStartDate,setNewStartDate]=useState(null)
  const[newEndDate,setNewEndDate]=useState(null)

    const[budget,setBudget]=useState(oneTrip[0].budget)
    const[tripinfo,setTripinfo]=useState(oneTrip[0].tripInfo)

const  HandlerBudget = (e) =>{

   }
  const editHandler = (event) => {
    event.preventDefault()
    const { budget, startDate, endDate, tripInfo } = event.target;
    const value={
        budget: budget.value,
        startDate: startDate.value,
        endDate: endDate.value,
        tripInfo: tripInfo.value,
        itemId : id
      }
    dispatch(
      editMyTripFetchAC(value)
    );
  };

  return (
    <div style={{
      display: 'flex', border: 'solid 1px', maxWidth: '900px', minHeight: '50px', alignItems: 'center',
    }}>



      <form  onSubmit={editHandler}>
        <label>Бюджет<input name="budget" type ='number' onChange={(e)=>{HandlerBudget(e)}}  defaultValue={budget}></input></label>
        
        <DatePicker 
            name="startDate"
            placeholderText="Начальная дата"
            selected={newStartDate}
            onChange={(date) => setNewStartDate(date)}
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
            maxDate={newEndDate}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            locale={ru}
          />
        <DatePicker 
            name="endDate"
            placeholderText="Конечная дата"
            selected={newEndDate}
            onChange={(date) => setNewEndDate(date)}
            dateFormat="dd.MM.yyyy"
            minDate={new Date() && newStartDate}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            locale={ru}
          />
      
      <label>Информация о поездке<textarea  name="tripInfo" defaultValue={tripinfo}/></label>
          <button>Изменить</button>
     </form>
    </div>
  );
}

export default EditTrips;
