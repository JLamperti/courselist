import React from "react";

import { Provider } from "react-redux";

import "./App.css";

import { store } from "./redux";
import { CourseListContainer } from "./CourseList/CourseListContainer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    spacing: () => ({
        mui: true,
    }),
});

export const App: React.FC = () => {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CourseListContainer />
                </ThemeProvider>
            </Provider>
        </>
    );
};

export default App;
