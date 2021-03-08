import { initTripsAC } from "../actionCreators";
export const initTripsFetchAC = () => (dispatch) => {
  fetch(process.env.REACT_APP_URL_TRIPS)
    .then((res) => res.json())
    .then((data) => dispatch(initTripsAC(data)));
};
