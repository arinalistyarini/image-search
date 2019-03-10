import { ADD_ARTICLE, DATA_LOADED, SEARCH_KEYWORD, IMAGE_SEARCH_DONE } from "../constants/action-types";

const initialState = {
	articles: [],
	remoteArticles: [],
	searchKeyword: [],
	images: []
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_ARTICLE) {
		return Object.assign({}, state, {
			articles: state.articles.concat(action.payload)
		});
	}

	if (action.type === DATA_LOADED) {
		return Object.assign({}, state, {
			remoteArticles: state.remoteArticles.concat(action.payload)
		});
	}

	if (action.type === SEARCH_KEYWORD) {
		const arr = [];
		arr.push(action.payload);
		return Object.assign({}, state, {
			searchKeyword: arr
		});
	}

	if (action.type === IMAGE_SEARCH_DONE) {
		const arr = [];
		arr.push(action.payload);
		return Object.assign({}, state, {
			images: arr
		});
	}

	return state;
}

export default rootReducer