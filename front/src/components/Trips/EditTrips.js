import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editMyTripFetchAC } from "../../redux/Thunk/tripsFetchesAC";

function EditTrips(props) {
  const { id } = useParams();console.log(id);
  const trips = useSelector((state) => state.tripState.trips);
  const oneTrip = trips.filter((el) => el._id === id);
  const dispatch = useDispatch();

  const editHandler = (event) => {
    const { budget, startDate, endDate, tripInfo, participants } = event.target;
    const value={
        budget: budget.value,
        startDate: startDate.value,
        endDate: endDate.value,
        tripInfo: tripInfo.value,
        participants: participants.value,
        itemId:id
      }
    dispatch(
      editMyTripFetchAC(value)
    );
  };

  return (
    <div>
      <form onSubmit={editHandler}>
        <input name="budget" value={oneTrip.budget}></input>
        <input name="startDate" value={oneTrip.startDate}></input>
        <input name="endDate" value={oneTrip.endDate}></input>
        <input name="tripInfo" value={oneTrip.tripInfo}></input>
        <input name="participants" value={oneTrip.participants}></input>
        <button>Изменить</button>
      </form>
    </div>
  );
}

export default EditTrips;
