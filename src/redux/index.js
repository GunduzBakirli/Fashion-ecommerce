import { createStore, combineReducers } from "redux";
import allDataReducer from "./allDataReducer";
import basketReducer from "./basketReducer";
const reducers = combineReducers({
  allDataReducer,
  basketReducer,
});

function configureStore() {
  return createStore(reducers);
}

export default configureStore;
