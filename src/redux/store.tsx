import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combinedReducers } from "./reducers";

export const store = createStore(combinedReducers, applyMiddleware(thunk));

// expose store when run in Cypress
// no clue how to type this
if (window.Cypress) {
    window.store = store;
}
