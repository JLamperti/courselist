import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseList } from "./CourseList";
import { appStateType } from "../types";
import { loadCourses } from "../redux/actions/loadCourses";

type CourseListContainerType = {};

const useLoadDataOnFirstRender = (dispatch): void => {
    useEffect(() => {
        loadCourses(dispatch);
    }, []);
};

export const CourseListContainer: React.FC<CourseListContainerType> = () => {
    const dispatch = useDispatch();
    useLoadDataOnFirstRender(dispatch);

    const courseList = useSelector((state: appStateType) => state.courseList);
    const isLoadingData = useSelector(
        (state: appStateType) => state.isLoadingData
    );

    return <CourseList courseList={courseList} isLoading={isLoadingData} />;
};
