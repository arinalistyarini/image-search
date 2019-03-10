import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImageSearch } from "../actions/index";

class ConnectedSearchBox extends Component {
	constructor() {
		super();

		// local state of component
		this.state = {
			keyword: ""
		};

		// method declaration
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			keyword: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const { keyword } = this.state;

		// change space to "+"
		keyword.split(' ').join('+');

		// fetch image from action
		this.props.fetchImageSearch(keyword);
	}

	render() {
		const { keyword } = this.state;

		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						value={keyword}
						onChange={this.handleChange}
					/>
				</div>
			</form>
		);
	};
}

const SearchBox = connect(null, { fetchImageSearch })(ConnectedSearchBox);

export default SearchBox;