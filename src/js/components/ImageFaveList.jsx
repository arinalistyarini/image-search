import React, { Component } from "react";
import { connect } from "react-redux";
import ImageItem from "./ImageItem";

const mapStateToProps = state => {
	return { 
		imageList: state.imagesFave,
	}
};


class ConnectedImageFaveList extends Component {
	render() {
		return(
			<div className="image-result">
				<ul className="list-image">
					{/* image list */}
					{this.props.imageList.map(
						el => (
							<ImageItem imgOriginalData={el.images.original_still} key={el.id} imgId={el.id} imgTitle={el.title} isImgLiked={true} />
						)
					)}
				</ul>
				{ !this.props.imageList.length ? <div className="form-group"><p>No image found in favourites.</p></div> : null }
			</div>
		);
	};
}

const ImageFaveList = connect(mapStateToProps)(ConnectedImageFaveList);
export default ImageFaveList;