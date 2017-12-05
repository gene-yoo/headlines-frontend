import React from "react";
import { Header, Button, List, Grid } from "semantic-ui-react";
import FormInfo from "../services/formInfo";

class EditProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			username: "",
			preferredSources: []
		};
	}

	componentDidMount() {
		this.props.checkLoggedIn();
		this.setState({
			id: this.props.user.id,
			username: this.props.user.username,
			preferredSources: this.props.user.source_ids
		});
	}

	handleUsernameChange(ev) {
		ev.preventDefault();
		this.setState({ username: ev.target.value });
	}

	handleEditCheckboxes(event) {
		let collection = this.state[event.target.name];

		if (event.target.checked) {
			collection.push(parseInt(event.target.value));
		} else {
			collection = collection.filter(
				item => item !== parseInt(event.target.value)
			);
		}

		this.setState({
			[event.target.name]: collection
		});
	}

	render() {
		let sourceOptions = FormInfo.sources.map(source => (
			<List.Item key={source.id}>
				<input
					type="checkbox"
					name="preferredSources"
					value={source.id}
					onChange={this.handleEditCheckboxes.bind(this)}
					checked={this.state.preferredSources.includes(
						parseInt(source.id, 10)
					)}
				/>
				<label htmlFor={source.slug}>{source.name}</label>
			</List.Item>
		));
		return (
			<div>
				<Header as="h1">Edit My Profile</Header>
				<Header as="h3">Edit Username</Header>
				<input
					value={this.state.username}
					type="text"
					onChange={this.handleUsernameChange.bind(this)}
				/>
				<Header as="h3">Edit Favorite Sources</Header>

				<List horizontal>{sourceOptions}</List>

				<Button onClick={() => this.props.handleEditProfile(this.state)}>
					Update Profile
				</Button>
			</div>
		);
	}
}

export default EditProfile;
