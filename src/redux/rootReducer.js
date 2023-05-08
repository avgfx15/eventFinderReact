import { combineReducers } from "redux";
import eventReducers from "./reducer";

const rootReducer = combineReducers({
  events: eventReducers,
});

export default rootReducer;
