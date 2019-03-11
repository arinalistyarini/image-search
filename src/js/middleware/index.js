import { 
	IMAGE_FAVE_DONE, 
	IMAGE_FAVE_REMOVED, 
	IMAGE_SEARCH_LOAD_DONE, 
	IMAGE_SEARCH_DONE, 
	IMAGE_SEARCH_NO_DATA 
} from "../constants/action-types";

// check if image already been faved
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
			return dispatch({ type: "FAVED_FOUND" });
		}
      }
      return next(action);
    };
  };
}

// check if fave image already been removed
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
			return dispatch({ type: "FAVED_NOT_FOUND" });
		  }
		}
		return next(action);
	  };
	};
}

// check image result empty or not
export function isImageResultEmpty({dispatch}) {
	return function(next) {
		return function(action) {
			// do your stuff
			if (action.type === IMAGE_SEARCH_LOAD_DONE | action.type === IMAGE_SEARCH_DONE) {
				const result = action.payload;

				let resultData = '';
				if (typeof result !== 'undefined') {
					resultData = result.data;
				}

				if (typeof result === 'undefined' || typeof resultData === 'undefined') {
					return dispatch({type: IMAGE_SEARCH_NO_DATA});
				}
			}

			return next(action);
		}
	}
}