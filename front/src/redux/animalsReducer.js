import { FETCH_CAT, INPUT_PETYX, FETCH_DOG , FETCH_KEK} from './types'

const initialState = { cat: {}, petyx: {}, dog: {} , kek:{} }
export const animalsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CAT:
      return {
        ...state, cat: action.payload
      }
    case INPUT_PETYX:
      return {
        ...state, petyx: action.payload
      }
    case FETCH_DOG:
      return {
        ...state, dog: action.payload
      }
      case FETCH_KEK:
        return {
          ...state, kek: action.payload
        }

    default: return state
  }

}
