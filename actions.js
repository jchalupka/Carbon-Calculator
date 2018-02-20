import actionTypes from './actionTypes.js'

let nextStartLocationId = 0;
let nextEndLocationId = 0;

// Takes the text from StartLocation and returns proper "Action" JSON to send to other components
export const updateStartLocation = (locationText) => {
  nextStartLocationId += 1;
  return {
    type: actionTypes.updateStartLocation,
    id: nextStartLocationId,
    startLocation: locationText,
  };
};

// Takes the text from EndLocation and returns proper "Action" JSON to send to other components
export const updateEndLocation = (locationText) => {
  nextEndLocationId += 1;
  return {
    type: actionTypes.updateEndLocation,
    id: nextEndLocationId,
    endLocation: locationText,
  };
};

// Takes the text from StartLocation and EndLocation
// and updates the Map window to display the route
export const updateMap = (startLocation, endLocation) =>
  ({
    type: actionTypes.updateMap,
    startLocation,
    endLocation,
  });
