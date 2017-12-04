import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import FeedContainer from "./FeedContainer";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "../services/api";
import { Segment } from "semantic-ui-react";
import NewsContainer from "./NewsContainer";
import UsersContainer from "./UsersContainer";

class DistractifyContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			feed: [],
			searchTerm: "",
			results: [],
			sources: [],
			categories: []
		};
	}

	componentDidMount() {
		api
			.getAllSourcesAndCategories()
			.then(res =>
				this.setState({ sources: res.sources, categories: res.categories })
			);
	}

	getFeed() {
		api.getFeed().then(json => this.setFeed(json));
	}

	setFeed(json) {
		this.setState({ feed: json.articles });
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

	setResults(json) {
		this.props.history.push("/results");
		this.setState({ results: json.articles });
	}

	handleSignupSubmit(signupCredentials) {
		api.postNewUser(signupCredentials, this.props.loginMethod);
	}

	handleLoginSubmit(loginCredentials) {
		api.loginUser(loginCredentials, this.props.loginMethod);
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
						<Route path="/news" component={NewsContainer} />
						<Route path="/users" component={UsersContainer} />

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
								return (
									<FeedContainer
										getFeed={this.getFeed.bind(this)}
										feed={this.state.feed}
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
							render={() => {
								return (
									<SignUp
										categories={this.state.categories}
										sources={this.state.sources}
										handleSignupSubmit={this.handleSignupSubmit.bind(this)}
									/>
								);
							}}
						/>
					</Switch>
				</Segment>
			</div>
		);
	}
}

export default withRouter(DistractifyContainer);
