import { ADD_ARTICLE, SEARCH_KEYWORD } from "../constants/action-types";
// const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ getState, dispatch }) {
	return function(next) {
		return function(action) {
			// script here
			if (action.type === ADD_ARTICLE) {
				// const foundWord = forbiddenWords.filter(
				// 	word => action.payload.title.includes(word)
				// );

				// if (foundWord.filter.length) {
				// 	return dispatch({
				// 		type: "FOUND_BAD_WORD"
				// 	});
				// }
			}

			// console.log(getState());
			return next(action);
		}
	}
}

export function processAPIMiddleware({ getState, dispatch }) {
	return function(next) {
		return function(action) {
			// script here
			if (action.type === SEARCH_KEYWORD) {
				console.log(action.payload);
			}
			return next(action);
		}
	}
}