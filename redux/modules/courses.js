import { filter, matches } from 'lodash'
import courses from '../../json/courses.json'

const GET_COURSES = 'redux/saves/GET_COURSES'
const GET_COURSES_SUCCESS = 'redux/saves/GET_COURSES_SUCCESS'
const GET_COURSES_FAILURE = 'redux/saves/GET_COURSES_FAILURE'

const initialState = {
  loaded: false,
  data: []
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        loaded: false
      };

    case GET_COURSES_SUCCESS:
      return {
        ...state,
        ...action.result,
        loaded: true
      };

    default:
      return state;
  }
}

export function getCourses (categories = []) {
  return {
    types: [GET_COURSES, GET_COURSES_SUCCESS, GET_COURSES_FAILURE],
    promise: () => {
      const data = []

      categories.map(vert => {
        return data.push(...filter(courses, matches({ Categories: vert.Id })))
      })

      return Promise.resolve({ data })
    }
  }
}
