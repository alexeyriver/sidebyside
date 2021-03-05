import { CHANGE_DEPARTMENT } from './types'

const initialState = {
  departments: [{ department: 'DevOps', peopleofD: 5 }, { department: 'UI/UX', peopleofD: 7 }]
}
export const departsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_DEPARTMENT:
      return {
        ...state, departments: [...state.departments.map(el => {
          if (action.payload.department == el.department) { return action.payload } else return el
        })]
      }


    default: return state
  }

}
