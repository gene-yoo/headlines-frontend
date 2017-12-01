import React from "react";

const SignUp = props => {
	console.log(props);

	let sourceOptions = props.sources.map(source => (
		<div>
			<input type="checkbox" name={source.slug} value={source.slug} />
			<label htmlFor={source.slug}>{source.name}</label>
		</div>
	));

	let categoryOptions = props.categories.map(category => (
		<div>
			<input type="checkbox" name={category.slug} value={category.slug} />
			<label htmlFor={category.slug}>{category.name}</label>
		</div>
	));

	return (
		<div className="ui center aligned container">
			<h1>SignUp</h1>
			<form className="ui form" onSubmit={props.handleSignupSubmit}>
				<div className="field">
					<input type="text" name="username" placeholder="Username" />
				</div>
				<div className="field">
					<input type="text" name="password" placeholder="Password" />
				</div>

				<div className="field">
					<input
						type="text"
						name="password"
						placeholder="Password Confirmation"
					/>
				</div>

				<div>
					<h3>Choose Sources: </h3>
					{sourceOptions}

					<h3>Choose Categories: </h3>
					{categoryOptions}
				</div>

				<div className="field">
					<input type="submit" className="ui button" />
				</div>
			</form>
		</div>
	);
};

export default SignUp;
