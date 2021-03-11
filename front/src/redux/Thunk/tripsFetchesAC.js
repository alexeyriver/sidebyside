import { initTripsAC,deleteTripAC} from "../actionCreators";


export const initTripsFetchAC = () => (dispatch) => {
  fetch(process.env.REACT_APP_URL_FIND_ALL_TRIP)
    .then((res) => res.json())
    .then((data) => dispatch(initTripsAC(data)));
};

export const deleteTripsFetchAC = (itemId) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL_FIND_ALL_TRIP}/${itemId}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if(response.status === 200){
        dispatch(deleteTripAC(itemId))
      }
    })
}

export const editMyTripFetchAC = (value)=>(dispatch)=>{
 console.log(value);
  fetch(`${process.env.REACT_APP_URL_FIND_ALL_TRIP}/${value.itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      budget:value.budget,
      startDate:value.startDate,
      endDate:value.endDate,
      tripInfo:value.tripInfo,
      participants:value.participants

      
    })   
          
    }
        ).then((res) => res.json())
        // .then((data) => console.log(data));
}
