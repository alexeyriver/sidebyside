import { CHANGE_DEPARTMENT, FETCH_CAT, INPUT_PETYX ,SAGA_DOG_TAKE_EVERY ,FETCH_KEK} from './types'

export function changeDepAC(changedep) {
  return {
    type: CHANGE_DEPARTMENT,
    payload: changedep
  }
}


export function fetchCatAC() {
  return async dispatch => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search?size=full')
    const json = await resp.json()
    dispatch({ type: FETCH_CAT, payload: json })
  }
}

export function inputAC(input){
  return {
    type: INPUT_PETYX,
    payload: input
  }
}

export function dogAC(){
  return {
    type: SAGA_DOG_TAKE_EVERY
    
  }
}

export function kekAC(){
  return async dispatch => {
    const resp = await fetch('http://localhost:4000')
    const json = await resp.json()
    dispatch({ type: FETCH_KEK, payload: json.feta })
  }
}
