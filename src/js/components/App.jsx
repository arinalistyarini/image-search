import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import ImageList from "./ImageList";
import Footer from "./Footer";

const App = () => (
	<div className="wrapper-page">
		<Header />
		<div class="main" role="main">
			<div className="container">
				<SearchBox />
				<ImageList />
			</div>
		</div>
		<Footer />
	</div>
);

export default App;