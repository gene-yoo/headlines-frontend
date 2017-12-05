import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import FeedContainer from "./FeedContainer";
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
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.user);
		if (!this.props.user.id) {
			this.getFeed(nextProps.user);
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

	getFeed(user) {
		api.getFeed(user).then(json => this.setFeed(json));
	}

	setFeed(json) {
		this.setState({ feed: json.articles }, () =>
			console.log("inside dc setfeed: ", this.state.feed)
		);
	}

	setResults(json) {
		this.props.history.push("/results");
		this.setState({ results: json.articles });
	}

	render() {
		// console.log("re-rendering dc: ", this.state.feed);
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
									/>
								);
							}}
						/>

						<Route
							path="/feed"
							render={() => {
								console.log("re-rendering FC from DC: ", this.state.feed);
								return <FeedContainer feed={this.state.feed} />;
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
					</Switch>
				</Segment>
			</div>
		);
	}
}

export default withRouter(DistractifyContainer);
