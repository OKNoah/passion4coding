import { filter, matches } from 'lodash'
import categories from '../../json/categories.json'

const GET_CATEGORIES = 'redux/saves/GET_CATEGORIES'
const GET_CATEGORIES_SUCCESS = 'redux/saves/GET_CATEGORIES_SUCCESS'
const GET_CATEGORIES_FAILURE = 'redux/saves/GET_CATEGORIES_FAILURE'

const initialState = {
  loaded: false,
  data: []
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loaded: false
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...action.result,
        loaded: true
      };

    default:
      return state;
  }
}

export function getCategories (verticals = []) {
  return {
    types: [GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE],
    promise: () => {
      const data = []

      verticals.map(vert => {
        return data.push(...filter(categories, matches({ Verticals: vert.Id })))
      })

      return Promise.resolve({ data })
    }
  }
}
