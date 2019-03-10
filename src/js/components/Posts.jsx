import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const apiURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=tzUGkwP1sKo7qvYTSBKoxduhxr2Upb4Y";

function mapStateToProps(state) {
	return {
		articles: state.remoteArticles
	}
}

export class Post extends Component {
	componentDidMount() {
		this.props.getData(apiURL);
	}

	render() {
		return (
			<div>
				<h2>Hahahha</h2>
				<ul className="list-group list-group-flush">
					{this.props.articles.map(
						el => (
							el.data.map(li => (
								<li className="list-group-item" key={li.id}>
									{li.images.original.url}
								</li>
							))
						)
					)}
				</ul>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	{ getData }
)(Post);