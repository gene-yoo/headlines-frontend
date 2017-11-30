import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
	return (
		<div className={`ui top fixed inverted red menu`}>
			<Link to="/feed">
				<i className="ui huge home icon" />
			</Link>
			<Link to="/login">
				<button className="ui middle aligned button">Login</button>
			</Link>
			<form
				className="ui fluid right aligned search item"
				onSubmit={ev => {
					ev.preventDefault();
					props.handleSearch();
				}}
			>
				<div className="ui icon input">
					<input
						className="prompt"
						type="text"
						placeholder="Search distractify..."
						value={props.searchTerm}
						onChange={props.handleSearchTerm}
					/>
					<i onClick={props.handleSearch} className="search link icon" />
				</div>
			</form>
		</div>
	);
};

export default NavBar;
