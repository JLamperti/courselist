import React from "react";

import { Provider } from "react-redux";

import { CourseList } from "./CourseList";
import "./App.css";

import { store } from "./redux";

export const App: React.FC = () => {
    return (
        <>
            <Provider store={store}>
                <CourseList />
            </Provider>
        </>
    );
};

export default App;
