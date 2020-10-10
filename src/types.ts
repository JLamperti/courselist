export type CourseType = {
    courseName: string;
    courseId: number;
    wishlistFlag: boolean;
};

export type courseListType = Array<{
    courseId: number;
    courseName: string;
    wishlistFlag: boolean;
}>;

export type appStateType = {
    courseList: courseListType;
    isLoadingData: boolean;
};
