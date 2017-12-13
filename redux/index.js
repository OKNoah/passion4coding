import { createStore, applyMiddleware, combineReducers } from 'redux'
import { ApiClient, clientMiddleware } from './ApiClient'
import remoteDevTools from 'remote-redux-devtools'
import { reducer as verticals } from './modules/verticals'
import categories from './modules/categories'
import courses from './modules/courses'

const {
  DEVTOOLS,
  DEVTOOLS_PORT,
  DEVTOOLS_HOST
} = process.env

const reducer = combineReducers({
  categories,
  verticals,
  courses
})

const initStore = (state) => {
  const client = new ApiClient()
  const middlewares = [clientMiddleware(client)]
  const storeCreator = applyMiddleware(...middlewares)(createStore)

  return storeCreator(
    reducer,
    state,
    DEVTOOLS ? remoteDevTools({
      name: 'passion4coding',
      realtime: true,
      hostname: DEVTOOLS_HOST || 'localhost',
      port: DEVTOOLS_PORT || 3001
    }) : undefined
  )
}

export default initStore
