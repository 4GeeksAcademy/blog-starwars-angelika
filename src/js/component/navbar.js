import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const logo ='https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png';
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<span className="navbar-brand mb-0 h1">
				<img src={logo} className="card-img-top logo" alt="..."/>
			</span>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary btn-fav">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
