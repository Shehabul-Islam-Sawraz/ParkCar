// This file is going to be responsible for
// everything that's inside of the navigation
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    source: null, // `source` defines the location where are we now
    destination: null, // `destination` points to the location where we want a spot for booking
    travelTimeInformation: null, // This is the time required to reach from source to destination
}

export const navSlice = createSlice({
    name: 'nav', // Name of the slice
    initialState,
    // When we push info into data layer we need a dispatch action
    reducer: {
        // First parameter in current state, second parameter is the action
        // when we make the dispatch from the component to the data layer
        setSource: (state, action) => {
            state.source = action.payload; // Setting the `source` according to our action
        },
        setDestination: (state, action) => {
            state.destination = action.payload; // Setting the `destination` according to our action
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload; // Setting the `travelTime` according to our action
        },
    },
});


// Pushing information into data layer
export const { setSource, setDestination, 
    setTravelTimeInformation } = navSlice.actions; // Exporting each action available

// Selectors for fetching information from data layer
export const selectSource = (state) => state.nav.source; // `selectOrigin` will go into the state.nav.origin and return the current value 
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => 
    state.nav.travelTimeInformation;

export default navSlice.reducer;
