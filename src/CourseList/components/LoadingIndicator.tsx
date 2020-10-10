import React from "react";
import { Typography, CircularProgress } from "@material-ui/core";
export const LoadingIndicator: React.FC = () => (
    <div className="course-list-centered-display">
        <CircularProgress color="secondary" />
        <Typography variant="h5" align="center">
            The data loading is "async", so look at this pretty spinning circle
            for a second :) <br />
            (Uses a timeout to simulate async loading)
        </Typography>
    </div>
);
