import { combineReducers } from "redux";
import { courseListReducer } from "./courseListReducer";
import { isLoadingDataReducer } from "./isLoadingDataReducer";

export const combinedReducers = combineReducers({
    courseList: courseListReducer,
    isLoadingData: isLoadingDataReducer,
});
