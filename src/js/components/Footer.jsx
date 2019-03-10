import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return(
			<footer>
				<div className="container">
					<ul className="footer-wrapper">
						<li className="footer-item">
							<span>Gallereasy POC web app</span>
						</li>
						<li className="footer-item">
							<span>2359 Media</span>
						</li>
					</ul>
				</div>
			</footer>
		);
	};
}