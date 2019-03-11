import { 
	IMAGE_SEARCH_DONE, 
	IMAGE_SEARCH_LOAD_DONE, 
	ADD_KEYWORD, 
	IMAGE_FAVE_DONE, 
	IMAGE_FAVE_REMOVED, 
	STATUS_IS_LOADING,
	API_ERROR,
	CLEAR_IMAGE_STATUS
} from "../constants/action-types";

import { 
	NUMBER_FETCH, 
	API_BASE, 
	API_KEY 
} from "../constants/variable";

export function fetchImageSearch(keyword, offset) {
	return function(dispatch) {
		// loading status
		dispatch({type: STATUS_IS_LOADING});

		let URL = `${API_BASE}?q=${keyword}&api_key=${API_KEY}&limit=${NUMBER_FETCH}`;

		// pagination available
		if (typeof offset !== 'undefined') {
			URL = `${API_BASE}?q=${keyword}&api_key=${API_KEY}&offset=${offset}&limit=${NUMBER_FETCH}`;

			return fetch(URL)
				.then(
					response => response.json(),
					error => {
						dispatch({type: API_ERROR, payload: error });
					}
				)
				.then(
					json => {
						dispatch({type: IMAGE_SEARCH_LOAD_DONE, payload: json});
					}
				);
		}

		// no pagination
		return fetch(URL)
			.then(response => response.json(),
			error => {
				dispatch({type: API_ERROR, payload: error });
			}
		)
			.then(
				json => {
					dispatch({type: IMAGE_SEARCH_DONE, payload: json});
				}
			);
	};
}

export function addKeyword(payload) {
	return { type: ADD_KEYWORD, payload}
};

export function faveImage(payload) {
	return { type: IMAGE_FAVE_DONE, payload}
};

export function removeFaveImage(payload) {
	return { type: IMAGE_FAVE_REMOVED, payload}
};

export function clearImageListAndStatus(payload) {
	return { type: CLEAR_IMAGE_STATUS, payload}
};