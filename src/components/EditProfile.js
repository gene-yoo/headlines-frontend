import React from "react";
import {
	Header,
	Button,
	List,
	Grid,
	Container,
	Card,
	Input
} from "semantic-ui-react";
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
			<Card
				key={source.id}
				align="center"
				style={{ width: "115px", height: "70px" }}
			>
				<Card.Header>
					<Input
						type="checkbox"
						name="preferredSources"
						value={source.id}
						onChange={this.handleEditCheckboxes.bind(this)}
						checked={this.state.preferredSources.includes(
							parseInt(source.id, 10)
						)}
					/>
				</Card.Header>

				<Card.Content style={{ paddingTop: "5px" }}>{source.name}</Card.Content>
			</Card>
		));
		return (
			<Container style={{ width: "775px" }}>
				<Header as="h1">Edit My Profile</Header>

				<Container style={{ paddingBottom: "25px" }}>
					<Button onClick={() => this.props.handleEditProfile(this.state)}>
						Save Profile
					</Button>

					<Header as="h3">Edit Username</Header>
					<Input
						value={this.state.username}
						type="text"
						onChange={this.handleUsernameChange.bind(this)}
					/>
				</Container>

				<Container style={{ paddingBottom: "25px" }}>
					<Header as="h3">Edit Favorite Sources</Header>
					<Card.Group>{sourceOptions}</Card.Group>
				</Container>
			</Container>
		);
	}
}

export default EditProfile;
