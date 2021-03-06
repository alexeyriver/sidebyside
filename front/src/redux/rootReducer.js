
import { combineReducers } from 'redux'
import {fetchReducer} from './fetchReducer.js'
// import {animalsReducer} from './animalsReducer.js'


export const rootReducer = combineReducers({

  fetch: fetchReducer
  // ,
  // animals: animalsReducer
  
})
