import { combineReducers } from "redux";
import transReducer from "./transReducer";

export default combineReducers({
  transaction: transReducer,
});
