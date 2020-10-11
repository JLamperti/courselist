import React from "react";
import { Course } from "./Course";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { LoadingIndicator } from "./components/LoadingIndicator";

import { courseListType, CourseType } from "../types";

type courseListElementType = {
    courseList: courseListType;
    isLoading: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridWrapper: {
            flexGrow: 1,
        },
    })
);

export const CourseList: React.FC<courseListElementType> = ({
    courseList,
    isLoading,
}) => {
    if (isLoading) {
        return <LoadingIndicator />;
    } else {
        const styles = useStyles();
        return (
            <>
                <Typography variant="h2" align="center" gutterBottom>
                    Courses
                </Typography>

                <div className={styles.gridWrapper}>
                    <Grid container spacing={3}>
                        {courseList.map(
                            ({ courseId, ...restProps }: CourseType) => (
                                <Course
                                    key={courseId}
                                    courseId={courseId}
                                    {...restProps}
                                />
                            )
                        )}
                    </Grid>
                </div>

                <Typography variant="h2">TODOs</Typography>
                <List>
                    <ListItem>
                        UI - more prettier (box-model, hovers, paper styles)
                    </ListItem>
                    <ListItem>configure material UI</ListItem>
                </List>
            </>
        );
    }
};
