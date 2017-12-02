import React from "react";
import { Container, Form, Header, Button } from "semantic-ui-react";

const Login = props => {
	return (
		<Container align="center">
			<Header as="h1">Login</Header>
			<Form onSubmit={props.handleLoginSubmit}>
				<Form.Field>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={props.loginTerms.username}
						onChange={props.handleLoginTerms}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={props.loginTerms.password}
						onChange={props.handleLoginTerms}
					/>
				</Form.Field>
				<Form.Field>
					<Button type="submit">Submit</Button>
				</Form.Field>
			</Form>
		</Container>
	);
};

export default Login;
