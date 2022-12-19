import * as React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FunctionComponent = () => {
	const logo = require("./logo.svg").default;
	let activeStyle = {
		borderBottom: "#ebebeb solid 2px",
	};
	return (
		<header className="header">
			<img src={logo} className="header-logo" alt="logo" />
			<h1 className="header-title">React Shop</h1>
			<nav>
				<NavLink
					to="/products"
					className="header-
           link"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Products
				</NavLink>
				<NavLink
					to="/admin"
					className="header-link"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Admin
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
