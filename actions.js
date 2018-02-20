let nextStartLocationId = 0;
let nextEndLocationId = 0;

// Takes the text from StartLocation and returns proper "Action" JSON to send to other components
export const updateStartLocation = (locationText) => {
  nextStartLocationId += 1;
  return {
    type: 'UPDATE_START_LOCATION',
    id: nextStartLocationId,
    startLocation: locationText,
  };
};

// Takes the text from EndLocation and returns proper "Action" JSON to send to other components
export const updateEndLocation = (locationText) => {
  nextEndLocationId += 1;
  return {
    type: 'UPDATE_END_LOCATION',
    id: nextEndLocationId,
    endLocation: locationText,
  };
};

// Takes the text from StartLocation and Endloaction
// and updates the Google Maps window to display the route
export const updateGoogleMaps = (startLocation, endLocation) =>
  ({
    type: 'UPDATE_GOOGLE_MAPS',
    startLocation,
    endLocation,
  });
