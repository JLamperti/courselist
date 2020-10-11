import initialCourseListObject from "./courseList.json";

import { actionTypes } from "../../actionTypes";

export const loadCourses = (dispatch): void => {
    setTimeout(() => {
        const { courseList } = initialCourseListObject;

        dispatch({
            type: actionTypes.STORE_DATA,
            courseList,
        });
        dispatch({
            type: actionTypes.SET_LOADING_STATE,
            isLoadingData: false,
        });
    }, 30);
};
