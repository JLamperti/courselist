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
    console.log(
        `setting wishlist flag for ${toggledCourseId} to ${isCourseWishedFor}`
    );
    return courseList.map(({ courseId, wishlistFlag, ...restProps }) => {
        return {
            ...restProps,
            courseId,
            wishlistFlag:
                courseId === toggledCourseId ? isCourseWishedFor : wishlistFlag,
        };
    });
};
