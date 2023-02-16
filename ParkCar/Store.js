// For redux we need a data layer where we will store
// data & when needed, we can fetch them

import { configureStore } from "@reduxjs/toolkit"; // This helps to setup the data layer
// We can separate the data layer into different areas
// Among them one primary area, where we will store
// our information, is called `Navigation` slice
// which gonna store the navigation data(source, dest)
import navReducer from "./slices/navSlice";

const Store = configureStore({
    // `reducer` is setting up the store or the global
    //  data layer & connected to the navigation slice
    reducer: {
        nav: navReducer,
    },
});

export default Store;