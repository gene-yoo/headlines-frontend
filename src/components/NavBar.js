import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Search, Form, Input, Button } from "semantic-ui-react";

const NavBar = props => {
	return (
		<Menu attached="top" color="red" inverted>
			<Menu.Item>
				<Link to="/feed">
					<i className="ui huge home icon" />
				</Link>
			</Menu.Item>
			<Menu.Item>
				{!props.user.username ? (
					<Link to="/login">
						<Button align="middle">Login</Button>
					</Link>
				) : (
					<Button align="middle" onClick={props.handleLogout}>
						Logout
					</Button>
				)}
			</Menu.Item>
			<Menu.Item position="right">
				<Form
					onSubmit={ev => {
						ev.preventDefault();
						props.handleSearch();
					}}
				>
					<Form.Field>
						<Input
							placeholder="Search distractify..."
							value={props.searchTerm}
							onChange={props.handleSearchTerm}
						/>
					</Form.Field>
				</Form>
			</Menu.Item>
		</Menu>
	);
};

export default NavBar;

/*
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
*/
