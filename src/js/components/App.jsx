import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import SearchBox from "./SearchBox";
import ImageList from "./ImageList";

const App = () => (
	<div className="container">
		<div className="row mt-5">
			<div className="col-md-4 offset-md-1">
			<h2>Search</h2>
				<SearchBox />
			</div>
			<div className="col-md-4 offset-md-1">
				<ImageList />
			</div>
		</div>
		<div className="row mt-5">
			<div className="col-md-4 offset-md-1">
			<h2>Articles</h2>
				<List />
			</div>
			<div className="col-md-4 offset-md-1">
				<h3>Add a new article</h3>
				<Form />
			</div>
			<div className="col-md-4 offset-md-1">
				<h2>API posts</h2>
				<Post />
			</div>
		</div>
	</div>
);

// function App() {
// 	return(
// 		<div className="row mt-5">
// 			<div className="col-md-4 offset-md-1">
// 			<h2>Articles</h2>
// 				<List />
// 			</div>
// 			<div className="col-md-4 offset-md-1">
// 				<h3>Add a new article</h3>
// 				<Form />
// 			</div>
// 		</div>
// 	);
// };

export default App;