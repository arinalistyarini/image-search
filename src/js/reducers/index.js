import { IMAGE_SEARCH_DONE, IMAGE_SEARCH_LOAD_DONE, ADD_KEYWORD } from "../constants/action-types";

const initialState = {
	images: [],
	imageKeyword: []
};

function rootReducer(state = initialState, action) {
	// fetch image without pagination
	if (action.type === IMAGE_SEARCH_DONE) {
		const arr = [];
		arr.push(action.payload);
		return Object.assign({}, state, {
			images: arr
		});
	}

	// fetch image with pagination (need concat) - load more
	if (action.type === IMAGE_SEARCH_LOAD_DONE) {
		return Object.assign({}, state, {
			images: state.images.concat(action.payload)
		});
	}

	// keyword of image search
	if (action.type === ADD_KEYWORD) {
		const arr = [];
		arr.push(action.payload);
		return Object.assign({}, state, {
			imageKeyword: arr
		});
	}

	return state;
}

export default rootReducer