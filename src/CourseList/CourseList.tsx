import React from "react";
import { useSelector, useStore } from "react-redux";
import { Course } from "./Course";
import { Grid } from "@material-ui/core";

export const CourseList: React.FC = () => {
    const store = useStore();

    console.log(store.getState());

    const courseList = useSelector((state) => state.courseList);

    return (
        <>
            <div className="App">
                <header className="App-header">COURSELIST</header>
            </div>
            <Grid container spacing={3}>
                {courseList.map(
                    ({ courseId, ...restProps }: { courseId: number }) => (
                        <Course
                            key={courseId}
                            courseId={courseId}
                            {...restProps}
                        />
                    )
                )}
            </Grid>
        </>
    );
};
