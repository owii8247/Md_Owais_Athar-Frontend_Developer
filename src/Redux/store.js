import thunk from "redux-thunk"
import { reducer as AppReducer } from "./reducer"
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";


const rootReducer = combineReducers({
    AppReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store }