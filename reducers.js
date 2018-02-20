import actionTypes from './actionTypes';

export default reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.updateStartLocation:
      state.startLocation = startLocation;
      return state;

    case actionTypes.updateEndLocation:
      state.endLocation = endLocation;
      return state;

    case actionTypes.updateMap:
      // TODO not sure what to do here, no real state change
      // perhaps update the time the map was last updated?
      return state
    
    default:
      return state;
  }
}