import React from "react";
import { Container, Form } from "semantic-ui-react";

const Login = props => {
	return (
		<Container align="center">
			<h1>Login</h1>
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
					<input type="submit" className="ui button" />
				</Form.Field>
			</Form>
		</Container>
	);
};

export default Login;
