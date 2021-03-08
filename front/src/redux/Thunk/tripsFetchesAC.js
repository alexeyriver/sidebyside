import { initTripsAC } from "../actionCreators";
export const initTripsFetchAC = () => (dispatch) => {
  fetch('http://localhost:4000/trips')
    .then((res) => res.json())
    .then((data) => dispatch(initTripsAC(data)));
};
