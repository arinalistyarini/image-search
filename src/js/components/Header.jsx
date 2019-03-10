import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return(
			<header>
				<nav className="header-nav">
					<a className="header-brand" href="http://google.com">
						<div className="header-title">
							Galler
							<span className="bold">easy</span>
						</div>
					</a>
					<ul className="header-menu-wrapper">
						<li className="header-item active">
							<a href="http://google.com">Search</a>
						</li>
						<li className="header-item">
							<a href="http://google.com">Favourites</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	};
}