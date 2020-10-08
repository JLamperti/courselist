import initialCourseListObject from "./courseList.json";
import { actionTypes } from "../../actionTypes";

type courseListStateType = Array<{
    courseId: number;
    courseName: string;
    wishListFlag: boolean;
}>;

type actionType = {
    type: actionTypes;
};

const { courseList: initialCourseList } = initialCourseListObject;

export const courseList = (
    state: courseListStateType = initialCourseList,
    action: actionType
) => {
    switch (action.type) {
        case actionTypes.TOGGLE_WISHLIST_FLAG: {
            return;
        }
        default: {
            return state;
        }
    }
};
