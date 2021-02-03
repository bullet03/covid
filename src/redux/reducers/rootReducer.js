import { combineReducers } from 'redux'
import countriesListReducer from "./countriesListReducer"

const createRootReducer = () => combineReducers({
  countriesListReducer
})

export default createRootReducer