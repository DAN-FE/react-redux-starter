import { combineReducers } from 'redux'
import locationReducer from './location'
import global from './global'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    global: global,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
