import React from "react";
import { Container, Form, Header } from "semantic-ui-react";

const SignUp = props => {
	let sourceOptions = props.sources.map(source => (
		<div>
			<input
				type="checkbox"
				name="preferredSources"
				value={source.id}
				onChange={props.handleSignUpCheckboxes}
			/>
			<label htmlFor={source.slug}>{source.name}</label>
		</div>
	));

	let categoryOptions = props.categories.map(category => (
		<div>
			<input
				type="checkbox"
				name="preferredCategories"
				value={category.id}
				onChange={props.handleSignUpCheckboxes}
			/>
			<label htmlFor={category.slug}>{category.name}</label>
		</div>
	));

	return (
		<Container align="center">
			<Header as="h1">SignUp</Header>
			<Form onSubmit={props.handleSignupSubmit}>
				<Form.Field className="field">
					<input
						onChange={props.handleSignUpTerms}
						value={props.signUpTerms.username}
						type="text"
						name="username"
						placeholder="Username"
					/>
				</Form.Field>
				<Form.Field>
					<input
						onChange={props.handleSignUpTerms}
						value={props.signUpTerms.password}
						type="text"
						name="password"
						placeholder="Password"
					/>
				</Form.Field>

				<Form.Field>
					<input
						onChange={props.handleSignUpTerms}
						value={props.signUpTerms.passwordConfirmation}
						type="text"
						name="passwordConfirmation"
						placeholder="Password Confirmation"
					/>
				</Form.Field>

				<div>
					<Header as="h3">Choose Sources: </Header>
					{sourceOptions}

					<Header as="h3">Choose Categories: </Header>
					{categoryOptions}
				</div>

				<Form.Field>
					<input type="submit" className="ui button" />
				</Form.Field>
			</Form>
		</Container>
	);
};

export default SignUp;
