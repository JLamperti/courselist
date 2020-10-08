import { combineReducers } from "redux";
import { courseList } from "./courseListReducer";

export const combinedReducers = combineReducers({
    courseList,
});
