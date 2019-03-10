import React, { Component } from "react";

export default class ImageItem extends Component {
	render() {
		return this.props.imgOriginalData.width >= this.props.imgOriginalData.height ?
			// image orientation: landscape or square
			<li className="list-item" key={this.props.imgId}>
				<div className="item-wrapper">
					<div className="heart-wrapper">
						<span className="icon-heart"></span>
					</div>
					<div className="img-wrapper">
						<img src={this.props.imgOriginalData.url} alt={this.props.imgTitle} />
					</div>
				</div>
			</li>
		:
			// image orientation: portrait
			<li className="list-item" key={this.props.imgId}>
				<div className="item-wrapper">
					<div className="heart-wrapper">
						<span className="icon-heart"></span>
					</div>
					<div className="img-wrapper">
						<img src={this.props.imgOriginalData.url} alt={this.props.imgTitle} className="portrait" />
					</div>
				</div>
			</li>
	};
}