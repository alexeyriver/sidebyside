
import { combineReducers } from 'redux'
import {departsReducer} from './departsReducer.js'
import {animalsReducer} from './animalsReducer.js'


export const rootReducer = combineReducers({

  departament: departsReducer,
  animals: animalsReducer
  
})
