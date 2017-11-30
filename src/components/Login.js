import React from "react";

const Login = props => {
	return (
		<div className="ui center aligned container">
			<h1>Login</h1>
			<form className="ui form">
				<div className="field">
					<input type="text" name="username" placeholder="Username" />
				</div>
				<div className="field">
					<input type="text" name="password" placeholder="Password" />
				</div>
				<div className="field">
					<input type="submit" className="ui button" />
				</div>
			</form>
		</div>
	);
};

export default Login;
