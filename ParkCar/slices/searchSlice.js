// This file is going to be responsible for
// everything that's inside of the advance search
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    destination: null, // `destination` points to the location where we want a spot for booking
    distance: null,
    ratings: null,
    price: null,
    securityMeasures: null,
}

export const searchSlice = createSlice({
    name: 'advanceSearch', // Name of the slice
    initialState,
    // When we push info into data layer we need a dispatch action
    reducers: {
        // First parameter in current state, second parameter is the action
        // when we make the dispatch from the component to the data layer
        setDestination: (state, action) => {
            state.destination = action.payload; // Setting the `destination` according to our action
        },
        setDistance: (state, action) => {
            state.distance = action.payload; // Setting the `travelTime` according to our action
        },
        setRatings: (state, action) => {
            state.ratings = action.payload; // Setting the `travelTime` according to our action
        },
        setPrice: (state, action) => {
            state.price = action.payload; // Setting the `travelTime` according to our action
        },
        setSecurityMeasures: (state, action) => {
            state.securityMeasures = action.payload; // Setting the `travelTime` according to our action
        },
    },
});


// Pushing information into data layer
export const { setDestination, setDistance,
    setRatings, setPrice, setSecurityMeasures } = searchSlice.actions; // Exporting each action available

// Selectors for fetching information from data layer
export const selectDestination = (state) => state.advanceSearch.destination;
export const selectDistance = (state) =>
    state.advanceSearch.distance;
export const selectRatings = (state) =>
    state.advanceSearch.ratings;
export const selectPrice = (state) =>
    state.advanceSearch.price;
export const selectSecurityMeasures = (state) =>
    state.advanceSearch.securityMeasures;

export default searchSlice.reducer;
