import React, { Component } from "react";
import { connect } from "react-redux";
import { faveImage, removeFaveImage } from "../actions/index";

class ConnectedImageItem extends Component {
	constructor() {
		super();

		// local state of component
		this.state = {
			itemLiked: false,
			itemClicked: false
		};

		// method declaration
		this.handleClickImage = this.handleClickImage.bind(this);
	}

	componentDidMount() {
		this.setState(() => {
			return {
				itemLiked: this.props.isImgLiked
			}
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state && this.state.itemClicked) {
			if (this.state.itemLiked) {
				this.props.faveImage({
					id: this.props.imgId,
					images: {
						original_still: {
							width: this.props.imgOriginalData.width,
							height: this.props.imgOriginalData.height,
							url: this.props.imgOriginalData.url
						}
					},
					title: this.props.imgTitle
				});
			} else {
				this.props.removeFaveImage({
					id: this.props.imgId
				});
			}

			this.setState(() => {
				return {
					itemClicked: false
				}
			});
		}

	}
	
	handleClickImage() {
		this.setState(state => {
			return {
				itemLiked: !state.itemLiked,
				itemClicked: true
			}
		});
	}

	render() {
		return (
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

const ImageItem = connect(null, { faveImage, removeFaveImage })(ConnectedImageItem);
export default ImageItem;