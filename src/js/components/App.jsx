import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from "./Header";
import SearchPage from "./search/SearchPage";
import FavouritePage from "./favourite/FavouritePage";
import Footer from "./Footer";

const App = () => (
	<div className="wrapper-page">
		<Header />
		<div className="main" role="main">
			<Switch>
				<Redirect exact from='/' to="/search" />
				<Route path='/search' component={SearchPage} />
			</Switch>
			<Route path='/favourites' component={FavouritePage} />
		</div>
		<Footer />
	</div>
);

export default App;