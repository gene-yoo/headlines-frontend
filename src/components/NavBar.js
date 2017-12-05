import React from "react";
import { Link } from "react-router-dom";
import { Menu, Form, Input, Button, Dropdown } from "semantic-ui-react";

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
						<Button align="middle" color="red">
							Login
						</Button>
					</Link>
				) : (
					<Dropdown text={`Welcome, ${props.user.username}`}>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Link to="/my_profile" style={{ color: "black" }}>
									My Profile
								</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link to="/my_profile/edit" style={{ color: "black" }}>
									Edit Profile
								</Link>
							</Dropdown.Item>
							<Dropdown.Item onClick={props.handleLogout}>
								<Link to="/login" style={{ color: "black" }}>
									Logout
								</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
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
