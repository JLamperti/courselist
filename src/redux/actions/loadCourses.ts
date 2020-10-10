import initialCourseListObject from "./courseList.json";

import { actionTypes } from "../../actionTypes";

export const loadCourses = (dispatch): void => {
    setTimeout(() => {
        const { courseList } = initialCourseListObject;
        console.log("got inititial data");
        console.log(courseList);

        dispatch({
            type: actionTypes.STORE_DATA,
            courseList,
        });
        dispatch({
            type: actionTypes.SET_LOADING_STATE,
            isLoadingData: false,
        });
    }, 5);
};
