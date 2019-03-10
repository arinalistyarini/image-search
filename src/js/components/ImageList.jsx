import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return { imageList: state.images }
};

const ConnectedImageList = ({imageList}) => (
	<ul className="list-group list-group-flush">
		{imageList.map(
			el => (
				el.data.map(li => (
					<li className="list-group-item" key={li.id}>
						<img src={li.images.original.url} alt={li.title} />
					</li>
				))
			)
		)}
		{imageList.map(
			(el, i) => (
				<div key={i}>
					<p>total_count: {el.pagination.total_count}</p>
					<p>count: {el.pagination.count}</p>
					<p>offset: {el.pagination.offset}</p>
				</div>
			)
		)}
	</ul>
);

const ImageList = connect(mapStateToProps)(ConnectedImageList);
export default ImageList;