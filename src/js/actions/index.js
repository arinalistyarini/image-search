import { IMAGE_SEARCH_DONE, IMAGE_SEARCH_LOAD_DONE, ADD_KEYWORD } from "../constants/action-types";

const baseAPI = "http://api.giphy.com/v1/gifs/search";
const apiKey = "tzUGkwP1sKo7qvYTSBKoxduhxr2Upb4Y";
export function fetchImageSearch(keyword, offset) {
	return function(dispatch, getState) {
		let URL = `${baseAPI}?q=${keyword}&api_key=${apiKey}`;

		// pagination available
		if (typeof offset !== 'undefined') {
			URL = `${baseAPI}?q=${keyword}&api_key=${apiKey}&offset=${offset}`;

			return fetch(URL)
				.then(response => response.json())
				.then(
					json => {
						dispatch({type: IMAGE_SEARCH_LOAD_DONE, payload: json});
					}
				);
		}

		// no pagination
		return fetch(URL)
			.then(response => response.json())
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