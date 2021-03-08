import axios from 'axios';
import { FROM_CITY_TO_COORDS,FETCH_CREATE_JOURNEY } from './types';
// export function changeDepAC(changedep) {
//   return {
//     type: CHANGE_DEPARTMENT,
//     payload: changedep
//   }
// }

export function fetchFromCityToCoordsAC() {
  return async (dispatch) => {
    const response = await axios.get('https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=Лондон');
    // const json = await resp.json()
    dispatch({ type: FROM_CITY_TO_COORDS, payload: response.data.response });
  };
}

export function fetchCreateJourneyAC(value){
  return async (dispatch) => {
    const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=de443bec-303e-4052-bc88-4e6872551ce0&format=json&geocode=${value}`);
    // const json = await resp.json()
    // dispatch({ type: FETCH_CREATE_JOURNEY, payload: response.data.response });
    dispatch({ type: FETCH_CREATE_JOURNEY, payload: response.data.response });
    
  };
}

// export function dogAC(){
//   return {
//     type: SAGA_DOG_TAKE_EVERY

//   }
// }

// export function kekAC(){
//   return async dispatch => {
//     const resp = await fetch('http://localhost:4000')
//     const json = await resp.json()
//     dispatch({ type: FETCH_KEK, payload: json.feta })
//   }
// }
