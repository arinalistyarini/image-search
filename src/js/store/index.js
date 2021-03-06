import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { hasBeenFavedMiddleware, isImageResultEmpty } from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	storeEnhancers(applyMiddleware(hasBeenFavedMiddleware, isImageResultEmpty, thunk))
);

export default store;