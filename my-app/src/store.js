import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchDataReducer from "./reducers/fetchDataReducer";

const rootReducer = combineReducers({
  fetchData: fetchDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
