import { ADD_ARTICLE, DATA_LOADED, SEARCH_KEYWORD, IMAGE_SEARCH_DONE } from "../constants/action-types";

export function changeSearchKeyword(payload) {
	return { type: SEARCH_KEYWORD, payload}
};

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload}
};

export function getData(URL) {
	return function(dispatch, getState) {
		return fetch(URL)
			.then(response => response.json())
			.then(
				json => {
					dispatch({type: DATA_LOADED, payload: json});
				}
			);
	};
}

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=tzUGkwP1sKo7qvYTSBKoxduhxr2Upb4Y
const baseAPI = "http://api.giphy.com/v1/gifs/search";
const apiKey = "tzUGkwP1sKo7qvYTSBKoxduhxr2Upb4Y";
export function fetchImageSearch(keyword, offset) {
	return function(dispatch, getState) {
		let URL = `${baseAPI}?q=${keyword}&api_key=${apiKey}`;
		if (offset !== null) {
			URL = `${baseAPI}?q=${keyword}&api_key=${apiKey}&offset=${offset}`;
		}

		return fetch(URL)
			.then(response => response.json())
			.then(
				json => {
					dispatch({type: IMAGE_SEARCH_DONE, payload: json});
				}
			);
	};
}