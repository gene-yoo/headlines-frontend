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
			results: [],
			allSources: [],
			currentSourceIds: []
		};

		this.getFeed = this.getFeed.bind(this);
	}

	componentDidMount() {
		// setInterval(this.getFeed, 10000);
		this.getFeed();
	}

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

	handleToggleSource(ev) {
		let updatedSourceIds = [...this.state.currentSourceIds];

		if (updatedSourceIds.includes(ev.currentTarget.firstChild.value)) {
			updatedSourceIds = updatedSourceIds.filter(
				id => id !== ev.currentTarget.firstChild.value
			);
		} else {
			updatedSourceIds.push(ev.currentTarget.firstChild.value);
		}

		this.setState(
			{
				currentSourceIds: updatedSourceIds
			},
			() => console.log(this.state.currentSourceIds)
		);
	}

	getFeed() {
		api.getFeed(this.props.user).then(json => this.setFeed(json));
	}

	setFeed(json) {
		let sources = {};

		json.articles.map(article => article.source).forEach(src => {
			if (!Object.keys(sources).includes(src.id)) {
				sources[src.id] = src;
			}
		});

		sources = [...Object.values(sources)];

		this.setState({
			feed: json.articles,
			allSources: sources,
			currentSourceIds: sources.map(src => src.id)
		});
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
										getFeedMethod={this.getFeed.bind(this)}
										handleToggleSource={this.handleToggleSource.bind(this)}
										allSources={this.state.allSources}
										currentSourceIds={this.state.currentSourceIds}
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
