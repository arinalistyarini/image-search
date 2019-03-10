import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
	return { 
		imageList: state.imagesFave,
	}
};

class ConnectedHeader extends Component {
	render() {
		return(
			<header>
				<nav className="header-nav">
					<NavLink className="header-brand" to="/search">
						<div className="header-title">
							Galler
							<span className="bold">easy</span>
						</div>
					</NavLink>
					<ul className="header-menu-wrapper">
						<li className="header-item">
							<NavLink to="/search">Search</NavLink>
						</li>
						<li className="header-item">
							<NavLink to="/favourites">Favourites ({this.props.imageList.length})</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	};
}

// solve active class not working: https://stackoverflow.com/a/44146661
const Header = connect(mapStateToProps, null, undefined, { pure: false })(ConnectedHeader);
export default Header;