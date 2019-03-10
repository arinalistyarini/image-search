import React from "react";
import { Route, Redirect } from 'react-router-dom';
import Header from "./Header";
import SearchPage from "./search/SearchPage";
import FavouritePage from "./favourite/FavouritePage";
import Footer from "./Footer";

const App = () => (
	<div className="wrapper-page">
		<Header />
		<div className="main" role="main">
			<Route path='/search' component={SearchPage} />
			<Route path='/favourites' component={FavouritePage} />
			<Redirect from="/" to="search" />
		</div>
		<Footer />
	</div>
);

export default App;