import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import createRootReducer from './reducers/rootReducer'

const middleware = [thunk]
const intialState = {}
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composedEnchanters = composeFunc(applyMiddleware(...middleware))
export const store = createStore(createRootReducer(), intialState, composedEnchanters)

export default store