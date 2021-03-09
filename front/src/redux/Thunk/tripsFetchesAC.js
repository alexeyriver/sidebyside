import { initTripsAC,deleteTripAC} from "../actionCreators";
export const initTripsFetchAC = () => (dispatch) => {
  fetch('http://localhost:4000/trips')
    .then((res) => res.json())
    .then((data) => dispatch(initTripsAC(data)));
};

export const deleteTripsFetchAC = (itemId) => (dispatch) => {
  fetch(`process.env.REACT_APP_URL_FIND_ALL_TRIP/${itemId}`,{
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
