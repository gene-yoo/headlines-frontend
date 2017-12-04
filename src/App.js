import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import api from "./services/api";
import DistractifyContainer from "./components/DistractifyContainer";

class App extends Component {
	constructor() {
		super();

		this.state = {
			auth: {
				user: {}
			}
		};
	}

	componentDidMount() {
		let token = localStorage.getItem("token");
		if (token) {
			api.getCurrentUser(token).then(res => this.login(res));
		}
	}

	login(res) {
		localStorage.setItem("token", res.token);
		this.setState(
			{
				auth: {
					user: res
				}
			},
			() => this.props.history.push("/feed")
		);
	}

	logout() {
		localStorage.removeItem("token");
		this.setState(
			{
				auth: {
					user: {}
				}
			},
			() => this.props.history.push("/login")
		);
	}

	render() {
		return (
			<Route
				path="/"
				render={() => (
					<DistractifyContainer
						loginMethod={this.login.bind(this)}
						logoutMethod={this.logout.bind(this)}
						user={this.state.auth.user}
					/>
				)}
			/>
		);
	}
}

export default withRouter(App);
