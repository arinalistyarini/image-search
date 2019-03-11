import React, { Component } from "react";
import { connect } from "react-redux";
import ImageFaveList from "../ImageFaveList";
import { clearImageListAndStatus } from "../../actions/index";

class ConnectedFavouritePage extends Component {
	render() {
		// clear imagelist redux state
		// so when back to search page, the image result disappear
		this.props.clearImageListAndStatus();

		return(
			<div className="container">
				<ImageFaveList />
			</div>
		);
	};
}

const FavouritePage = connect(null, { clearImageListAndStatus })(ConnectedFavouritePage);
export default FavouritePage;