import { combineReducers } from 'redux'
import countriesListReducer from "./countriesListReducer"
import sortReducer from './sortReducer'

const createRootReducer = () => combineReducers({
  countriesListReducer
})

export default createRootReducer