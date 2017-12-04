import React from "react";
import { Container, Form, Header, Button } from "semantic-ui-react";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleLoginTerms = this.handleLoginTerms.bind(this);
	}

	handleLoginTerms(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<Container align="center">
				<Header as="h1">Login</Header>
				<Form
					onSubmit={ev => {
						ev.preventDefault();
						this.props.handleLoginSubmit(this.state);
					}}
				>
					<Form.Field>
						<input
							type="text"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleLoginTerms}
						/>
					</Form.Field>
					<Form.Field>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleLoginTerms}
						/>
					</Form.Field>
					<Form.Field>
						<Button type="submit">Submit</Button>
					</Form.Field>
				</Form>
			</Container>
		);
	}
}

export default Login;
