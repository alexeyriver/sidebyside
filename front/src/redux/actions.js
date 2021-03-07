import axios from 'axios';
import { FROM_CITY_TO_COORDS } from './types';
// export function changeDepAC(changedep) {
//   return {
//     type: CHANGE_DEPARTMENT,
//     payload: changedep
//   }
// }

export function fetchFromCityToCoordsAC() {
  return async (dispatch) => {
    const response = await axios.get('https://geocode-maps.yandex.ru/1.x/?apikey=84f3099a-6de5-4986-816c-186384023e64&format=json&geocode=Лондон');
    // const json = await resp.json()
    dispatch({ type: FROM_CITY_TO_COORDS, payload: response.data.response });
  };
}

// export function inputAC(input){
//   return {
//     type: INPUT_PETYX,
//     payload: input
//   }
// }

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
