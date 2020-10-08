import { Grid } from "@material-ui/core";
import React from "react";

type CourseProps = {
    courseName: string;
    courseId: number;
    wishListFlag: boolean;
};

export const Course: React.FC<CourseProps> = ({
    courseName,
    courseId,
    wishListFlag,
}) => {
    return (
        <Grid item xs={6}>
            {courseName}
            asd wishlistflag: {wishListFlag}
            id: {courseId}
        </Grid>
    );
};
