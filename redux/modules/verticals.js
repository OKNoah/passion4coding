import verticals from '../../json/verticals.json'

const GET_VERTICALS = 'redux/saves/GET_VERTICALS'
const GET_VERTICALS_SUCCESS = 'redux/saves/GET_VERTICALS_SUCCESS'
const GET_VERTICALS_FAILURE = 'redux/saves/GET_VERTICALS_FAILURE'

const initialState = {
  loaded: false,
  data: []
}

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_VERTICALS:
      return {
        ...state,
        loaded: false
      };

    case GET_VERTICALS_SUCCESS:
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };

    default:
      return state;
  }
}

export function getVerticals () {
  return {
    types: [GET_VERTICALS, GET_VERTICALS_SUCCESS, GET_VERTICALS_FAILURE],
    promise: () => {
      const data = verticals

      return Promise.resolve({ data })
    }
  }
}
