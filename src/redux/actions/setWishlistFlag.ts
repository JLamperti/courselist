import { courseListType } from "../../types";

export const setWishlistFlag = ({
    courseList,
    courseId: toggledCourseId,
    isCourseWishedFor,
}: {
    courseList: courseListType;
    courseId?: number;
    isCourseWishedFor: boolean;
}): courseListType => {
    return courseList.map(({ courseId, wishlistFlag, ...restProps }) => {
        return {
            ...restProps,
            courseId,
            wishlistFlag:
                courseId === toggledCourseId ? isCourseWishedFor : wishlistFlag,
        };
    });
};
