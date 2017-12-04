import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import FeedContainer from "./FeedContainer";
import ProfileContainer from "./ProfileContainer";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "../services/api";
import { Segment } from "semantic-ui-react";

class DistractifyContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [],
			searchTerm: "",
			results: []
		};

		this.getFeed = this.getFeed.bind(this);
	}

	componentDidMount() {
		// setInterval(this.getFeed, 10000);
		this.getFeed(this.props.user);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (!this.props.user.id && !!nextProps.user.id) {
	// 		this.getFeed(nextProps.user);
	// 	}
	// }

	checkLoggedIn() {
		if (
			this.props.history.location.pathname === "/feed" &&
			localStorage.length === 0
		) {
			this.props.history.push("/login");
		}
	}

	handleSearchTerm(ev) {
		this.setState({ searchTerm: ev.target.value });
	}

	handleSearch() {
		api
			.search(this.state.searchTerm)
			.then(res => res.json())
			.then(json => this.setResults(json));
		// this.setState({ searchTerm: "" });
	}

	handleSignupSubmit(signupCredentials) {
		api.postNewUser(signupCredentials, this.props.loginMethod);
	}

	handleLoginSubmit(loginCredentials) {
		api.loginUser(loginCredentials, this.props.loginMethod);
	}

	handleEditProfile(info) {
		api.editUser(info, this.props.updateUserMethod);
	}

	getFeed(user) {
		api.getFeed(user).then(json => this.setFeed(json));
	}

	setFeed(json) {
		this.setState({ feed: json.articles });
	}

	setResults(json) {
		this.props.history.push("/results");
		this.setState({ results: json.articles });
	}

	render() {
		return (
			<div>
				<NavBar
					searchTerm={this.state.searchTerm}
					user={this.props.user}
					handleSearchTerm={this.handleSearchTerm.bind(this)}
					handleSearch={this.handleSearch.bind(this)}
					handleLogout={this.props.logoutMethod}
				/>

				<Segment attached="bottom">
					<Switch>
						<Route
							path="/results"
							render={() => {
								return (
									<FeedContainer
										feed={this.state.results}
										searchTerm={this.state.searchTerm}
										checkLoggedIn={this.checkLoggedIn.bind(this)}
									/>
								);
							}}
						/>

						<Route
							path="/feed"
							render={() => {
								return (
									<FeedContainer
										feed={this.state.feed}
										user={this.props.user}
										checkLoggedIn={this.checkLoggedIn.bind(this)}
									/>
								);
							}}
						/>

						<Route
							path="/login"
							render={() => (
								<Login handleLoginSubmit={this.handleLoginSubmit.bind(this)} />
							)}
						/>

						<Route
							path="/signup"
							render={() => (
								<SignUp
									handleSignupSubmit={this.handleSignupSubmit.bind(this)}
								/>
							)}
						/>

						<Route
							path="/my_profile"
							render={() => (
								<ProfileContainer
									user={this.props.user}
									checkLoggedIn={this.checkLoggedIn.bind(this)}
									handleEditProfile={this.handleEditProfile.bind(this)}
								/>
							)}
						/>
					</Switch>
				</Segment>
			</div>
		);
	}
}

export default withRouter(DistractifyContainer);
