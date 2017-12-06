import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "./services/api";
import DistractifyContainer from "./components/DistractifyContainer";
import HomeContainer from "./components/HomeContainer";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			auth: {
				user: {}
			},
			isLoaded: false
		};

		if (localStorage.length === 0) {
			props.history.push("/welcome");
		} else {
			props.history.push("/feed");
		}
	}

	componentDidMount() {
		let reroutes = [
			"/my_profile",
			"/my_profile/edit",
			"/feed",
			"/network",
			"/login",
			"/signup"
		];
		let token = localStorage.getItem("token");
		if (token) {
			api.getCurrentUser(token).then(res => this.login(res));
		} else if (this.props.history.location.pathname === "/welcome") {
			this.setState({ isLoaded: true });
		} else {
			if (reroutes.includes(this.props.history.location.pathname)) {
				this.props.history.push("/login");
				this.setState({ isLoaded: true });
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		let prevProfileRoutes = ["/my_profile", "/my_profile/edit"];
		let token = localStorage.getItem("token");
		if (
			token &&
			nextProps.history.location.pathname === "/my_profile" &&
			this.props.history.location.pathname !== "/my_profile"
		) {
			api.getCurrentUser(token).then(res => this.login(res));
		}
	}

	login(res) {
		if (res.error) {
			alert("New phone who dis?");
			this.props.history.push("/login");
		} else {
			localStorage.setItem("token", res.token);

			this.setState(
				{
					auth: {
						user: res
					},
					isLoaded: true
				},
				() => {
					if (
						this.props.history.location.pathname === "/login" ||
						this.props.history.location.pathname === "/signup"
					) {
						this.props.history.push("/feed");
					}
				}
			);
		}
	}

	updateUser(userData) {
		this.setState({
			auth: {
				user: userData
			}
		});
		if (this.props.location.pathname === "/my_profile/edit") {
			this.props.history.push("/my_profile");
		}
	}

	logout() {
		localStorage.removeItem("token");
		this.setState(
			{
				auth: {
					user: {}
				}
			},
			() => this.props.history.push("/welcome")
		);
	}

	render() {
		return (
			<Route
				path="/"
				render={() => {
					return this.state.isLoaded ? (
						<DistractifyContainer
							loginMethod={this.login.bind(this)}
							logoutMethod={this.logout.bind(this)}
							user={this.state.auth.user}
							updateUserMethod={this.updateUser.bind(this)}
						/>
					) : (
						<h1>Loading...</h1>
					);
				}}
			/>
		);
	}
}

export default withRouter(App);
