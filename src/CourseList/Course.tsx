import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { CourseType } from "../types";
import { ToggleWishlistButton } from "./components/ToggleWishlistButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrappingPaper: {
            padding: "15px",
            margin: "15px",
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
    })
);

export const Course: React.FC<CourseType> = ({
    courseName,
    courseId,
    wishlistFlag,
}) => {
    const styles = useStyles();
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper className={styles.wrappingPaper}>
                {courseName}
                <ToggleWishlistButton
                    wishlistFlag={wishlistFlag}
                    courseId={courseId}
                />
            </Paper>
        </Grid>
    );
};
