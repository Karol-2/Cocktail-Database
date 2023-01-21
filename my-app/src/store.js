import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import adminReducer from "./reducers/adminReducer";

const store = createStore(adminReducer, applyMiddleware(thunk));

export default store;
