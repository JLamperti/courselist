import { actionTypes } from "../../actionTypes";

import { courseListType } from "../../types";

import { setWishlistFlag } from "../actions";

type actionType = {
    type: actionTypes;
    courseId?: number;
    courseList: courseListType;
    isCourseWishedFor: boolean;
};

export const courseListReducer = (
    courseList: courseListType = [
        // { courseName: "123", courseId: 123, wishlistFlag: true },
    ],
    action: actionType
): courseListType => {
    switch (action.type) {
        case actionTypes.STORE_DATA: {
            console.log("storing data");
            return action.courseList;
        }
        case actionTypes.TOGGLE_WISHLIST_FLAG: {
            return setWishlistFlag({
                courseList,
                courseId: action.courseId,
                isCourseWishedFor: action.isCourseWishedFor,
            });
        }
        default: {
            return courseList;
        }
    }
};
