import React from "react";
import { Link } from "react-router-dom";
import {
	Menu,
	Form,
	Input,
	Button,
	Dropdown,
	Icon,
	Sticky
} from "semantic-ui-react";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};
	}

	handleSearchTerm(ev) {
		this.setState({ searchTerm: ev.target.value });
	}

	render() {
		return (
			<Menu
				attached="top"
				style={{
					backgroundColor: "rgb(121, 178, 174)"
				}}
				inverted
			>
				<Menu.Item>
					<Link to="/feed">
						<Icon name="home" size="big" />
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/network">
						<Icon name="users" size="big" />
					</Link>
				</Menu.Item>
				<Menu.Item>
					{!this.props.user.username ? null : (
						<Dropdown text={`Welcome, ${this.props.user.username}`}>
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
								<Dropdown.Item onClick={this.props.handleLogout}>
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
							this.props.handleSearch(this.state.searchTerm);
						}}
					>
						<Form.Field>
							<Input
								placeholder="Search for articles by keyword ..."
								style={{ width: "350px" }}
								icon="search"
								iconPosition="right"
								focus
								value={this.state.searchTerm}
								onChange={this.handleSearchTerm.bind(this)}
							/>
						</Form.Field>
					</Form>
				</Menu.Item>
			</Menu>
		);
	}
}

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
	<i onClick={this.props.handleSearch} className="search link icon" />
</div>
*/
