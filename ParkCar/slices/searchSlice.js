// This file is going to be responsible for
// everything that's inside of the advance search
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    source: null, // `source` defines the location where are we now
    destination: null, // `destination` points to the location where we want a spot for booking
    distance: null, 
    slots: null,
    securityMeasures: null,
}

export const searchSlice = createSlice({
    name: 'advanceSearch', // Name of the slice
    initialState,
    // When we push info into data layer we need a dispatch action
    reducers: {
        // First parameter in current state, second parameter is the action
        // when we make the dispatch from the component to the data layer
        setSource: (state, action) => {
            state.source = action.payload; // Setting the `source` according to our action
        },
        setDestination: (state, action) => {
            state.destination = action.payload; // Setting the `destination` according to our action
        },
        setDistance: (state, action) => {
            state.distance = action.payload; // Setting the `travelTime` according to our action
        },
        setSlots: (state, action) => {
            state.slots = action.payload; // Setting the `travelTime` according to our action
        },
        setSecurityMeasures: (state, action) => {
            state.securityMeasures = action.payload; // Setting the `travelTime` according to our action
        },
    },
});


// Pushing information into data layer
export const { setSource, setDestination, 
    setDistance, setSlots, setSecurityMeasures } = searchSlice.actions; // Exporting each action available

// Selectors for fetching information from data layer
export const selectSource = (state) => state.advanceSearch.source; // `selectOrigin` will go into the state.advanceSearch.origin and return the current value 
export const selectDestination = (state) => state.advanceSearch.destination;
export const selectDistance = (state) => 
    state.advanceSearch.distance;
export const selectSlots = (state) => 
    state.advanceSearch.slots;
export const selectSecurityMeasures = (state) => 
    state.advanceSearch.securityMeasures;

export default searchSlice.reducer;
