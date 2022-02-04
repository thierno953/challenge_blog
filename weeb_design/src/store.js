import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  headerDetailsReducer,
  headerReducer,
  headersReducer,
  newHeaderReducer,
} from "./redux/reducers/headerReducer";
import {
  aboutDetailsReducer,
  aboutReducer,
  aboutsReducer,
  newAboutReducer,
} from "./redux/reducers/aboutReducer";
import {
  blogDetailsReducer,
  blogReducer,
  blogsReducer,
  newBlogReducer,
} from "./redux/reducers/blogReducer";
import {
  newServiceReducer,
  serviceDetailsReducer,
  serviceReducer,
  servicesReducer,
} from "./redux/reducers/serviceReducer";

const reducer = combineReducers({
  headers: headersReducer,
  newHeader: newHeaderReducer,
  header: headerReducer,
  headerDetail: headerDetailsReducer,

  abouts: aboutsReducer,
  newAbout: newAboutReducer,
  about: aboutReducer,
  aboutsDetail: aboutDetailsReducer,

  blogs: blogsReducer,
  newBlog: newBlogReducer,
  blog: blogReducer,
  blogsDetail: blogDetailsReducer,

  services: servicesReducer,
  newService: newServiceReducer,
  service: serviceReducer,
  servicesDetail: serviceDetailsReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
