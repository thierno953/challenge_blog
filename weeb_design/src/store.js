import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  headerDetailsReducer,
  headerReducer,
  headersReducer,
  newHeaderReducer,
} from "./redux/reducers/headerReducer";

const reducer = combineReducers({
  headers: headersReducer,
  newHeader: newHeaderReducer,
  header: headerReducer,
  headerDetail: headerDetailsReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
