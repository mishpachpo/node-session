import reducerSum from "./sumReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  sum: reducerSum
});

export default reducer;
