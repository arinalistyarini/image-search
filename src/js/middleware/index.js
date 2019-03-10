import { IMAGE_FAVE_DONE, IMAGE_FAVE_REMOVED } from "../constants/action-types";


export function hasBeenFavedMiddleware({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === IMAGE_FAVE_DONE) {
		const result = action.payload;
		const imagesFaveState = getState().imagesFave;
		var found = false;
		for(var i = 0; i < imagesFaveState.length; i++) {
			if (imagesFaveState[i].id === result.id) {
				found = true;
				break;
			}
		}

		if (found) {
			return dispatch({ type: "FOUND_FAVED" });
		}
      }
      return next(action);
    };
  };
}

export function hasBeenRemovedMiddleware({ getState, dispatch }) {
	return function(next) {
	  return function(action) {
		// do your stuff
		if (action.type === IMAGE_FAVE_REMOVED) {
		  const result = action.payload;
		  const imagesFaveState = getState().imagesFave;
		  var found = false;
		  for(var i = 0; i < imagesFaveState.length; i++) {
			  if (imagesFaveState[i].id === result.id) {
				  found = true;
				  break;
			  }
		  }
  
		  if (!found) {
			return dispatch({ type: "FAVED_UNFOUND" });
		  }
		}
		return next(action);
	  };
	};
  }