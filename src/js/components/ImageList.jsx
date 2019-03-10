import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImageSearch } from "../actions/index";
import ImageItem from "./ImageItem";

const mapStateToProps = state => {
	return { 
		imageList: state.images,
		keyword: state.imageKeyword
	}
};


class ConnectedImageList extends Component {
	constructor() {
		super();

		// local state of component
		this.state = {
			paginationData: {},
			isLoadMore: false,
			dataLength: null,
			dataOffset: null,
		};

		// method declaration
		this.handleClickLoadMore = this.handleClickLoadMore.bind(this);
	}

	handleClickLoadMore(totalCount, count, offset) {
		if (count < totalCount) {
			const keywordImage = this.props.keyword[0];
			const next = 25 + offset;
			this.props.fetchImageSearch(keywordImage, next);
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.imageList !== this.props.imageList) {
			const imageProps = this.props.imageList[0];
			if (typeof imageProps !== 'undefined') {
				const imagePropsPagination = imageProps.pagination;
				
				if (imagePropsPagination.count < imagePropsPagination.total_count) {
					this.setState({
						isLoadMore: true
					});

					if (this.dataLength + this.dataOffset + 1 >= imagePropsPagination.total_count) {
						this.setState({
							isLoadMore: false
						});
					}
				} else {
					this.setState({
						isLoadMore: false
					});
				}
			}
		}
	}

	render() {
		return(
			<div className="image-result">
				<ul className="list-image">
					{/* image list */}
					{this.props.imageList.map(
						el => (
							el.data.map(li => {
								return (
									<ImageItem imgOriginalData={li.images.original_still} key={li.id} imgId={li.id} imgTitle={li.title} />
								);
							})
						)
					)}

					{/* load more button */}
					{this.props.imageList.map(
						(el) => {
							this.paginationData = el.pagination;
							this.dataLength = el.data.length;
							this.dataOffset = el.pagination.offset;
							return '';
						}
					)}

				</ul>
				{ this.state.isLoadMore ? <button className="load-more" onClick={() => this.handleClickLoadMore(this.paginationData.total_count, this.paginationData.count, this.paginationData.offset)}>Load More</button> : null }
			</div>
		);
	};
}

const ImageList = connect(mapStateToProps, { fetchImageSearch })(ConnectedImageList);
export default ImageList;