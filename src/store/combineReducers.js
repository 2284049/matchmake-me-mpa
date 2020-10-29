import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import matches from "./reducers/matches";

export default combineReducers({
   currentUser,
   matches,
});
