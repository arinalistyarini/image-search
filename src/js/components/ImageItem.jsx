import React, { Component } from "react";

export default class ImageItem extends Component {
	constructor() {
		super();

		// local state of component
		this.state = {
			itemLiked: false
		};

		// method declaration
		this.handleClickImage = this.handleClickImage.bind(this);
	}

	handleClickImage() {
		this.setState(state => {
			return {
				itemLiked: !state.itemLiked
			}
		});
	}

	render() {
		return (
			// image orientation: portrait
			<li className={this.state.itemLiked ? "list-item liked" : "list-item"} key={this.props.imgId} onClick={this.handleClickImage}>
				<div className="item-wrapper">
					<div className="heart-wrapper">
						<span className="icon-heart"></span>
					</div>
					<div className="img-wrapper">
						<img src={this.props.imgOriginalData.url} alt={this.props.imgTitle} className={this.props.imgOriginalData.width >= this.props.imgOriginalData.height ? "" : "portrait"} />
					</div>
				</div>
			</li>
		);
	};
}