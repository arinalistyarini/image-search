import { 
	IMAGE_SEARCH_DONE, 
	IMAGE_SEARCH_LOAD_DONE, 
	ADD_KEYWORD, 
	IMAGE_FAVE_DONE, 
	IMAGE_FAVE_REMOVED, 
	STATUS_IS_LOADING, 
	IMAGE_SEARCH_NO_DATA, 
	API_ERROR,
	CLEAR_IMAGE_STATUS
} from "../constants/action-types";

const initialState = {
	images: [], // image from search
	imagesFave: [], // liked images
	imageKeyword: [], // keyword of image
	isLoading: false, // loading indicator (for fetch API)
	isImagesNoData: false, // result of search image not found
	isAPIError: false, // API error
};

function rootReducer(state = initialState, action) {
	// fetch image without pagination
	if (action.type === IMAGE_SEARCH_DONE) {
		const arr = [];
		arr.push(action.payload);
		return Object.assign({}, state, {
			images: arr,
			isLoading: false
		});
	}

	// fetch image with pagination (need concat) - load more
	if (action.type === IMAGE_SEARCH_LOAD_DONE) {
		return Object.assign({}, state, {
			images: state.images.concat(action.payload),
			isLoading: false
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

	// liked images
	if (action.type === IMAGE_FAVE_DONE) {
		return Object.assign({}, state, {
			imagesFave: state.imagesFave.concat(action.payload)
		});
	}

	// remove liked image
	if (action.type === IMAGE_FAVE_REMOVED) {
		return Object.assign({}, state, {
			imagesFave: state.imagesFave.filter(({ id }) => id !== action.payload.id)
		});
	}

	// loading state
	if (action.type === STATUS_IS_LOADING) {
		return Object.assign({}, state, {
			isLoading: true,
			isImagesNoData: false,
			isAPIError: false
		});
	}

	// no image search data to display
	if (action.type === IMAGE_SEARCH_NO_DATA) {
		return Object.assign({}, state, {
			isImagesNoData: true,
			isLoading: false,
		});
	}

	// GIPHY API error
	if (action.type === API_ERROR) {
		return Object.assign({}, state, {
			isAPIError: true,
			isLoading: false,
		});
	}

	// clear image list (used in other page beside search page)
	if (action.type === CLEAR_IMAGE_STATUS) {
		return Object.assign({}, state, {
			images: [],
			isImagesNoData: false,
			isAPIError: false,
		});
	}

	return state;
}

export default rootReducer